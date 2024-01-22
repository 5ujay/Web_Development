import React from 'react'
import "./Offer.css"

import { Content } from './content'
import ContentAdd from './ContentAdd'

const Offer = () => {
    return (
        <div className='offer'>
            {/* heading/title */}
            <div className="offer-head">
                offerings
            </div>

            <div className="offer-subhead">
                <div className='o-one'>
                    For all your
                </div>
                <div className='o-two'>
                    study abroad needs
                </div>
            </div>
            <div className='blank-subhead-offer'></div>

            {/* main content in offers */}
            {
                Content.map((elem) => {

                    return <ContentAdd key={elem.id} {...elem} />
                })
            }
        </div>
    )
}

export default Offer