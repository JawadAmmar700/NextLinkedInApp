import React from 'react'
import ReactPlayer from 'react-player'


const Post = ({ post }) => {
    const { name, des, src, video, email, photo, time } = post
    return (
        <div className=" w-4/5  mb-16 -mt-10 bg-white rounded relative  left-2/4 transform -translate-x-2/4 ">
            <div className="w-full p-5 flex items-center">
                <img className="w-14 h-14" src={photo} alt="" />
                <div className="ml-6">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{time}</p>
                </div>
            </div>
            <div className="w-full p-3">
                {des}
            </div>
            {
                src ?
                    <img src={src} className="mb-6 relative left-2/4 border border-yellow-400 transform -translate-x-2/4 w-full h-80" alt="" />
                    :
                    <div className="w-full h-80">

                        <ReactPlayer
                            url={video}
                            width='100%'
                            height='100%'

                        />
                    </div>
            }

        </div>
    )
}

export default Post
