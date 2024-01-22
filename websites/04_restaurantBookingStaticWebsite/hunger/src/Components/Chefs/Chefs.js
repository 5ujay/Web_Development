import React from 'react'
import './Chefs.css'
const Chefs = ({ image, name, profession, msg }) => {

    return (
        <div className="chefs" >
            <div className="chef-img">
                <img src={image} alt="" height={350} />
            </div>
            <div className="chef-info" >
                <div className="chef-name">
                    <h2>{name}</h2>
                </div>
                <div className="chef-profession">
                    <h3>{profession}</h3>
                </div>
                <div className="chef-msg">
                    <p>{msg}</p>
                </div>
            </div>

        </div>

    )
}

export default Chefs