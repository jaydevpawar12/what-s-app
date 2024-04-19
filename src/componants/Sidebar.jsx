import React, { useEffect, useRef, useState } from 'react'
import { GrAnnounce } from "react-icons/gr";
import { MdGroup } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import { TbDotsVertical } from "react-icons/tb";
import { motion } from "framer-motion"
import { IoFilter } from "react-icons/io5";
import { useSelector } from "react-redux"
import { IoMdArrowBack } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { AiOutlineCheck } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";

// import { AiOutlineArrowRight } from "react-icons/ai";
import { useLogoutUserMutation } from '../redux/authApi';
import { useNavigate } from 'react-router-dom'
import { useUpdateProfileMutation } from '../redux/userApi';
import { useGetContactQuery } from '../redux/chatApi';


const Sidebar = ({ width, toggle }) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const toggleDrawer = () => setShowDrawer(!showDrawer)
    const { data } = useGetContactQuery()
    const [logout, { isSuccess }] = useLogoutUserMutation()
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navigate("/")
        }
    }, [isSuccess])

    return <div className={`h-screen ${width <= 768 ? "w-full" : "w-96"} flex flex-col border-e  `}>
        <div className=' flex px-4 py-2 justify-between gap-2 bg-[#202C33] items-center'>
            <div className="drawer">
                <input checked={showDrawer} id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}


                    <label htmlFor="my-drawer" onClick={e => setShowDrawer(true)} className=" drawer-button">
                        <motion.img
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                            className='h-16 w-16 rounded-full object-cover'
                            src={`${import.meta.env.VITE_BACKEND_URL}/${user.photo}`} alt="" />
                    </label>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu m-0 p-0  w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <UpdateProfile toggleDrawer={toggleDrawer} />

                    </ul>
                </div>
            </div>

            <div className='flex gap-3 text-xl  '>
                <motion.span
                    initial={{ y: "-200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                ><GrAnnounce /></motion.span>
                <motion.span
                    initial={{ y: "-200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                ><MdGroup /></motion.span>
                <motion.span
                    initial={{ y: "-200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                ><HiOutlineStatusOnline /></motion.span>
                <motion.span
                    initial={{ y: "-200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                ><AiFillMessage /></motion.span>
                <motion.span
                    initial={{ y: "-200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                ><BiMessageSquareAdd /></motion.span>


                <motion.div
                    initial={{ y: "-200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="dropdown dropdown-end"
                >
                    <div tabIndex={0} role="button" className="">
                        <TbDotsVertical />
                    </div>
                    <div
                        tabIndex={0}
                        className="card compact dropdown-content z-[1] shadow bg-slate-500 rounded-box w-64">
                        <button onClick={logout} className=" btn-primary">Logout</button>
                    </div>
                </motion.div>
            </div>
        </div>

        <div className='flex items-center gap-2 my-2 px-1 bg-[#111B21]'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
            <span><IoFilter /></span>
        </div>

        <div className='bg-[#111B21] flex-grow overflow-y-auto'>
            {
                data && data.map(item => <div
                    onClick={toggle}
                    className='flex justify-between items-center px-3 py-3 cursor-pointer'>
                    <div className='flex gap-2 items-center'>
                        <div className='relative'>
                            <div className='size-3 rounded-full bg-green-400 absolute right-0 top-1'></div>
                            <img className='h-14 w-14 rounded-full object-cover' src={`${import.meta.env.VITE_BACKEND_URL}/${item.photo}`} alt="" />
                        </div>
                        <div>
                            <strong>{item.name}</strong>
                            <p className='text-xs'>Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div>10:30 Am</div>
                        <div className="badge  badge-success gap-2">
                            2
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>

}
const UpdateProfile = ({ toggleDrawer }) => {
    const [profileUpdate] = useUpdateProfileMutation()
    const [profile, setProfile] = useState({ name: false, mobile: false, email: false })
    const { user } = useSelector(state => state.auth)
    const [profileData, setProfileData] = useState(user)
    const photoRef = useRef()
    const [profilePhoto, setProfilePhoto] = useState({})
    return <>
        <div className='h-40  bg-[#212B32]  '>
            <div className='flex gap-4 mx-3 mt-3'>
                <span onClick={toggleDrawer} className='text-2xl cursor-pointer'><IoMdArrowBack /> </span> <span className='text-lg'>Profile</span>
            </div>
            <div className='flex justify-center h-full relative  group'>
                <input onChange={e => {
                    setProfilePhoto({ photo: e.target.files[0], preview: URL.createObjectURL(e.target.files[0]) })
                    window.my_modal_3.showModal()
                }} ref={photoRef} type="file" className='hidden' />
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className='h-24 w-24 rounded-full object-cover absolute  -bottom-0'
                    src={`${import.meta.env.VITE_BACKEND_URL}/${user.photo}`} alt="" />
                <div onClick={e => photoRef.current.click()} className='hidden group-hover:flex  absolute bottom-0 bg-gray-500 bg-opacity-65
                    h-24 w-24 rounded-full justify-center items-center text-center text-white p-2 cursor-pointer text-xs flex-col' >
                    <motion.div
                        className='text-lg'
                        initial={{ y: "-60%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CiCamera /></motion.div>
                    <motion.div
                        initial={{ y: "50%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                    >Change Profile Photo</motion.div>
                </div>
            </div>
        </div>

        <div className='mt-20'>
            <div className='p-4 cursor-pointer'>
                <span className='text-green-800 font-semibold text-sm '>Your Name</span>
                <div className='py-4 uppercase flex justify-between items-center'>
                    {
                        profile.name
                            ? <input
                                value={profileData.name}
                                onChange={e => setProfileData({ ...profileData, name: e.target.value })}
                                type="text" placeholder="Type here" className="input font-bold input-bordered w-full max-w-xs" />
                            : <div className='font-bold text-lg' >{profileData.name}</div>
                    }

                    <div >
                        {
                            profile.name
                                ? <span className='text-2xl'
                                    onClick={e => {
                                        setProfile({ ...profile, name: !profile.name })
                                        const fd = new FormData()
                                        fd.append('name', profileData.name)
                                        profileUpdate(fd)
                                    }} >
                                    <AiOutlineCheck /></span>
                                : <span className='text-2xl'
                                    onClick={e => setProfile({ ...profile, name: !profile.name })}
                                ><AiTwotoneEdit /></span>
                        }
                    </div>
                </div>
            </div>
            <div className='p-4 cursor-pointer'>
                <span className='text-green-800 font-semibold text-sm '>Your Email</span>
                <div className='py-4 uppercase flex justify-between items-center'>
                    {
                        profile.email
                            ? <input
                                value={profileData.email}
                                onChange={e => setProfileData({ ...profileData, email: e.target.value })}

                                type="text" placeholder="Type here" className="input font-bold input-bordered w-full max-w-xs" />
                            : <div className='font-bold text-lg' >{profileData.email}</div>
                    }

                    <div >
                        {
                            profile.email
                                ? <span className='text-2xl'
                                    onClick={e => {
                                        setProfile({ ...profile, email: !profile.email })
                                        const fd = new FormData()
                                        fd.append('email', profileData.email)
                                        profileUpdate(fd)
                                    }} > <AiOutlineCheck /></span>
                                : <span className='text-2xl'
                                    onClick={e => setProfile({ ...profile, email: !profile.email })} ><AiTwotoneEdit /></span>
                        }
                    </div>
                </div>
            </div>
            <div className='p-4 cursor-pointer'>
                <span className='text-green-800 font-semibold text-sm '>Your Mobile</span>
                <div className='py-4 uppercase flex justify-between items-center'>
                    {
                        profile.mobile
                            ? <input
                                value={profileData.mobile}
                                onChange={e => setProfileData({ ...profileData, mobile: e.target.value })}
                                type="text" placeholder="Type here" className="input font-bold input-bordered w-full max-w-xs" />
                            : <div className='font-bold text-lg' >{profileData.mobile}</div>
                    }

                    <div >
                        {
                            profile.mobile
                                ? <span className='text-2xl' onClick={e => {
                                    setProfile({ ...profile, mobile: !profile.mobile })
                                    const fd = new FormData()
                                    fd.append('mobile', profileData.mobile)
                                    profileUpdate(fd)
                                }} > <AiOutlineCheck /></span>
                                : <span className='text-2xl'
                                    onClick={e =>
                                        setProfile({ ...profile, mobile: !profile.mobile })} ><AiTwotoneEdit /></span>
                        }
                    </div>
                </div>
            </div>
        </div >

        {/* file Upload */}
        <dialog dialog id="my_modal_3" className="modal" >
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <img src={profilePhoto.preview} height={200} width={200} alt="" />
                <button onClick={e => {
                    const fd = new FormData()
                    fd.append('photo', profilePhoto.photo)
                    // uploadmutation
                    profileUpdate(fd)
                }} className="btn btn-success my-2"><AiOutlineCheck /></button>
            </form>
        </dialog >
    </>
}

export default Sidebar
