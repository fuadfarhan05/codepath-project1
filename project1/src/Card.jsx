
import './App.css'

const Card = (props) => {
    return (
        <>
        <div className="Card">
            <div className="Card-text">
                <div>
                    <img 
                        src={props.img} 
                        width="300" 
                        height="200" 
                    />
                </div>

                <p>{props.book}</p>
                <button onClick={props.onButtonClick}>
                    {props.button}
                </button>

            </div>
        </div>
        </>

    )
}

export default Card;



