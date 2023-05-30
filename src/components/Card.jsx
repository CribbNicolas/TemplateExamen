
const Card = ({children, item}) => {
    return (
        <div>
            {children}
            <p style={{color: item.color}}>
            {item.name}
            </p>
        </div>
    )
}

export default Card