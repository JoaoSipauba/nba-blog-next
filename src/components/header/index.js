import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import styles from '../../styles/components/header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Link href="/">
          <img className={styles.logo}
            src="https://www.pinclipart.com/picdir/big/522-5223756_nba-logo-white-png-clipart.png"
            alt="logo" />
        </Link>
        <div className={styles.links}>
          <p className={styles.link}>NFL</p>
          <p className={styles.link}>NBA</p>
          <p className={styles.link}>MLB</p>
          <p className={styles.link}>NHL</p>
          <p className={styles.link}>NCAAF</p>
          <p className={styles.link}>NCAAB</p>
        </div>

        <div className={styles.options}>
          <p className={styles.link}>FANTASY</p>
          <p className={styles.link}>MORE</p>

          <div className={styles.language}>
            <img className={styles.flag}
              src="https://www.flaticon.com/svg/vstatic/svg/206/206626.svg?token=exp=1615476760~hmac=9cd29d8c81b406a898de7a20cee08052"
              alt="logo" />
            <IoIosArrowDown color={"#fff"} size={16} ></IoIosArrowDown>
          </div>
        </div>
      </div>
    </div>
  )
}

