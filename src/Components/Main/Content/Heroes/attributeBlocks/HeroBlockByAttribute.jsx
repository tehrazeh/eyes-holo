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
        return ( 
            <div className={styles.heroBlock}>    
            <Link to={'/Heroes/' + hero.id} key={hero.id}>
                <img className={styles.heroBlock_image} src={props.link + hero.img} alt='hero icon' />
                <p className={styles.heroBlock_title}>{hero.localized_name}</p>
            </Link>
            </div>
        )
    })

    // return a jsx layout of block of heroes and image of attribute
    return (
        <div className={styles.heroSection}>
        <div className={styles.attributeBlock}>
            <img src={require(`../../../../../Assets/Attributes/${props.attribute}.png`)} />
            <span>{props.attribute}</span>
            </div>
        <div className={styles.heroesBlock}>
            {constructHeroBlock}
        </div>
        </div>

    )
}

export default HeroBlockByAttribute