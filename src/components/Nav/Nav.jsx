import React from 'react'
import { Link } from 'react-router-dom'
import Cauldron from '../../assets/Cauldron.svg'

const Nav = () => {

    const maskStyle = {
        maskImage: 'linear-gradient(to top, transparent 0%, white 70%)',
        WebkitMaskImage: 'linear-gradient(to top, transparent 0%, white 70%)',
        zIndex: '20',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backdropFilter: 'blur(12px)',
    };

    return (
        <>
            <div className="warpper bg-gradient-to-t from-[#0F1014] to-[#121212] w-full border-b border-[#414141] fixed h-[60px]">
                <div className="flex-center w-full h-full max-w-[1400px] py-3 m-auto relative">
                    <div style={maskStyle} />
                    <div className="flex-between w-full px-4 z-40 lg:px-8">
                        <Link to="/" className="flex-center gap-1">
                            <img className="w-8" src={Cauldron} alt="Cauldron" />
                            <p className="text-white text-2xl">Cauldron</p>
                        </Link>
                        <div className="flex-center">
                            <Link to="/login" className="text-white text-sm">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav