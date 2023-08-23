"use client" 

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'



const Blog = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
const { data, error, isLoading } = useSWR( `/api/posts`, fetcher)

    

  return (
    <div className={styles.container}>

    {isLoading ? "loading" : data.map(item=>(
     <Link key={item._id} href={`/blog/${item._id}`} className={styles.blogItem}>
     <div className={styles.imgContainer}>
       <Image src={item.img} fill={true} alt="asd"/>
     </div>
     <div className={styles.content}>
       <h1>{item.title}</h1>
       <h2>{item.desc}</h2>
     </div>
   </Link>

    ))}

 
  


    </div>
  )
}

export default Blog