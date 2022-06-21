import { useEffect, useState } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="grid md:grid-cols-9">
      <div className={open ? "col-span-2" : "col-span-1"}>
        <Sidebar setOpen={setOpen} open={open} />
      </div>
      <div className="col-span-7">
        <Home />
      </div>
    </div>
  );
}

export default App;
