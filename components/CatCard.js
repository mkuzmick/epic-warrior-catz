import style from './CatCard.module.css'
import { useState } from 'react'

const CatCard = ({ onClick, cat, id, changeCat }) => {
    const [experience, setExperience] = useState(cat.experience)
    return (
        <div onClick={()=>{
                console.log(cat)
                console.log(`adding click`)
                const newExperience = cat.experience+1
                changeCat({...cat, experience: newExperience}, id)
            }} 
            className={`${style.card} ${style[cat.rank]}`}
        >
            <div className={style.mainText}>
                <h1>{cat.name}</h1>
                <ul>
                    <li>id: {cat.id}</li>
                    <li>rank: {cat.rank}</li>
                    <li>experience: {cat.experience}</li>
                </ul>
            </div>
        </div>
    )
}

export default CatCard