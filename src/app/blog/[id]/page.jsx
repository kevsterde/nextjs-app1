
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'


// async function getData(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return notFound()
//   }

//   return res.json();
// }


// export async function generateMetadata({ params }) {

//   const post = await getData(params.id)
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// }
const  BlogPost = async  ({params}) => {
  // const data = await getData(params.id)

  // const data = {}
  return ( 

    <div className={styles.container}>
      sample
    </div>
  )
}

export default BlogPost