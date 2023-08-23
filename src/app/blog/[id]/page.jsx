import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'


async function getData(id) {
  const res = await fetch(`https://beautiful-bombolone-944c3e.netlify.app/api/posts/64e4d64af7b0d27c664c992c`,{
    cache: 'no-store'
  });


  if (!res.ok) {
   return notFound()
  }
 
  return res.json();
}
 

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const  BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/blog">Back</Link>
      <div className={styles.topContainer}>
        <div className={styles.content}>
          <h1>{data.title}</h1>
          <h2>{data.desc}</h2>
          <div className={styles.author}>
            <div className={styles.imgContainer}>
              <Image src={data.img} fill={true} alt="" />
            </div>
              <p>{data.username}</p>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image src={data.img} fill={true} alt="" />
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <p>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost