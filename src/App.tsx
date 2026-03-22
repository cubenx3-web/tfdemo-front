import {Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/sign-upPage/SignUpPage'
import LoginPage from './pages/loginPage/LoginPage'
import ProtectedRoutes from './ProtectedRoutes'
import Dashboard from './pages/dashboard/Dashboard'

function App() {

  return (
    <>
      <Routes>
        
        <Route path='/dashboard' element={ 

            <ProtectedRoutes>
              <div className='page dashboard-page'>
                <Dashboard/>
              </div>
            </ProtectedRoutes>          

            

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
