import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function BlogPost() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/blog">Back</Link>
      <div className={styles.topContainer}>
        <div className={styles.content}>
          <h1>Digital Storreis</h1>
          <h2>Handiract Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, itaque.</h2>
          <div className={styles.author}>
            <div className={styles.imgContainer}>
              <Image src="https://img.freepik.com/free-vector/octopus-background-pirate-boat_23-2147634059.jpg" fill={true} alt="" />
            </div>
              <p>Kevin Revalde</p>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image src="https://img.freepik.com/free-vector/octopus-background-pirate-boat_23-2147634059.jpg" fill={true} alt="" />
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde accusantium accusamus adipisci esse excepturi eius tempore quidem porro dicta, nesciunt quos nobis iusto debitis, et error consequatur, odit nihil dignissimos deserunt? Sint hic earum quo tempore reiciendis corporis, quam necessitatibus, harum repellat veritatis voluptatibus minus consequatur sunt similique error?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde accusantium accusamus adipisci esse excepturi eius tempore quidem porro dicta, nesciunt quos nobis iusto debitis, et error consequatur, odit nihil dignissimos deserunt? Sint hic earum quo tempore reiciendis corporis, quam necessitatibus, harum repellat veritatis voluptatibus minus consequatur sunt similique error?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde accusantium accusamus adipisci esse excepturi eius tempore quidem porro dicta, nesciunt quos nobis iusto debitis, et error consequatur, odit nihil dignissimos deserunt? Sint hic earum quo tempore reiciendis corporis, quam necessitatibus, harum repellat veritatis voluptatibus minus consequatur sunt similique error?</p>
      </div>
    </div>
  )
}

export default BlogPost