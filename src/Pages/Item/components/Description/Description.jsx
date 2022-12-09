import styles from './Description.module.scss'
import fallback from '../../../../Assets/fallback.png'

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
            if (description.length < 1) { // cases when there is no split happening
                return <div key={index}>
                {title &&
                    <div className = {styles.usage}>          
                        <img // check on if we have img or not
                        src={ (title.toLowerCase() === 'active' ||
                        title.toLowerCase() === 'passive') ?
                            require(`../../../../Assets/Item/${title.toLowerCase()}.png`) :
                            fallback
                        }                     
                        className = {styles.usage_image}
                        alt='usage'/>
                        <span>{title}</span>
                    </div>}
            </div>
            } else { // when split has happened, we have both title and description
                return <div key={index}>
                {title &&
                    <div className = {styles.usage}>          
                        <img 
                        src={ (title.toLowerCase() === 'active' ||
                        title.toLowerCase() === 'passive') ?
                            require(`../../../../Assets/Item/${title.toLowerCase()}.png`) :
                            fallback
                        }                     
                        className = {styles.usage_image}
                        alt='usage'/>
                        <p>{title + ':'}</p>
                    </div>}
                <span>{description}</span>
            </div>
            }

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