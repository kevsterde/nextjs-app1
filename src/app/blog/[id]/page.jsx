"use client"

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'

const  BlogPost = () => {
  // const data = await getData(params.id)
  
  const params = useParams();
  const session = useSession();
  console.log(session);
  // const { data2, mutate, error, isLoading } = useSWR(
    //   `/api/posts/${params.id}`, fetcher)
    const fetcher = (...args) => fetch(...args).then(res => res.json())
const { data2, mutate, error, isLoading } = useSWR(
  `/api/posts?username=${session?.data2?.user.name}`, fetcher)

  console.log(params);
  console.log(params.id);
  console.log(data2);
    const data = {};

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