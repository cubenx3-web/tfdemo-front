import LoginPage from "./pages/LoginPage"
import { Navigate, Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import DashBoardPage from "./pages/DashboardPage"

function App() {

  return (
    <>

      <Routes>

        {/* LOGIN PAGE */}
        <Route path='/login' element ={
          <div className="relative flex w-full h-full bg-blue-300 justify-center items-center text-lg">
            <LoginPage/>          
          </div>
        }/>

        {/* REGISTRATION PAGE */}
        <Route path='/sign-up' element ={
          <div className="relative flex w-full h-full bg-blue-300 justify-center items-center text-lg">
            <SignUpPage/>          
          </div>
        }/>


        {/* DASHBOARD PAGE */}
        <Route path="/" element={<Navigate to="/Dashboard"/>} />
        
        <Route path="/Dashboard" element={ 
            <div className="relative flex  w-full h-full text-lg transition-all duration-300 ease-in-out font-semibold bg-white  ">
                <DashBoardPage/>          
            </div>
        }/>  
        

      </Routes>


    </>
  )
}

export default App
