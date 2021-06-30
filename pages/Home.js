import React from 'react'
import HomeNav from '../components/HomeNav'
import HomeProfile from '../components/HomeProfile'
import Main from '../components/Main'
import Feeds from '../components/Feeds'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'


const Home = () => {
    const router = useRouter()
    const user = useSelector(State => State.User)
    const dispatch = useDispatch()


    return (
        <div className="">
            {/* Home nav */}
            <HomeNav />
            {/* Home Profile */}



            <HomeProfile />

            {/* main Event */}
            <Main />
            {/* feeds */}
            <Feeds />



        </div>
    )
}

export default Home
