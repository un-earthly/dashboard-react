import React, { useEffect } from 'react'
import lightMenu from "../assets/icons/light_Menu.svg"
import darkMenu from "../assets/icons/dark_Menu.svg"
import home from "../assets/icons/Icon_Home.svg"
import logo from "../assets/icons/logo_icon.svg"
import settingsLight from "../assets/icons/Icon_Settings.svg"
import historyLight from "../assets/icons/Icon_history.svg"
import patientLight from "../assets/icons/Icon_Patient.svg"
import appointmentLight from "../assets/icons/Icon_Appointment.svg"
import settingsDark from "../assets/icons/dark_settings.svg"
import historyDark from "../assets/icons/dark_history.svg"
import patientDark from "../assets/icons/dark_patient.svg"
import appointmentDark from "../assets/icons/dark_appointment.svg"
import addBtn from "../assets/Button/plusgrad_btn.svg"
import closeBtn from "../assets/Button/close_btn.svg"
import closeBtnDark from "../assets/Button/dark_closebtn.svg"
export default function Sidebar({ open, setOpen, theme }) {
    return (
        <aside className='mx-3 px-2 py-5 h-screen flex flex-col items-center justify-around relative'>

            {open && < img src={theme === "dark" ? closeBtnDark : closeBtn} onClick={() => setOpen(false)} className='cursor-pointer absolute -right-8 top-10' alt="" />}
            <div className='flex items-center justify-center flex-col '>
                <div className="-mt-16 mb-24">
                    {
                        open
                        &&
                        <div className='flex items-center justify-center'>
                            <img src={logo} alt="" />
                            <h1 className='text-2xl font-semibold ml-7'>Medi
                                <span className="text-[#ff7594]">Doc</span>
                            </h1>
                        </div>

                    }
                </div>

                <ul className='space-y-5 font-medium'>
                    <li className='flex items-center justify-start space-x-4 text-[#FF7594]'><img src={home} alt="" />{open && <p>Home</p>}</li>
                    <li className={`flex items-center justify-start space-x-4 ${theme === "dark" ? "text-white" : "text-[#2E1619]"}`}><img src={theme === "dark" ? patientDark : patientLight} alt="" />{open && <p>Patient Profile </p>}</li>
                    <li className={`flex items-center justify-start space-x-4 ${theme === "dark" ? "text-white" : "text-[#2E1619]"}`}><img src={theme === "dark" ? appointmentDark : appointmentLight} alt="" />{open && <p>Appointments</p>}</li>
                    <li className={`flex items-center justify-start space-x-4 ${theme === "dark" ? "text-white" : "text-[#2E1619]"}`}><img src={theme === "dark" ? historyDark : historyLight} alt="" />{open && <p>Medical History</p>}</li>
                    <li className={`flex items-center justify-start space-x-4 ${theme === "dark" ? "text-white" : "text-[#2E1619]"}`}><img src={theme === "dark" ? settingsDark : settingsLight} alt="" />{open && <p>Settings</p>}</li>

                </ul>
                {open ? <button className='pt-20 bg-gradient-to-tr text-white from-[#FF7594] to-[#FF7C65] btn border-none'>New appointment</button> : <img src={addBtn} alt="" />}
            </div>
        </aside>
    )
}
