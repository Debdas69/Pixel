import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Save from "./components/Save"


function App() {
 
    const API_KEY = "t1LOMV5cDowHJx8a5BoRfwtig1D03QmY4jwwo3EDvcvlsmJb0fi1CAPg"
    const URL = "https://api.pexels.com/v1/search?query=nature&per_page=1"

    const [images, setImages] = useState([])
    const [search, setSearch] = useState("nature")

    useEffect(() => {
     const fetch = async () => {
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
            },
        }
      )
      setImages(res.data.photos)
     }
     fetch();
    }, [search])
    

  return (
    <>
     <Navbar setSearch={setSearch}/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home images={images}/>}/>
     </Routes>
     <Routes>
      <Route path="/save" element={<Save />}/>
     </Routes>
    
     </BrowserRouter>
    </>
  )
}

export default App
