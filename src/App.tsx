import './App.css'
import { Route, Routes } from 'react-router'
import SignUpPage from './pages/sign-upPage/SignUpPage'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={ <h1>Land in page</h1> }/>
        
        <Route path='/login' element={ 
          
            <div className='page'>
            </div>
          
        }/>
  

        <Route path='/sign-up' element={ 
          
           <div className='page'>
              <SignUpPage/>
           </div>

        }/>

      </Routes>
    </>
  )
}

export default App
