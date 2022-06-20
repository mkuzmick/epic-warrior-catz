import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import CatCard from '../../components/CatCard'
import styles from '../../styles/Home.module.css' 

export default function Home() {
  const [cat, setCat] = useState({
    name: "this cat",
    experience: "0",
    clicks: 0
  });
  
  return (
    <div className={styles.container}>
       <main className={styles.main}>
        <h1 className={styles.title}>
          welcome to <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> epic warrior cats </a>
        </h1>
        <button onClick={()=>{setCat({...cat, clicks: cat.clicks+1})}}>click to add a click</button>
        <h2>{cat.clicks}</h2>
        <h2>{cat.name}</h2>
      </main>

    </div>
  )
}