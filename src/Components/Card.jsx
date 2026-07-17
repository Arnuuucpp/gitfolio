import React from 'react'

const Card = (props) => {
  if(!props.UserData) return null
  // console.log(props.UserData)
  if(!props.repo) return null
  console.log(props.repo)
  return (
    <div className='flex'>
      
      <div className='bg-emerald-800/75 p-2 rounded-2xl border-none gap-2.5 flex flex-col items-center justify-center w-80 h-80 mt-3'>
      <img src={props.UserData.avatar_url} alt="avatar"
      className='w-24 h-24 rounded-[50%] border-2 border-white bg-contain bg-center'
      />
      <h2 className='font-bold text-l text-white'>{props.UserData.name}</h2>
      <p  className='font-semibold text-xs text-gray-900'>{props.UserData.login}</p>
      <p className='font-light text-s text-white'><span className='font-bold text-s text-white'>Followers: </span>{props.UserData.followers}</p>
      <p className='font-light text-s text-white'><span className='font-bold text-s text-white'>Public Repos: </span>{props.UserData.public_repos}</p>
      </div>

      <div>
        {(props.repo).map((e)=>{
          return <h1 className='text-white' key={e.id}>{e.name}</h1>
        })}
      </div>
    </div>
  )
}

export default Card