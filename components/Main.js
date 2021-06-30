import React, { useState, useEffect, useRef } from 'react'
import Post from './Post'
import axios from 'axios'

import Model from './Model'

const Main = () => {

    const [open, setOpen] = useState(false)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const modelPop = () => {
        setOpen(true)
    }



    useEffect(() => {
        const getAll = async () => {

            await axios.get('http://localhost:5000').
                then(res => {
                    setPosts(res.data.reverse())
                })
        }
        getAll()
    }, [])




    return (
        <>
            <div className="w-4/5 lg:w-2/4 lg:-ml-8 mb-16  rounded relative   left-2/4 transform -translate-x-2/4 lg:absolute lg:top-0 lg:mt-24">
                <div className="w-4/5   mb-16 bg-white rounded relative   left-2/4 transform -translate-x-2/4">
                    <div className="flex items-center p-2">
                        <img src="images/user.svg" className="w-12 h-12 rounded-full" alt="" />
                        <input onClick={modelPop} type="text" className="w-4/5 ml-4 h-10 rounded-full border outline-none border-gray-400" placeholder="Start a post" />
                    </div>
                    <div className="flex p-3 items-center justify-center">
                        <p className=" text-blue-400" >Photo</p>
                        <p className="ml-4 text-blue-400">Video</p>
                        <p className="ml-4 text-blue-400">Event</p>
                        <p className="ml-4 text-blue-400">Write article</p>
                    </div>



                </div>
                {loading && <div className="w-8 h-8 mb-8 ml-44">loaidng</div>}
                {
                    posts?.map((post, id) => (
                        <Post key={id} post={post} />
                    ))
                }
            </div>
            {
                open && <Model open={setOpen} posts={setPosts} loading={setLoading} />
            }
        </>
    )
}

export default Main
