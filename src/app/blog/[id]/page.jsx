"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import useSWR from 'swr'


// export async function generateMetadata({ params }) {
//   const post = await getData(params.id)
//   return {
//     title: post.title,
//     description: post.desc,
//   }
// }

const  BlogPost = ({params}) => {
  // const data = getData(params.id)
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR(
    `/api/posts/64e4d64af7b0d27c664c992c`, fetcher)

 
  return ( 

    <div className={styles.container}>
    {
isLoading && <p>Loading</p>
    }
 {
error && <p>error</p>
    }
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