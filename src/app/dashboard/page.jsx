"use client" 

import useSWR from 'swr'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/Button/Button'
const Dashboard = () => {

  // const [data,setData] = useState([])
  // const [error,setError] = useState(false);
  // const [isLoading,setisLoading] = useState(false);
// const getData = async () =>{

//   setisLoading(true)
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
//     cache: 'no-store'
//   });
 
//   if (!res.ok) {
//     setError(true);
//   }
//  const data = await res.json();

//   setData(data)
//   setisLoading(false);

const session = useSession()

console.log(session);
const fetcher = (...args) => fetch(...args).then(res => res.json())
const { data, mutate, error, isLoading } = useSWR(
  `/api/posts?username=${session?.data?.user.name}`, fetcher)

console.log(data);
const router = useRouter();
if(session.status === "loading"){
  return <p>Loading...</p>;
}

if(session.status ==="unauthenticated")
{
  router?.push("/dashboard/login");
}


const handleSubmit = async(e) =>{
  e.preventDefault()

  const title = e.target[0].value;
  const desc = e.target[1].value;
  const img = e.target[2].value;
  const content = e.target[3].value;
  
  try{
    await fetch("/api/posts",{
      method:"POST",
      body: JSON.stringify({
        title,desc,img,content,username:session.data.user.name,
      }),
    });
    e.target.reset();
    mutate();
  }
  catch(err){
    console.log(err)
  }

}

const deleteHandler = async(id) => {
await fetch(`/api/posts/${id}`,{
method:"DELETE"
});
mutate();

try {
  
} catch (error) {
  console.log(error)
}


}

// getData()
//   },[])

if(session.status ==="authenticated")
{
  return (
    <div className={styles.container}>



      <div className={styles.post}>
        { isLoading ? "Loading Post" :
          data.map(item =>(
            <div key={item._id}>
            <div className={styles.imgContainer}>
              <Image src={item.img} width={200} height={200} alt="" />
            </div>
              <h2 className={styles.postTitle}>{item.title}</h2>
              <span className={styles.delete} onClick={()=>deleteHandler(item._id)}>X</span>
            </div>
          ))
        }
        {
          data?.length === 0 && <p>No Post</p>
        }
       
          
      </div>



      <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder='Title' className={styles.input}/>
          <input type="text" placeholder='Desc' className={styles.input}/>
          <input type="text" placeholder='Image' className={styles.input}/>
          <textarea cols="30" rows="10" placeholder='Content' className={styles.textarea}></textarea>
          <button className={styles.button}>Send</button>
      </form>



    </div>
  )
}

}

export default Dashboard