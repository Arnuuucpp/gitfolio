import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Card from './Components/Card'

const App = () => {
  const [Username, setUsername] = useState('')
  const [UserData, setUserData] = useState(null)
  const [repo, setrepo] = useState(null)

  const getData = async ()=>{
    try {
      const response = await Axios.get(`https://api.github.com/users/${Username}`)
      const repo = await Axios.get(`https://api.github.com/users/${Username}/repos`)
      // console.log(response.data)
      console.log(repo.data[2].name)

      setUserData(response.data)
      setrepo(repo.data)
    } catch (error) {
      console.log("User not found or API error", error)
    }
  }

  return (
    <div className='bg-black h-screen p-10'>
      <h2 className='text-2xl text-white'>GitFolio</h2>
      <input type="text" 
      className='border-2 border-amber-200 mr-2 p-2 rounded-2xl mt-4 text-white'
      value={Username}
      onChange={(e)=>{
        // console.log(e.target.value)
        setUsername(e.target.value)
      }}
      />
      <button className='p-2 bg-amber-200 font-bold rounded-2xl border-white border-2 cursor-pointer'
      onClick={getData}
      >GetData</button>

      <div className='mt-6'>
        <Card UserData={UserData} repo={repo}/>
      </div>
    </div>
    
  )
}

export default App