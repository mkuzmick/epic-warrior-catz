import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import CatCard from '../../components/CatCard'
import styles from '../../styles/Home.module.css' 
import initialCatz from '../../data/sample-catz.js'

export default function MyCatz() {
  const [catz, setCatz] = useState([...initialCatz]);

  const changeCat = (newCat, index) => {
    let newCatz = [...catz]
    newCatz[index] = newCat
    if (newCat.experience >=100) {
      newCat.rank="Leader"
    } else if(newCat.rank == ("Warrior" || "MedicineCat")) {

    } else if (newCat.experience >=50) {
      let result = Math.random()
      if (result > .5) {
        newCat.rank="Warrior"
      } else {
        newCat.rank="MedicineCat"
      }
    } else if (newCat.experience >=12) {
      newCat.rank="Apprentice"
    }
    setCatz(newCatz)
  }

  return (
    <div className={styles.mapBackground}>
       <div className={styles.container}>
      <main className={styles.main}>
        <h1>my-catz</h1>
        <div>
            {catz.map(
              (thisCat, i) => {
                return (
                  <CatCard key={i} cat={thisCat} id={i} changeCat={changeCat}/>
                )
              }
            )}
        </div>
      </main>
    </div>
    </div>
  )
  
}

