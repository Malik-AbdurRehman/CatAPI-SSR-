import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home({initialCats}) {
  const [cats,setCats]=useState(initialCats);
  const [loading,setLoading]=useState(false);

  const loadMore=async()=>{
    setLoading(true);
    const res= await fetch("https://api.thecatapi.com/v1/images/search?limit=9");
    const newcats = await res.json();
    setCats((prev)=>[...prev,...newcats]);
    setLoading(false);
  }

  return (
    <div >
      <p className="text-6xl font-bold text-center m-10"> Cat Gallery</p>
      <div className="flex justify-center flex-wrap">
        {cats.map((cat)=>(
          <div key={cat.id} className='m-4'>
            <Image
            src={cat.url}
            alt="Cute Cat"
            width={500}
            height={100}
            objectFit="cover"
          />
          </div>
        ))}
        </div>
      <button onClick={loadMore} className="flex justify-center mx-auto p-4 rounded-2xl border-none bg-gray-800 text-white">{loading ? "Loading" : "Load More"}</button>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=9");
  const data = await res.json();
  console.log("Hello")
  return{
    props: {
      initialCats:data,
    }
  }
}