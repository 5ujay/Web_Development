import React from 'react'
import "./Menu.css"


const Menu = ({ image, name, price }) => {
    return (


        <div className="menu-tems">
            <div className="menu-img">
                <img src={image} alt="" height={250} />
            </div>
            <div className="menu-name">
                <h2>{name}</h2>
            </div>
            <div className="menu-price">
                <h3>{price}</h3>
            </div>
        </div>



    )
}

export default Menu