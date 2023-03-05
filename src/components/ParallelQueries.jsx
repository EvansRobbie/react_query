import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperheroes = () =>{
    return axios.get('http://localhost:5000/superheroes')
  }

  const fetchFrends = () =>{
    return axios.get('http://localhost:5000/friends')
  }
const ParallelQueries = () => {
    useQuery('super-heroes', fetchSuperheroes)
    useQuery('friends', fetchFrends )
  return (
    <div>ParallelQueries</div>
  )
}

export default ParallelQueries