// linking github profile to page

// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rahul-MyGit')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='flex justify-center items-center text-white bg-gray-600 p-4 text-3xl ml-80 mr-96'>
        <div >
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    <div className="ml-20">
      <div className="text-center pl-28" >
        Github Following: {data.following}
      </div>
      
    </div>
  </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const res = await fetch('https://api.github.com/users/rahul-MyGit')
  return res.json();
}