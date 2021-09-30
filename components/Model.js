import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'


const Model = ({ open, posts, loading }) => {
    const [openVideo, setOpenVideo] = useState(false)
    const [openImg, setOpenImg] = useState(false)
    const [input, setInput] = useState('')
    const [img, setImg] = useState('')
    const [video, setVideo] = useState('')
    const user = useSelector(State => State.User)

    const handleImage = (e) => {
         setImg(URL.createObjectURL(e.target.files[0]))
        console.log(img)
        // setImg(e.target.files[0].name)
    }
    const Video = (e) => {
        setVideo(e.target.value)
    }
    const handleVideo = () => {
        setOpenImg(false)
        setOpenVideo(!openVideo)
    }
    const handleImageOpen = () => {
        setOpenImg(!openImg)
        setOpenVideo(false)
    }
    const SubmitForm = async () => {
        loading(true)
        await axios.post('http://localhost:5000', {
            name: user.displayName,
            des: input,
            src: img,
            video: video,
            email: user.email,
            photo: user.photoURL,
            time: new Date()
        }).then(res => {
            posts(res.data.reverse())
        })
        loading(false)
        setInput('')
        setImg('')
        setVideo('')
        open(false)
    }
    return (
        <div className="w-full flex items-center justify-center bg-opacity-50  h-screen bg-gray-300 absolute top-0  z-10">
            <div className="w-96 -mt-44  h-auto bg-white rounded p-5">
                <div className="flex items-center  justify-center">
                    <img src={user.photoURL} className="w-12 -ml-2 h-12 rounded-full" alt="" />
                    <input onChange={e => setInput(e.target.value)} className="w-4/5 h-8 rounded outline-none ml-2 bg-gray-300" placeholder=" Enter a post" type="text" name="" id="" />

                </div>
                <div className="p-5 flex cursor-pointer items-center">
                    <p onClick={handleImageOpen} >Add photo</p>
                    <p className="ml-4" onClick={handleVideo}>Add Video</p>
                </div>
                {
                    openImg && <div className="p-5 flex items-center justify-between">
                        <input type="file" accept="image/*" onChange={handleImage} name="" id="" />
                        <img className="w-24 h-24" src={img} alt="" />
                    </div>
                }
                {
                    openVideo && <div className="p-5">
                        <p>Enter video url</p>
                        <input onChange={Video} value={video} className="w-4/5 h-8 rounded outline-none bg-gray-300" placeholder=" Video Url" type="text" name="" id="" />
                    </div>
                }
                <button onClick={SubmitForm} disabled={input ? false : true} className="w-4/5 outline-none border-0 ml-10 mb-2 hover:opacity-80 h-8 bg-green-500">Submit Post</button>
                <button onClick={() => open(false)} className="w-4/5 outline-none border-0 ml-10 mb-2 hover:opacity-80 h-8 bg-green-500">Close Model</button>

            </div>
        </div>
    )
}

export default Model
