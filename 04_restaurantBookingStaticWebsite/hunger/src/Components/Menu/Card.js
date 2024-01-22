
import React from 'react'

const Card = (props) => {

    const { image, name, price } = props;

    return (
        <div className="starters">
            <div className="menu-starters">
                <img src={image} alt="" />
            </div>
            <div className="staters-name">
                {name}
            </div>
            <div className="price">
                {price}
            </div>
        </div>
    )
}

export default Card