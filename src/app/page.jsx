
import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'
export default function Home() {
  return (
  <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Custom SLogan</h1>
      <p className={styles.desc}>Lorem, ipsum.</p>
      <Button text="See Our Works" url="/portfolio"/>
    </div>
    <div className={styles.item}>
    <Image src={Hero} alt="asd" className={styles.img}/>
    </div>
  </div>
  )
}
