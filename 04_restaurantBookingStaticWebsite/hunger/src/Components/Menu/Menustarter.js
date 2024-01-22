import React from 'react'
import Menu from './Menu'
import menucontent from './MenuContent'
import "./Menu.css"

const Menustarter = () => {
    return (
        <>
            <div className="menu-heading" id='Menu'>
                <p>Menu</p>
            </div>
            <div className="ourmenu">
                <h2>Check Out Our Menu</h2>
            </div>

            <div className="menutype">
                <ul>
                    <li>Starter</li>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            </div>

            <div className="starter">
                {menucontent.map(menucontent => (

                    <Menu key={menucontent.id}
                        image={menucontent.image}
                        name={menucontent.name}
                        price={menucontent.price} />
                ))}
            </div>
        </>
    )
}

export default Menustarter