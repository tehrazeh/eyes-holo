
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
                <p>{title + ':'}</p>
                <span>{description}</span>
            </div>
        })
    }
    return (

        <div>
            {itemAttributes.length > 0 && <div>{itemAttributes}</div>}
            {hints.length > 0 && <div>{hints}</div>}
        </div>

    )
}

export default Description