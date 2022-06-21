import React, { useEffect, useState } from 'react'
import lightBtn from '../assets/Button/light_btn.svg'
import darkBtn from '../assets/Button/dark_btn.svg'
export default function Navbar() {

    const [theme, setTheme] = useState("light")
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    return (
        <nav>
            <label class="label cursor-pointer">
                <img className="border rounded-full" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} src={theme === "dark" ? lightBtn : darkBtn} alt="" />
            </label>
        </nav>
    )
}
