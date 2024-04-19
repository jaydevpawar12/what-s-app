import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useRegisterUserMutation } from '../redux/authApi'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

const Register = ({ toggle }) => {
    const [user, setUser] = useState({})

    const [register, { isSuccess }] = useRegisterUserMutation()

    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        register(user)
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Register Success")
            toggle()
        }
    }, [isSuccess])
    return <>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body overflow-hidden">
                <h2 className="card-title">Register</h2>
                <form onSubmit={handleSubmit} >
                    <motion.input
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                        type="text" onChange={handleChange} name='name' placeholder="Enter Name" className="input input-bordered w-full " />
                    <motion.input
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        type="text" onChange={handleChange} name='mobile' placeholder="Enter Moblile Number" className="input input-bordered w-full " />
                    <motion.input
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        type="text" onChange={handleChange} name='email' placeholder="Enter Email" className="input input-bordered w-full " />
                    <motion.input
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        type="text" onChange={handleChange} name='password' placeholder="Enter Password" className="input input-bordered w-full " />

                    <motion.button
                        initial={{ x: "200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        type='submit' className="p-3 rounded-md  text-white bg-primary">Register</motion.button>
                    <motion.p
                        initial={{ y: "200%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                    >Already Have An Account ?<span onClick={toggle} className='cursor-pointer text-blue-400'>Login to  Account</span>
                    </motion.p>
                </form>

            </div>
        </div>
    </>
}

export default Register