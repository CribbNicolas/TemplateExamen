import css from './Card.module.css'

const Card = ({children, onClick, style}) => {
    return (
        <div style={style} onClick={onClick} className={css.card}>
            {children}
        </div>
    )
}

export default Card