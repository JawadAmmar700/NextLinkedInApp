import React from 'react'

const Feeds = () => {
    return (
        <div className=" w-4/5 lg:w-1/4 rounded bg-white mb-20 relative lg:absolute  lg:top-0 lg:mt-24 lg:ml-100  left-2/4 transform -translate-x-2/4">
            <div className=" p-5 flex justify-between">
                <p> Add to your fedd</p>
                <img src="/images/feed-icon.svg" alt="" />
            </div>
            <div className="p-5">
                <div>
                    <p>#Linkedin</p>
                    <button className="w-20 h-8 rounded-full border border-gray-400">Follow</button>
                </div>
                <div className="mt-4">
                    <p>#Linkedin</p>
                    <button className="w-20 h-8 rounded-full border border-gray-400">Follow</button>
                </div>
                <p className="flex cursor-pointer text-blue-500 items-center mt-2">View all recommendation <img src="/images/right-icon.svg" /></p>

            </div>
        </div>
    )
}

export default Feeds
