import { LRUCache } from 'lru-cache';
import fs from 'fs';
import path from 'path';

const isDev = process.env.NODE_ENV !== 'production';
const MAX_REQUESTS = isDev ? 1000 : 5;
const TTL = isDev ? 1000 * 5 : 1000 * 30;

const rateLimiter = new LRUCache({
  max: 10000, // MAX Number of IPs Tracked
  ttl: TTL,
});

function getIP(req) {
  return req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
}

export default function handler(req, res) {
  const ip = getIP(req);
  const ua = req.headers['user-agent'] || '';
  const now = new Date().toISOString();
  const { sound } = req.query;

  // Bot Detection
  const bots = ['bot', 'spider', 'crawl', 'slurp', 'curl', 'wget', 'requests', 'axios'];
  if (!ua || bots.some(b => ua.toLowerCase().includes(b))) {
    return res.status(403).json({ error: 'Access denied: suspected bot.' });
  }

  // Per-IP + Sound Cooldown
  const key = `${ip}-${sound}`;
  const count = rateLimiter.get(key) || 0;
  if (count >= MAX_REQUESTS) {
    return res.status(429).json({ error: 'Too many requests. Slow it down speedy!' });
  }
  rateLimiter.set(key, count + 1);

  // Validate Input
  if (!sound || typeof sound !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid sound parameter.' });
  }

  // Resolve File
  const requestedPath = path.resolve('./public/sounds', `${sound}.mp3`);
  const fallbackPath = path.resolve('./public/sounds', `default.mp3`);

  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;

  const fileExists = fs.existsSync(requestedPath);
  const finalSound = fileExists ? sound : 'default';

  const url = `${protocol}://${host}/sounds/${encodeURIComponent(finalSound)}.mp3`;
  res.status(200).json({ name: finalSound, url });
}