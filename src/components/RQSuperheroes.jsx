import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'

const fetchQuery = () =>{
  return axios.get('http://localhost:5000/superheroes')
}
const RQSuperheroes = () => {
  // call the hook
  // it  requeires 2 arguments
// 1.has a unique key to identify the query
// 2. a function that returns a promise 
  const {isLoading, data}= useQuery('super-heroes', fetchQuery)
 
  const dataElement = data?.data.map((hero)=>{
    return (
      <div key={hero.id} className='text-slate-200 text-center py-4'>{hero.name}</div>
    )
  })
  return (
    <div className='max-w-[1140px] w-full h-auto mx-auto rounded-xl bg-slate-900 shadow-lg shadow-cyan-500 '>
     <h2 className='text-2xl font-medium mx-4 uppercase text-red-200 py-2 text-center'>RQSuperheroes</h2>
     {isLoading ? ( <div className='text-lg text-slate-200 flex items-center justify-center'>
      <InfinitySpin 
        width='150'
        color="#fff"
      />
    </div>): dataElement}
    </div>
  )
}

export default RQSuperheroes