import styles from './Description.module.scss'
const Description = ({ itemStats }) => {

    // attributes that item gives
    let itemAttributes = []
    if (itemStats?.attrib?.length > 0) {
        itemAttributes = itemStats.attrib.map((attribute, index) => {
            return <div key={index}>{attribute.footer} {attribute.header} {attribute.value}</div>
        })
    }

    // hints on how to use this item
    let hints = []
    if (itemStats?.hint?.length > 0) {
        hints = itemStats.hint.map((hint, index) => {
            const [title, ...description] = hint.split(':')
            return <div key={index}>
                <div className = {styles.usage}>
                {title && 
                <img src={require(`../../../../Assets/Item/${title.toLowerCase()}.png`)}
                className = {styles.usage_image}
                 alt='usage'/>}
                <p>{title + ':'}</p>
                </div>
                <span>{description}</span>
            </div>
        })
    }
    return (

        <div className={styles.descriptionContainer}>
            {itemAttributes.length > 0 && 
                <div className={styles.descriptionBlock}>
                    <div>
                        <img src={require('../../../../Assets/Stats/attributes.png')} alt='attributes'/>
                        <h2>Attributes</h2>
                    </div>    
                    <div className={styles.descriptionBlock_attributes}>
                        {itemAttributes}
                    </div>
                </div>
            }

            {hints.length > 0 && 
                <div className={styles.descriptionBlock}>
                    <div>
                        <img src={require('../../../../Assets/Hero/description.png')} alt='attributes'/>
                        <h2>Hints</h2>
                    </div>    
                    <div className={styles.descriptionBlock_attributes}>
                        {hints}
                    </div>
                </div>
            }
        </div>

    )
}

export default Description