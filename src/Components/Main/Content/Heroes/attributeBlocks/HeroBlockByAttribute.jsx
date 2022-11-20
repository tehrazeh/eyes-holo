import React from 'react'
import { useSelector } from 'react-redux'
import { selectHeroByAttribute } from '../../../../../Redux/slices/heroesSlice'
import { Link } from 'react-router-dom'
import styles from './AttributeBlocks.module.scss'
const HeroBlockByAttribute = (props) => {

    // get the array of heroes for specified attribute
    const heroes = useSelector(selectHeroByAttribute(props.attribute)) 

    // construct block of links of hero images
    const constructHeroBlock = heroes.map(hero => {
        return <Link to={'/Heroes/' + hero.id} key={hero.id}>
            <img className={styles.heroImage} src={props.link + hero.img} alt='hero icon' />
            </Link>
    })

    // return a jsx layout of block of heroes and image of attribute
    return (
        <div className={styles.heroBlock}>
            <img src={require(`../../../../../Assets/Attributes/${props.attribute}.png`)}></img>
            <div>{constructHeroBlock}</div>
        </div>
        
    )
}

export default HeroBlockByAttribute