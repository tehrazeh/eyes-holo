import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.Footer}>
        <p>2022, tehrazeh dev.</p>
        <p>App uses <a href='https://www.opendota.com/'>OpenDota API</a> and content from Dota 2 made by
        <a href='https://www.valvesoftware.com/en/'> Valve.</a></p>
        </div>
    )
}


export  default Footer