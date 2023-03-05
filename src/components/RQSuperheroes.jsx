import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { useSuperhero } from '../hooks/useSuperhero'


const RQSuperheroes = () => {
  // call the hook
  // it  requeires 2 arguments
// 1.has a unique key to identify the query
// 2. a function that returns a promise 
// success and error callbacks
const onSuccess = () =>{
  console.log('Perfom side effect after data fetching')
}
const onError = () =>{
  console.log('Perfom side effect after encountering error')
}
  const {isLoading, data, isError ,error}= useSuperhero(onSuccess, onError)
 
  const dataElement = data?.data.map((hero)=>{
    return (
      <div key={hero.id} className='text-slate-200 text-center py-4'>
        <Link to ={`/rq-superheroes/${hero.id}`}>{hero.name}</Link>
      </div>
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
    {isError ? <div className='text-center text-red-500'>
      {error.message}
      </div> : null }
    </div>
  )
}

export default RQSuperheroes