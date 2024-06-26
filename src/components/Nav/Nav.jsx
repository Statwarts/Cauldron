import React from 'react'
import { Link } from 'react-router-dom'
import Cauldron from '../../assets/Cauldron.svg'

const Nav = () => {
    return (
        <>
            <div className="warpper w-full border-b border-[#414141] fixed h-[60px] p-3 z-40">
                <div className="flex-center w-full max-w-[1400px] m-auto">
                    <div className="flex-between w-full px-1 lg:px-8">
                        <Link to="/" className="flex-center gap-1">
                            <img className="w-6" src={Cauldron} alt="Cauldron" />
                            <p className="text-white text-xl">Cauldron</p>
                        </Link>
                        <div className="flex-center">
                            <Link to="/login" className="text-white">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav