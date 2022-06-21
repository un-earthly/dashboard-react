import React, { useEffect, useState } from 'react'
import lightBtn from '../assets/Button/light_btn.svg'
import darkBtn from '../assets/Button/dark_btn.svg'
export default function Navbar({theme,setTheme}) {
    
    return (
        <nav>
            <label class="label cursor-pointer">
                <img className="border rounded-full" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} src={theme === "dark" ? darkBtn : lightBtn} alt="" />
            </label>
        </nav>
    )
}
