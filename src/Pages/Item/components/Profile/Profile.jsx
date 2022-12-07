

const Profile = ({ itemStats }) => {
    return (
        <div>
            <div>Item: {itemStats.dname}</div>
            <div>Cost: {itemStats.cost}</div>
            <div>Quality: {itemStats.qual ? itemStats.qual : 'unknown'}</div>
            <div>Lore: {itemStats.lore}</div>
            <div>
                {itemStats.mc && <span>Mana {itemStats.mc}</span>}
                {itemStats.cd && <span>Cooldown {itemStats.cd}</span>}
            </div>
        </div>
    )
}

export default Profile