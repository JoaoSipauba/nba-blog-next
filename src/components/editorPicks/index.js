import styles from '../../styles/components/editorPicks.module.css'

export default function EditorPicks() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>EDITOR PICKS</div>

      <div>
        <p className={styles.pick}>The Nets: Ready and Dangerous</p>
        <p className={styles.pick}>The Nets: Ready and Dangerous</p>
        <p className={styles.pick}>The Nets: Ready and Dangerous</p>
        <p className={styles.pick}>The Nets: Ready and Dangerous</p>
        <p className={styles.pick}>The Nets: Ready and Dangerous</p>
      </div>
    </div>
  )
}