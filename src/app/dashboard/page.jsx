"use client" 

import useSWR from 'swr'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
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
const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)


const router = useRouter();
if(session.status === "loading"){
  return <p>Loading...</p>;
}

if(session.status ==="unauthenticated")
{
  router?.push("/dashboard/login");
}




// getData()
//   },[])

if(session.status ==="authenticated")
{
  return (
    <div className={styles.container}>Dashboard</div>
  )
}

}

export default Dashboard