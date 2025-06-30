import React from 'react';

import ClientOnly from '@/components/ClientOnly';
import FeaturePreview from '@/components/FeaturePreview/FeaturePreview';

import styles from './PropCard.module.css';

export default function PropCard({
  name,
  desc,
  codeSnippet
}) {
  return (
    <div className={styles.card} role="region" aria-label={name}>
      <div className={styles.titleSection}>
        <h2>{ name }</h2>
      </div>
      <div className={styles.descSection}>
        <p>{ desc }</p>
      </div>
      <div className={styles.codeSection}>
        <ClientOnly>
          <FeaturePreview featureName={name} code={codeSnippet} />
        </ClientOnly>
      </div>
    </div>
  );
}