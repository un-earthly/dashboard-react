import React from 'react'
import burger from "../assets/Icon_Menu.svg"
import logo from "../assets/Icon_Menu.svg"
export default function Sidebar({ open, setOpen }) {
    return (
        <aside className='mx-3 px-2 py-5 h-screen'>
            <img src={burger} alt="" />
        </aside>
    )
}
