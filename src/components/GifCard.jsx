import "./GifCard.css"

function GifCard({ title, url }) {

    return (
        <div className="card">
            <h3>{title}</h3>
            <img src={url} alt="no disponible" />
        </div>
    )
}

export default GifCard