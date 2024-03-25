import { useState, useEffect } from "react"

export const Header = () => {
  const [data,setData] = useState([])
  const getData = async () =>{
    const res = await fetch("/data/datos.json")
    const data = await res.json()
    setData(data)
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <header>
        <img src="" alt="" />
        <h1>@GnievaSSJ</h1>

        <p>asdasd</p>
    </header>
  )
}
