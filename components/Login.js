import React from 'react'
import { auth, provider } from '../firebase';



const Login = () => {

    const handleSignIn = () => {
        auth.signInWithPopup(provider).catch(err => console.log(err))

    }

    return (
        <div>
            {/* Login Nav */}
            <div className="w-full h-16  flex items-center justify-between">
                <img src="/images/login-logo.svg"
                    className="w-22 h-8 ml-4 lg:ml-12" />
                <div className="mr-4 lg:mr-12">
                    <button className="mr-6">Join now</button>
                    <button className="w-24 h-8 text-blue-500 border border-blue-500 rounded-full">Sign in</button>
                </div>
            </div>
            {/* image login */}
            <div className="w-full h-auto flex mt-8 justify-between items-center flex-col lg:flex-row">
                <p className="text-lg text-gray-500 lg:-mt-96 lg:text-5xl lg:ml-16 ">Welcome to your professional community</p>
                <img src="/images/login-hero.svg"
                    className="mt-8 lg:w-3/6" />
            </div>
            {/* google sign in  */}
            <div className="w-full lg:w-80 h-auto mt-4 mb-4 lg:-mt-96 lg:ml-16 flex items-center justify-center">
                <button className="w-4/5 lg:w-full h-12 rounded-full flex items-center justify-center  border border-gray-600"
                    onClick={handleSignIn}>
                    <img src="/images/google.svg"
                    />
                    Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login
