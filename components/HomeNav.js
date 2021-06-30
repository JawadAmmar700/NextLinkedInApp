import React, { useState, useEffect } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import WorkIcon from '@material-ui/icons/Work'
import MessageIcon from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps';
import { auth } from '../firebase'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'


const navigation = [
    {
        name: 'Home',
        logo: <HomeIcon />
    },
    {
        name: 'My network',
        logo: <SupervisorAccountIcon />
    },
    {
        name: 'Jobs',
        logo: <WorkIcon />
    },
    {
        name: 'Messaging',
        logo: <MessageIcon />
    },
    {
        name: 'Notifications',
        logo: <NotificationsIcon />
    },

]



const HomeNav = () => {
    const [op, setOp] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const signOut = () => {
        auth.signOut()

    }
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch({
                    type: 'Add_User',
                    user: user
                })

            } else {
                dispatch({
                    type: 'Sign_Out',
                    user: null
                })
                router.push('/')

            }
        })
    }, [])
    return (
        <div>
            <div className="w-full h-16 bg-gray-100 flex items-center justify-between ">
                <div className="w-auto h-10 flex items-center ml-10">
                    <img src="/images/home-logo.svg" alt="" />
                    <div className="flex items-center rounded ml-2 bg-gray-200 ">
                        <img src="/images/search-icon.svg" className="h-5 ml-2" />
                        <input type="text" className="w-44 h-8 ml-2 rounded bg-transparent outline-none" placeholder="Search" />
                    </div>
                </div>
            </div>
            <div className="w-full cursor-pointer bg-gray-100 z-10 h-16  flex items-center justify-center fixed bottom-0 lg:absolute lg:top-0 lg:right-0 lg:w-2/4 ">
                {
                    navigation.map((item, id) => (
                        <div key={id} className="flex items-center flex-col ml-2 lg:ml-5">
                            {item.logo}
                            <p>{item.name}</p>
                        </div>
                    ))
                }
                <div className={`flex items-center flex-col ml-2 `} onMouseOver={() => setOp(true)} onMouseLeave={() => setOp(false)}>
                    <img src="/images/user.svg" className="w-6 h-6 rounded-full " />
                    <p>me <ArrowDropDownIcon /></p>

                </div>
                <button
                    onClick={signOut}
                    className={`flex items-center justify-center w-24 h-10 opacity-${op ? 1 : 0} rounded bg-yellow-400 absolute -top-10 right-16 lg:right-28 lg:top-14`}
                >Sign Out</button>
                <div className="flex items-center flex-col ml-2 lg:border-l lg:p-2 lg:border-gray-300">
                    <AppsIcon />
                    <p>More<ArrowDropDownIcon /> </p>
                </div>
            </div>
        </div >
    )
}

export default HomeNav
