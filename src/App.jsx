import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { QueryClientProvider, QueryClient} from 'react-query'
import { ReactQueryDevtools} from 'react-query/devtools'
import Superheroes from './components/Superheroes'
import RQSuperheroes from './components/RQSuperheroes'
import Homepage from './components/Homepage'
import Details from './components/Details'
import ParallelQueries from './components/ParallelQueries'



// create an instance of our clent query
const queryClient = new QueryClient()
function App() {
  


  return (
    <QueryClientProvider client={queryClient}>
        <div className='bg-slate-900 h-[100vh] w-full'>
        <Router>
          <nav className='w-full h-20 shadow-lg shadow-cyan-500  mb-10 max-w-[1140px] mx-auto' >
            <ul className='bg-slate-200 h-full w-full flex items-center px-10   rounded-2xl'>
              <li className='mx-10 text-lg text-slate-900 font-medium active:scale-95 hover:text-cyan-500'>
                <Link to='/'>Home</Link>
              </li>
              <li className='mx-10 text-lg text-slate-900 font-medium active:scale-95 hover:text-cyan-500'>
                <Link to='/super-heroes'> Tradition Superheroes</Link>
              </li>
              <li className='mx-10 text-lg text-slate-900 font-medium active:scale-95 hover:text-cyan-500'>
                <Link to='/rq-superheroes'>RQ Super Heroe</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/super-heroes' element={<Superheroes/>}/>
            <Route path='/rq-superheroes' element={<RQSuperheroes/>}/>
            <Route path='/rq-parallel' element={<ParallelQueries/>}/>
            <Route path='/rq-superheroes/:id' element={<Details/>}/>
          </Routes>
        </Router>
        </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App
