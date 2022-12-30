import { useState, useEffect } from "react"
import axios from "axios"

export const useHeroLore = (heroName) => {
    const [lore, setLore] = useState('')
    useEffect(() =>  {
        const fetchLore = async () => {
        const { data }= await axios.get('https://api.opendota.com/api/constants/hero_lore')
        setLore(data[heroName.slice(14)])
        }
        fetchLore()
    }, [lore, heroName])

    return lore
}