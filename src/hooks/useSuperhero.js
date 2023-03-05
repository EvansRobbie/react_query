import axios from "axios"
import { useQuery } from "react-query"

const fetchQuery = () =>{
    return axios.get('http://localhost:5000/superheroes')
  }
export const useSuperhero = (onSuccess, onError) =>{
    return useQuery(
        'super-heroes', 
        fetchQuery,
        {
          // cacheTime defaul= 5 minutes it ensures that it doesnt have to be reloading each time some one navigates to the pagw
          // cacheTime: 5000,
          // stale time is used to reduce the bacckground to fetch the data:- used wen the data changes ocassionally
          // reduce the no. of network requests
          // staleTime: 30000, :- default value = 0
          // refetchOnMount: true by defaul refetchOnMount is true where the data fetches everytime the component mounts/reloads
          // refetchOnWindowFocus:true === anytimr the tab loses focus and gains it it fetches the data i.e
        //  refetchInterval:false -- default= false. This can be used in the crypto markets where the prices change regulary.
        // This ensures that the prices are in synch with the UI every time they change
        // refetchInterval:2000,
        onSuccess,
        onError
    
        }
        )
}