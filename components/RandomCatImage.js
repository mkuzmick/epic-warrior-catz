import React from 'react'
import styles from './RandomCatImage.module.css'
import path from 'path'
import { earImages, bodyMarkings } from './CatzImages'

const catPaths = [
    "Untitled_Artwork-1.png",
    "Untitled_Artwork-2.png",
    "Untitled_Artwork-3.png",
    "Untitled_Artwork-4.png",
    "Untitled_Artwork-5.png",
]

const CatOutline = () => {
    return (
        <div>
            <img src="/catz/outline/Untitled_Artwork.png" alt="cat" className={styles.overlay}></img>
        </div>
    )
}

const randomElement = (list) => {
    return list[Math.floor(Math.random()*list.length)];
}

const RandomCatElement = ({ type }) => {
    const url = `/catz/${type}/${randomElement(catPaths)}`
    return (
        <div>
            <img src={ url } alt="cat" className={styles.overlay}></img>
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
            <RandomCatElement type="colors-of-cat" />
            <CatOutline />
            <RandomBodyMarkings />
            <RandomEars />
            <RandomCatElement type="mouths" />
            <RandomCatElement type="eyes" />
        </div>
    )
}

export default RandomCatImage