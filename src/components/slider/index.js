import styles from '../../styles/components/slider.module.css'

import { files } from './files'

export default function Slider() {
  return (
    <div className={styles.caroussel}>

      <div className={styles.gallery}>
        <img src={files[0].src} alt="" />
        <div className={styles.texts}>
          <h1>{files[0].text}</h1>
          <h2>{files[0].subtitle}</h2>
        </div>
      </div>

      <div className={styles.options}>
        <span className={styles.buttonActive} />
        <span className={styles.button} />
        <span className={styles.button} />
      </div>
    </div>
  )
}