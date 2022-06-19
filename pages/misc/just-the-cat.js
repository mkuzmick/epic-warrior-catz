import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import RandomCatImage from '../../components/RandomCatImage' 
import { catFirstNames, catPersonalities, catLastNames, catGenders, catRanks, catExtraInfo } from '../../components/CatzData'

const OverlapImage = ({ url }) => {
  return (
    <img src={url} alt="cat" width="500" position="absolute"></img>
  )
}

const randomElement = (list) => {
  return list[Math.floor(Math.random()*list.length)];
}

export default function Home() {
  const [cat, setCat] = useState("initialCat");
  const [personality, setPersonality] = useState("boring");
  const [rank, setRank] = useState("a warrior");
  const [gender, setGender] = useState("none");
  const [extraInfo, setExtraInfo] = useState("being not interesting enough, please click again");
  const randomCat = () => { return (randomElement(catFirstNames) + randomElement(catLastNames)) }
  const randomPersonality = () => { return (randomElement(catPersonalities)) }
  return (
    <div className={styles.container}>
       <main className={styles.main}>
        <h1 className={styles.title}>
          welcome to <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> epic warrior cats </a>
        </h1>
        <p>
         we like to party. we like to party. we like we like to party  
        </p>
        <div 
          onClick={ () => setCat(randomCat) } 
          style={{
            fontSize: "1em",
            borderRadius: "10px",
            color: "white",
            fontWeight: "900", 
            backgroundColor: "rgba(223, 22, 37, .7)",
            padding: "1em",
            cursor: "pointer",
            userSelect: "none"
          }}
        >new cat</div>
        <h1>{ cat } </h1>
        
        
        
       
        
         
        
        <div
           
        >
          <RandomCatImage />
        </div>
      </main>

    </div>
  )
}