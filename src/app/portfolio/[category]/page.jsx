import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import {items} from './data'
import { notFound } from 'next/navigation'

const getData = (cat) =>{
  const data = items[cat]

  if(data){
    return data
  }

  return notFound()
   
}

const Category = ({params}) =>{
  const data = getData(params.category);


  return (
    <div>
      <h1 className={styles.catTitle}><Link className={styles.link} href="/portfolio">Back</Link> | {params.category}</h1>
      {data.map ((item) => (
       <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <Button text="See more" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src={item.image} fill={true} alt=""/>
        </div>
      </div>
      ))}
     
     
    


    </div>
  )
}

export default Category