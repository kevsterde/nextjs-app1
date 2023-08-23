"use client" 

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/posts',{
//     cache: 'no-store'
//   });
 
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
 
//   return res.json();


 


// }
 



const Blog = async () => {
  //const data = await getData(); 

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR(
    `/api/posts`, fetcher)

    

  return (
    <div className={styles.container}>

    {isLoading ? "loading" : data.map(item=>(
     <Link key={item._id} href={`/blog`} className={styles.blogItem}>
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