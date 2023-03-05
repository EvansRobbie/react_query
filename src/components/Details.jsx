import React from 'react'
import { useParams } from "react-router-dom"
import { useQuery } from 'react-query'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'


const details = () => {
    // const {heroId} = useParams()
    // const { data} = useSuperHeroData(heroId)
    const params = useParams()
    const { isLoading, isError, error, data} = useQuery(['super-hero', params.id], () =>{
      return  axios.get(`http://localhost:5000/superheroes/${params.id}`)
    })
   
    // console.log(data?.data)
  return (
    <div>
        <div className='max-w-[1140px] w-full h-auto mx-auto rounded-xl bg-slate-900 shadow-lg shadow-cyan-500 '>
     <h2 className='text-2xl font-medium mx-4 uppercase text-red-200 py-2 text-center'>Superhero Details</h2>
     {isLoading ? ( <div className='text-lg text-slate-200 flex items-center justify-center'>
      <InfinitySpin 
        width='150'
        color="#fff"
      />
    </div>): (
        <div key={data?.data.id} className='text-slate-200 text-center py-4'>
        <p>{data?.data.name}</p>
        <p>{data?.data.alterEgo}</p>
    </div>
    )}
    {isError ? <div className='text-center text-red-500'>
      {error.message}
      </div> : null }
    </div>

    </div>
  )
}

export default details