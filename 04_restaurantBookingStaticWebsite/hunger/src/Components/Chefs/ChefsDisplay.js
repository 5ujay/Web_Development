import React from 'react'
import './Chefs.css'
import chefscard from "./ChefsCards"
import Chefs from './Chefs'

const ChefsDisplay = () => {
    return (
        <>
            <div className="chefs-heading" id='Chefs'>
                chefs
            </div>
            <div className="chefs-subheading">
                <h2>Our Professional Chefs</h2>
            </div>

            <div className="chef">
                {chefscard.map(chefscard => (
                    <Chefs

                        key={chefscard.id}
                        image={chefscard.image}
                        name={chefscard.name}
                        profession={chefscard.profession}
                        msg={chefscard.msg}
                    />
                ))}
            </div>
        </>
    )
}

export default ChefsDisplay