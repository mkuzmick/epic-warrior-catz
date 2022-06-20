const CatCard = ({ onClick, cat }) => {
    return (
        <div onClick={onClick}>
            <h1>CatCard</h1>
            <p>for {cat.name}</p>
        </div>
    )
}

export default CatCard