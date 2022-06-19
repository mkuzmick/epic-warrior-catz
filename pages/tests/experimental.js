import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
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

export default function ExperimentalHome() {
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
       <div>
          <RandomCatImage />
        </div>
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
        >new name</div>
        <h1>{ cat } </h1>
        <div 
          onClick={ () => setPersonality(randomPersonality) } 
          style={{
            fontSize: "1em",
            borderRadius: "10px",
            color: "white",
            fontWeight: "900", 
            backgroundColor: "rgba(23, 22, 237, .7)",
            padding: "1em",
            cursor: "pointer",
            userSelect: "none"
          }}
        >new personality</div>
        <h2>This cat is known for being quite {personality}</h2>
        <div 
          onClick={ () => setGender(randomElement(catGenders)) } 
          style={{
            fontSize: "1em",
            borderRadius: "10px",
            color: "white",
            fontWeight: "900", 
            backgroundColor: "rgba(23, 178, 21, .7)",
            padding: "1em",
            cursor: "pointer",
            userSelect: "none"
          }}
        >change gender</div>
        <h2>{gender}</h2>
        <div 
          onClick={ () => setRank(randomElement(catRanks)) } 
          style={{
            fontSize: "1em",
            borderRadius: "10px",
            color: "white",
            fontWeight: "900", 
            backgroundColor: "rgba(33, 31, 30, .7)",
            padding: "1em",
            cursor: "pointer",
            userSelect: "none"
          }}
        >change rank</div>
        <h2>this cat is {rank}</h2>
         <div 
          onClick={ () => setExtraInfo(randomElement(catExtraInfo)) } 
          style={{
            fontSize: "1em",
            borderRadius: "10px",
            color: "white",
            fontWeight: "900", 
            backgroundColor: "rgba(235, 76, 34, .7)",
            padding: "1em",
            cursor: "pointer",
            userSelect: "none"
          }}
        >generate extra info</div>
        <h2>This cat is known for {extraInfo}.</h2>
        
      </main>

    </div>
  )
}