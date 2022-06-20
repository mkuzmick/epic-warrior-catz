import React from 'react'
import styles from './RandomCatImage.module.css'
import Image from 'next/image'
import path from 'path'
import { earImages, bodyMarkings, eyes, mouths, colorsOfCat, faceMarkings, legMarkings } from './CatzImages'

const CatOutline = () => {
    return (
        <div>
            <Image src="/catz/outline/outline-1.png" alt="cat" className={styles.overlay} layout="fill" />
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
            <picture>
                <img src={ randomElement(catzData[type]) } alt="cat" className={styles.overlay}></img>
            </picture>
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


const RandomFaceMarkings = () => {
    return (
        <div>
            <img src={ randomElement(faceMarkings) } alt="cat marking" className={styles.overlay}></img>
        </div>
    )
}

const RandomLegMarkings = () => {
    return (
        <div>
            <img src={ randomElement(legMarkings) } alt="cat marking" className={styles.overlay}></img>
        </div>
    )
}

const RandomCatImage = () => {
    
    return (
        <div className={styles.container}>
            <RandomCatElement type="colorsOfCat" />
            <RandomBodyMarkings />
            <RandomFaceMarkings />
            <RandomLegMarkings />
            <RandomEars />
            <RandomCatElement type="mouths" />
            <RandomCatElement type="eyes" />
            <CatOutline />
            {/* <pre>{JSON.stringify(catzData, null, 4)}</pre> */}
        </div>
    )
}

export default RandomCatImage