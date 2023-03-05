import axios from 'axios'
import { InfinitySpin} from 'react-loader-spinner'
import React, { useEffect, useState } from 'react'

const Superheroes = () => {
  const [isLoading, setIsLoading] =  useState(true)
  const [data, setData] =  useState([])
  const [error, setError] = useState('')

  useEffect(() =>{
    // setIsLoading(true)
    axios.get('http://localhost:5000/superheroes')
    .then((res) =>{
      setData(res.data)
      setIsLoading(false)
    })
    .catch((error)=>{
      setError(error.message)
      setIsLoading(false)
    })
    
  }, [])
  // if (isLoading){
  //   return <div className='text-lg text-slate-200 flex items-center'>
  //     <InfinitySpin 
  //       width='200'
  //       color="#fff"
  //     />
  //   </div>
  // } 
  const dataElement = data.map((hero)=>{
    return <div key={hero.id} className='text-slate-200 text-center py-4'>{hero.name}</div>
  })
  return (
    <div className='max-w-[1140px] w-full h-auto mx-auto rounded-xl bg-slate-900 shadow-lg shadow-cyan-500 '>
      <h2 className='text-2xl font-medium mx-4 uppercase text-red-200 py-2 text-center'>Super Heroes Page</h2>
      {isLoading ? ( <div className='text-lg text-slate-200 flex items-center justify-center'>
      <InfinitySpin 
        width='150'
        color="#fff"
      />
    </div>): dataElement}
    {error ? <div className='text-center text-red-500'>
      {error}
      </div> : null }
    
    
    </div>
  )
}

export default Superheroes