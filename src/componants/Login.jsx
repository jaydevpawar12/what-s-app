import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useLoginUserMutation } from '../redux/authApi'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"



const Login = ({ toggle }) => {
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()
    const [login, { isSuccess }] = useLoginUserMutation()
    const handleChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        login(userData)
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success("login Success")
            navigate('/chat')
        }
    }, [isSuccess])
    return <>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body overflow-hidden">
                <h2 className="card-title">Login</h2>
                <form onSubmit={handleSubmit} >
                    <motion.input
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                        type="text"
                        name='username'
                        onChange={handleChange}
                        placeholder="Enter Mobile Number Or Email"
                        className="input input-bordered w-full " />
                    <motion.input
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        type="text"
                        name='password'
                        onChange={handleChange} placeholder="Enter Password" className="input input-bordered w-full " />
                    <motion.button
                        initial={{ x: "200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        type='submit'
                        className="p-3 rounded-md text-white bg-primary">Login</motion.button>
                    <motion.p
                        initial={{ y: "200%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                    >Don't Have An Account ?<span onClick={toggle} className='cursor-pointer text-blue-400'>Register to  Account</span>
                    </motion.p>
                </form>
            </div>
        </div>
    </>
}

export default Login