import React, { useEffect, useState } from 'react'
import Sidebar from '../componants/Sidebar'
import Messages from '../componants/Messages'


const Chat = () => {
    const [width, setWidth] = useState(990)
    const [showSidebar, setShowSidebar] = useState(true)
    const toggle = e => setShowSidebar(!showSidebar)
    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
        return () => {
            window.addEventListener("resize", () => { })
        }
    }, [])
    return <>
        <div className='flex '>
            {(showSidebar || width >= 768) && <Sidebar width={width} toggle={toggle} />}
            {(width >= 768 || !showSidebar) && <Messages toggle={toggle} width={width} />}
        </div>
    </>
}

export default Chat