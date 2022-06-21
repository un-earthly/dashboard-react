import { useEffect, useState } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
function App() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
  }, [theme])
  return (
    <div className="flex bg-gray-200 z-50 relative">
      <div className={`${theme === "dark" ? "bg-[#2E1619]" : "bg-white"} absolute ${open ? "w-56" : "w-24"}`}>
        <Sidebar setOpen={setOpen} open={open} theme={theme} />
      </div>
      <div className="col-span-2 ml-24">
        <Navbar setTheme={setTheme} theme={theme} />
        <Home />
      </div>
    </div>
  );
}

export default App;
