import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Blog() {
  return (
    <div className={styles.container}>
      <Link href="/blog/1" className={styles.blogItem}>
        <div className={styles.imgContainer}>
          <Image src="https://img.freepik.com/free-vector/octopus-background-pirate-boat_23-2147634059.jpg" fill={true} alt=""/>
        </div>
        <div className={styles.content}>
          <h1>Digital Storreis</h1>
          <h2>Handiract Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, itaque.</h2>
        </div>
      </Link>
      <Link href="" className={styles.blogItem}>
        <div className={styles.imgContainer}>
          <Image src="https://img.freepik.com/free-vector/octopus-background-pirate-boat_23-2147634059.jpg" fill={true} alt=""/>
        </div>
        <div className={styles.content}>
          <h1>Digital Storreis</h1>
          <h2>Handiract Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, itaque.</h2>
        </div>
      </Link>



    </div>
  )
}

export default Blog