// + after base_str is bonus for attributes after lvl 16 - 25
const base_health = 200
// const str_gain = 2.8
// const base_str = 25
// const currentLvl = 30 
const multiplier_hp = 20
const base_mana = 75
// const int_gain = 1.6
// const base_int = 18
const multiplier_mana = 12

const calculateBonusAttribute = (currentLvl) => { // accepts lvl
    if (currentLvl <= 16) {
        return 0
    } else if (currentLvl >= 17 && currentLvl <= 18) {
        return 2
    } else if (currentLvl >= 19 && currentLvl <= 20) {
        return 4
    } else if (currentLvl === 21) {
        return 6
    } else if (currentLvl === 22) {
        return 8
    } else if (currentLvl === 23) {
        return 10
    } else if (currentLvl >= 24 && currentLvl <= 25) {
        return 12
    } else if (currentLvl >= 26) {
        return 14
    }
}

export const calculateHealth = (
    str_gain,
    currentLvl,
    base_str
) => {
    return (Math.floor(str_gain * (currentLvl - 1))
        + base_str + calculateBonusAttribute(currentLvl))
        * multiplier_hp + base_health
}


export const calculateMana = (
    int_gain,
    currentLvl,
    base_int
) => {
    return (Math.floor(int_gain * (currentLvl - 1))
        + base_int + calculateBonusAttribute(currentLvl))
        * multiplier_mana + base_mana
}

export const calculateAttribute = (attribute, gain, currentLvl) => {
    return attribute + Math.round(gain * (currentLvl - 1)) + calculateBonusAttribute(currentLvl)
  }


  export const calculateDamage = (
    primary_attr,
    gain,
    base_attack_max,
    currentLvl
  ) => {
    return (
        Math.floor(calculateAttribute(primary_attr, gain, currentLvl) + base_attack_max)
    )        

  };

  export const calculateArmor = (
    base_armor,
    base_agi,
    agi_gain,
    currentLvl
  ) => {
    return Math.floor(base_armor + (calculateAttribute(base_agi, agi_gain, currentLvl) / 6))
  }


  export const calculateAttackSpeed = (
    base_agi,
    agi_gain,
    currentLvl,
    attack_rate,
  ) => {
    return (1 / ((100 + calculateAttribute(base_agi, agi_gain, currentLvl)) / (100 * attack_rate))).toFixed(2)
  }