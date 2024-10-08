function Card({cover, title}) {
    return(
        <div className="card">
            <img src={cover} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default Card;