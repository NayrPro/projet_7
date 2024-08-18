function Card({cover, title}) {
    return(
        <div className="card">
            <div className="card-overlay"></div>
            <img src={cover} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default Card;