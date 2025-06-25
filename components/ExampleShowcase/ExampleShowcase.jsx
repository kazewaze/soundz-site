import CodePreview from '@/components/CodePreview/CodePreview';
import styles from './ExampleShowcase.module.css';

const convertToFilename = title => title.split(' ').join('') + '.jsx';

export default function ExampleShowcase({ title, Component, code }) {
  return (
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.preview}>
          <Component />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <CodePreview filename={convertToFilename(title)} language="jsx" code={code} />
        </div>
      </section>
    
  );
}