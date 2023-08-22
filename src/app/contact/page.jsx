import React from 'react'

import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
export const metadata = {
  title: 'Contact Page',
  description: 'Description Contact Page',
}

function Contact() {
  return (
    <div className={styles.container} >
      <h1>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgCotainer}>
        <Image
        src="/contact.png"
        fill={true}
        className={styles.image}
        alt="asd"
        />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea name="comment" id="comment" className={styles.textarea} placeholder='Message' cols="30" rows="10"></textarea>
          <Button url="" text="Send"/>

        </form>

      </div>
    </div>
  )
}

export default Contact