import React from 'react'
import "./Appinfo.css"
import { VscDebugBreakpointLog } from "react-icons/vsc"
const Appinfo = () => {
    return (
        <div>
            <div className="appinfo-head">
                Leverage Edu App
            </div>

            <div className="appinfo-subhead">
                <div className='a-one'>
                    Ready to start your
                </div>
                <div className='a-two'>
                    study abroad journey?
                </div>
            </div>

            <div className="blank-subhead-appinfo"></div>


            <div className="appinfo-content">
                <div className="appinfo-deatils">
                    <ul>
                        <li><VscDebugBreakpointLog /> Discover universities & courses</li>
                        <li><VscDebugBreakpointLog /> Ask doubts and interact with the community</li>
                        <li><VscDebugBreakpointLog /> Latest study abroad news & updates</li>
                        <li><VscDebugBreakpointLog /> Track applications & offers</li>
                        <li><VscDebugBreakpointLog /> And a lot more</li>
                    </ul>
                    <div className='appinfo-app'>
                        Download the Study Abroad with Leverage Edu App
                    </div>
                    <div className="app-detail">
                        <div className="app-qrcode">
                            <img src="https://shorturl.at/gwBOZ" alt="" height={100} />
                        </div>
                        <div className="app-store">
                            <img src="https://shorturl.at/CDP05" alt="" height={100} />
                        </div>
                    </div>
                </div>
                <div className="app-img">
                    <img src="https://shorturl.at/xIOV5" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Appinfo