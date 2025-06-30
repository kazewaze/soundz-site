import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import featStyles from './FeaturePreview.module.css';

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '750px',
    marginBottom: '18px',
    border: '1.75px solid #ffbd0a',
    borderRadius: '3.5px',
    overflow: 'hidden',
    fontFamily: 'monospace',
    color: '#222222',
    background: '#fdf7e7'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '9px 18px',
    fontSize: '0.9rem',
    color: '#222222',
    background: '#ffbd0a'
  },
  featurename: {
    fontSize: '1.10rem',
    fontWeight: 700,
    color: '#222222'
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
  }
};

function FeaturePreview({ featureName, code }) {
  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const handleCopy = () => {
    copy(code);

    setCopyBtnText("Copied");

    setTimeout(() => { // Show "Copied" for 2 sec & return to "Copy".
      setCopyBtnText("Copy");
    }, 2000);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <span style={styles.featurename}>{ featureName }</span>
        <button onClick={handleCopy} style={styles.copyButton} aria-label="copy">
          { copyBtnText }
        </button>
      </div>
      <div style={styles.codeContainer}>
        <pre style={styles.codeBlockBase}>
          <code className={featStyles.code}>{ code }</code>
        </pre>
      </div>
    </div>
  );
}

export default FeaturePreview;