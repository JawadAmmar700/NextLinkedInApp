import React from 'react'


const HomeProfile = () => {
    return (
        <div className="w-full mt-6 h-auto flex justify-center items-center flex-col lg:w-1/4">
            <div className="w-4/5 bg-white rounded">
                <img src="/images/card-bg.svg" alt="" />
                <div className="w-20 h-20 flex items-center justify-center relative left-2/4 -mt-10 transform rounded-full -translate-x-2/4 bg-yellow-800">
                    <img src="/images/photo.svg" alt="" />
                </div>
                <div className=" w-full mt-12 p-5 border-b border-gray-400 flex items-center justify-center flex-col">
                    <p>Welcome, Jawad Ammar</p>
                    <p className="text-blue-600" href="#">Add a Photo</p>
                </div>
                <div className="w-full mt-0 p-5 border-b border-gray-400 flex justify-between   ">
                    <div>
                        <p>connections</p>
                        <p>Grow your network</p>
                    </div>
                    <img src="/images/widget-icon.svg" alt="" />
                </div>
                <p className="w-4/5 mt-0 p-5 flex  ">
                    <img src="/images/item-icon.svg" alt="" />
                    My items
                </p>
            </div>
            <div className="w-4/5  mb-20  mt-5 rounded bg-white ">
                <div className="p-5 flex  justify-between border-b border-gray-400">
                    <div>
                        <p>Groups</p>
                        <p>Events</p>
                        <p>Follows Hastags</p>
                    </div>
                    <img src="/images/plus-icon.svg" alt="" />
                </div>
                <p className="p-5">Discover more</p>
            </div>


        </div >
    )
}

export default HomeProfile
