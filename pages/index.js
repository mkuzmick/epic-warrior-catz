import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

const catFirstNames = ["jewel", "flower", "leaf", "tiger", "ferret", "hare", "rabbit", "squirrel", "donkey", "horse", "turtle", "marigold", "fire", "frog", "birch", "oak", "stick", "blue", "red", "green", "clover", "grass", "tortoise", "worm", "bright", "white", "black", "gray", "grey", "cloud", "cherry", "blossom", "lion", "leapord", "snow", "running", "rooster", "finch", "sparrow", "dove", "branch", "fin", "salmon", "cod", "snow", "winter", "spring", "sprout", "twig", "maple", "spruce", "moon", "jungle", "icy", "spotted", "wind", "jay", "thunder", "shadow", "river" ]
const catLastNames = ["face", "frog", "flower", "fern", "bee", "gem", "meadow", "claw", "foot", "leaf", "paw", "kit", "star", "pool", "heart", "belly", "ear", "nose", "toe", "tail", "fall", "sky", "cherry", "eye", "fur", "blossom", "wing", "feather", "whisker", "stump", "cloud", "spot", "spots", "leg", "dapple", "stripe", "branch", "stick", "twig", "shine", "fang", "tooth", "pelt", "wind", "blaze", "fire", "river", "pond", "ivy", "eel", "fin", "leap", "shadow", "sight", "arm", "tooth", "sprout", "flake", "ice"]

const randomElement = (list) => {
  return list[Math.floor(Math.random()*list.length)];
}

export default function Home() {
  const [cat, setCat] = useState("initialCat");
  const randomCat = () => { return (randomElement(catFirstNames) + randomElement(catLastNames)) }
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
            fontSize: "3em",
            borderRadius: "10px",
            color: "white",
            fontWeight: "900", 
            backgroundColor: "rgba(223, 22, 37, .7)",
            padding: "1em",
            cursor: "pointer",
            userSelect: "none"
          }}
        >new epic cat</div>
        <h1>{ cat } </h1>

      </main>

    </div>
  )
}