import React from 'react'
import styles from './RandomCatImage.module.css'
import path from 'path'

const catPaths = [
    "Untitled_Artwork-1.png",
    "Untitled_Artwork-2.png",
    "Untitled_Artwork-3.png",
    "Untitled_Artwork-4.png",
    "Untitled_Artwork-5.png",
]

const randomElement = (list) => {
    return list[Math.floor(Math.random()*list.length)];
}

const CatElement = ({ type, url }) => {
    const color=`/catz/colors-of-cat/${randomElement(catPaths)}`
    const eyes=`/catz/eyes/${randomElement(catPaths)}`
    return (
        <div>
            <img src={ url } alt="cat" className={styles.overlay}></img>
        </div>
    )
  }

const RandomCatImage = ({children}) => {
    return (
        <div className={styles.container}>
            { children }
            <CatElement type="colors-of-cat" />
        </div>
    )
}

export default RandomCatImage