import {Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/sign-upPage/SignUpPage'
import LoginPage from './pages/loginPage/LoginPage'

function App() {

  return (
    <>
      <Routes>
        
        <Route path='/' element={ 
          
           <div className='page sign-up-page'>
              <SignUpPage/>
           </div>

        }/>

        <Route path='/login' element={ 
          
            <div className='page login-page'>
              <LoginPage/>
            </div>
          
        }/>
  

        <Route path='/sign-up' element={ 
          
           <div className='page sign-up-page'>
              <SignUpPage/>
           </div>

        }/>

      </Routes>  
    </>
  )
}

export default App
