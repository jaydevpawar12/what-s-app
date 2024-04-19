import React, { useState } from 'react'
import Login from '../componants/Login'
import Register from '../componants/Register'

const Authentication = () => {
    const [showLogin, setShowLogin] = useState(true)
    const toggle = e => setShowLogin(!showLogin)
    return <>
        <div className='flex relative'>
            <div className='h-screen  md:block'>
                <img className='h-full  w-full md:w-[32rem] absolute' src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className='flex-grow h-screen flex  opacity-85 justify-center items-center'>
                {showLogin ? <Login toggle={toggle} /> : <Register toggle={toggle} />}
            </div>
        </div>
    </>
}

export default Authentication