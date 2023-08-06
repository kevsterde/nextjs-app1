import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
function Category({params}) {
  return (
    <div>
      <h1 className={styles.catTitle}><Link className={styles.link} href="/portfolio">Back</Link> | {params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet deserunt eum nulla temporibus iusto nesciunt quod debitis sunt asperiores aperiam?</p>
          <Button text="See more" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://img.freepik.com/free-vector/octopus-background-pirate-boat_23-2147634059.jpg" fill={true} alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet deserunt eum nulla temporibus iusto nesciunt quod debitis sunt asperiores aperiam?</p>
          <Button text="See more" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://img.freepik.com/free-vector/octopus-background-pirate-boat_23-2147634059.jpg" fill={true} alt=""/>
        </div>
      </div>



    </div>
  )
}

export default Category