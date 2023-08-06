import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}><div>&copy; 2023</div>
    <div className={styles.soc}>
    <Image src="/1.png" width={15} height={15} alt="ASD"/>
    <Image src="/2.png" width={15} height={15} alt="ASD"/>
    <Image src="/3.png" width={15} height={15} alt="ASD"/>
    <Image src="/4.png" width={15} height={15} alt="ASD"/>
    </div>
    </div>
  )
}

export default Footer