import React from 'react'
import { attributeFullName, link } from '../../../../../utils/constants'
import { useSelector } from 'react-redux'
import { selectHeroByAttribute } from '../../../../../Redux/slices/heroesSlice'
import { Link } from 'react-router-dom'
import styles from './AttributeBlocks.module.scss'
const HeroBlockByAttribute = (props) => {

    // get the array of heroes for specified attribute
    const heroes = useSelector(selectHeroByAttribute(props.attribute))
    const {searchValue, rolesFilter} = useSelector((state) => state.filterHero)

    const currentFilter = []
    for (let role in rolesFilter) { // get current filters of roles
        if (rolesFilter[role].isActive) {
            currentFilter.push(role)
        }
    }

    // if input has part of the name of the hero
    const checkNameFilter = (name) => name.toLowerCase().includes(searchValue.toLowerCase())

    // if hero is of selected role
    const checkRoleFilter = (roles) => currentFilter.every(value => roles.includes(value))

    // construct block of links of hero images
    const constructHeroBlock = heroes.map(hero => {
        return ( 
            <div className={styles.heroBlock} key={hero.id}>    
            <Link to={'/Heroes/' + hero.id} >
                <img className={
                    checkNameFilter(hero.localized_name) && // satisfies input search?
                    checkRoleFilter(hero.roles)  ? // satisfies role filter?
                    styles.heroBlock_image_active : styles.heroBlock_image_notActive
                    } src={link + hero.img} alt='hero icon' />
                <p className={
                    checkNameFilter(hero.localized_name) && // satisfies input search?
                    checkRoleFilter(hero.roles) ? // satisfies role filter?
                    styles.heroBlock_title : styles.heroBlock_title_inactive}>
                {hero.localized_name}</p>
            </Link>
            </div>
        )
    })


    // return a jsx layout of block of heroes and image of attribute
    return (
        <div className={styles.heroSection}>
        <div className={styles.attributeBlock}>
            <img src={require(`../../../../../Assets/Attributes/${props.attribute}.png`)}  alt='attribute'/>
            <span>{attributeFullName[props.attribute]}</span>
            </div>
        <div className={styles.heroesBlock}>
            {constructHeroBlock}
        </div>
        </div>

    )
}

export default HeroBlockByAttribute