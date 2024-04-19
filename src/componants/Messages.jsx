import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { BsSearch } from "react-icons/bs";
import { TbDotsVertical } from "react-icons/tb";
import { BiSolidMicrophone } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { IoDocumentText } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { BsCameraFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
import { PiStickerFill } from "react-icons/pi";
import EmojiPicker from "emoji-picker-react"
import { AiOutlineArrowRight } from "react-icons/ai";
const Messages = ({ toggle,width }) => {
    const [selectedEmoji, setSelectedEmoji] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        console.log(selectedEmoji);
        setSelectedEmoji("")
    }
    const handleKeyDown = e => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return <div className='w-full h-screen flex flex-col ' >
        <div className='flex bg-[#202C33] py-1 justify-between w-full'>
            <div className='flex  px-4 py-2 border-l-1 overflow-hidden items-center gap-4'>
                <motion.img
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className='h-14 w-14 rounded-full object-cover'
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                <div className='space-y-1'>
                    <span className='text-xl'>Jaydev Pawar</span>
                    <p className='text-xs'>Click here for contact info</p>
                </div>
            </div>
            <div className='flex gap-4 text-xl px-4 py-2 items-center '>
                <motion.div
                    initial={{ y: "-200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="dropdown dropdown-end"
                >
                    <div tabIndex={0} role="button" className="">
                        <BsSearch />
                    </div>
                    <div
                        tabIndex={0}
                        className="card compact dropdown-content z-[1] shadow bg-slate-500 rounded-box w-64">
                        <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: "-200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="dropdown dropdown-end"
                >
                    <div tabIndex={0} role="button" className="">
                        <TbDotsVertical />
                    </div>
                    <ul
                        tabIndex={0}
                        className="card compact dropdown-content z-[1] shadow bg-slate-500 rounded-box w-64">
                        <li className='px-3'>ddssgg</li>
                        <li className='px-3'>ddssgg</li>
                        <li className='px-3'>ddssgg</li>
                    </ul>
                </motion.div>
               
                <motion.div
                    initial={{ y: "-200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                >
                    {
                    width <=768 && <button className=" text-white btn-primary" onClick={toggle}><AiOutlineArrowRight /></button>

                }
                </motion.div>
                
            </div>
        </div>

        <div className='w-full flex-grow overflow-y-auto  px-4'>
            {
                [1, 2, 3, 4, 5, 6].map(item => <div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Obi-Wan Kenobi
                            <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-bubble">You were the Chosen One!</div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Anakin
                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">
                            Seen at 12:46
                        </div>
                    </div>
                </div>)
            }

        </div>

        <div className='flex items-center  gap-2  py-2 px-2 bg-[#202C33]'>
            <div className="dropdown dropdown-hover dropdown-top">
                <div tabIndex={0} role="button" className=" text-2xl px-3 "><BsEmojiSmile /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <EmojiPicker open={true} onEmojiClick={e => setSelectedEmoji(pre => pre + e.emoji)} />
                </ul>
            </div>
            <motion.div
                initial={{ y: "-200%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="dropdown dropdown-top"
            >
                <div tabIndex={0} role="button" className="text-2xl">
                    <GrAdd />
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-lg ">
                    <li><a className='text-purple-700 '>< IoDocumentText /> <span className='text-slate-400 text-sm'>Document</span> </a></li>
                    <li><a className='text-blue-600 '>< IoMdPhotos /> <span className='text-slate-400 text-sm'>Photos&Videos</span> </a></li>
                    <li><a className='text-red-700 '>< BsCameraFill /> <span className='text-slate-400 text-sm'>Camera</span> </a></li>
                    <li><a className='text-blue-600 '>< BsFillPersonFill /> <span className='text-slate-400 text-sm'>Contact</span> </a></li>
                    <li><a className='text-yellow-600 '>< BiPoll /> <span className='text-slate-400 text-sm'>Poll</span> </a></li>
                    <li><a className='text-green-800 '>< PiStickerFill /> <span className='text-slate-400 text-sm'>New Sticker</span> </a></li>

                </ul>
            </motion.div>
            <form onSubmit={handleSubmit} className='w-full' >
                <input
                    type="text"
                    onKeyDown={handleKeyDown}
                    value={selectedEmoji}
                    onChange={e => setSelectedEmoji(e.target.value)}
                    placeholder="Type Message" className="input input-bordered w-full " />
            </form>
            <span className='text-2xl px-3'><BiSolidMicrophone /></span>
        </div>
    </div>
}

export default Messages