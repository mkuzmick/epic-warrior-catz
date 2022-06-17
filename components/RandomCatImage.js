import React from 'react'
import styles from './RandomCatImage.module.css'
import path from 'path'
import { earImages, bodyMarkings, eyes, mouths, colorsOfCat } from './CatzImages'

const CatOutline = () => {
    return (
        <div>
            <img src="/catz/outline/outline-1.png" alt="cat" className={styles.overlay}></img>
        </div>
    )
}

const randomElement = (list) => {
    return list[Math.floor(Math.random()*list.length)];
}

const catzData = { earImages, bodyMarkings, eyes, mouths, colorsOfCat }

const RandomCatElement = ({ type }) => {
    return (
        <div>
            <img src={ randomElement(catzData[type]) } alt="cat" className={styles.overlay}></img>
        </div>
    )
}

const RandomEars = () => {
    return (
        <div>
            <img src={ randomElement(earImages) } alt="cat ear" className={styles.overlay}></img>
        </div>
    )
}

const RandomBodyMarkings = () => {
    return (
        <div>
            <img src={ randomElement(bodyMarkings) } alt="cat marking" className={styles.overlay}></img>
        </div>
    )
}

const RandomCatImage = () => {
    
    return (
        <div className={styles.container}>
            <RandomCatElement type="colorsOfCat" />
            <CatOutline />
            <RandomBodyMarkings />
            <RandomEars />
            <RandomCatElement type="mouths" />
            <RandomCatElement type="eyes" />
            {/* <pre>{JSON.stringify(catzData, null, 4)}</pre> */}
        </div>
    )
}

export default RandomCatImage