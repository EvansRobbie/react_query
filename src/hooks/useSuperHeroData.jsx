import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHero = (heroId) =>{
    return axios.get(`http://localhost:5000/superheroes/${heroId}`)
}

const useSuperHeroData = (heroId) => {
  return useQuery(['super-hero', heroId],() => fetchSuperHero(heroId))
}

export default useSuperHeroData