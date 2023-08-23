import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('127.0.0.1/api/posts',{
    cache: 'no-store'
  });
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 




const Blog = async () => {
  const data = await getData();


  return (
    <div className={styles.container}>

    {data.map(item=>(
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