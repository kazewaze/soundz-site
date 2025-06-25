import React, { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';
import Prism from 'prismjs';
import xtraStyles from './CodePreview.module.css';

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '750px',
    boxSizing: 'border-box',
    marginBottom: '18px',
    border: '1px solid #201d2f',
    borderBottom: '1px solid #2a2139',
    borderRadius: '7px',
    overflow: 'hidden',
    fontFamily: 'monospace',
    color: '#FFFFFF',
    background: '#222222'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '9px 18px',
    fontSize: '0.9rem',
    background: '#222222'
  },
  filename: {
    fontSize: '1.10rem',
    fontWeight: 700,
    color: '#FFFFFF'
  },
  copyButton: {
    padding: '4.5px 9px',
    border: 'none',
    borderRadius: '7px',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    color: '#FFFFFF',
    background: '#ff0073'
  },
  codeContainer: {
    overflowX: 'auto',
    overflowY: 'auto',
    scrollbarColor: '#ff0073 #222222',
    scrollbarWidth: 'thin'
  },
  codeBlockBase: {
    margin: 0,
    padding: '18px',
    lineHeight: '1.5',
    fontSize: '0.85rem'
  },
  codeBlockAnimated: {
    animation: 'slide-bg 10s linear infinite'
  }
};

function CodePreview({ filename, language = 'jsx', code }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    setMounted(true);
  }, [code]);

  const handleCopy = () => {
    copy(code);
    alert('Copied to Clipboard');
  };

  const combinedCodeBlockStyle = mounted
    ? { ...styles.codeBlockBase, ...styles.codeBlockAnimated }
    : styles.codeBlockBase;

  return (
    <div className={xtraStyles.codePreview} style={styles.wrapper}>
      <div style={styles.header}>
        <span style={styles.filename}>{filename}</span>
        <button onClick={handleCopy} style={styles.copyButton} aria-label="copy">
          Copy
        </button>
      </div>
      <div style={styles.codeContainer}>
        <pre style={combinedCodeBlockStyle} className={`language-${language}`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodePreview;