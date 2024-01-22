import React from 'react'
import "./Stories.css"
import { RiDoubleQuotesL } from "react-icons/ri"
import { RiDoubleQuotesR } from "react-icons/ri"

const Card = ({ name, university }) => {

    return (

        <div className='card' >
            <div className="card-msg">
                <RiDoubleQuotesL />
                Lorem ipsum dolor sit amet <br />
                consectetur adipisicing elit.
                Itaque laudantium doloribus dolores harum omnis enim fuga <br />
                consequatur veritatis officia, necessitatibus, <br />
                quae alias officiis nesciunt ipsam.
                <RiDoubleQuotesR />
            </div>

            <div className="card-person-info">

                <div className="person-img">
                    <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                </div>

                <div className="person-detail">

                    <div className="person-info">
                        <div className="person-name">
                            {name}
                        </div>
                        <div className="person-study">
                            studying at
                        </div>
                    </div>

                    <div className="university-name">
                        {university}
                    </div>

                </div>

            </div>
        </div>
    )



}

export default Card