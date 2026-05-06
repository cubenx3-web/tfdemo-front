import LoginPage from "./pages/LoginPage"
import { Navigate, Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import DashBoardPage from "./pages/DashboardPage"
import ProtectedRoutes from "./security/ProtectedRoutes"

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
        <Route path="/" element={<Navigate to="/login"/>} />
        
        <Route path="/Dashboard" element={
          
          <ProtectedRoutes>
            <div className="relative flex  w-full h-full text-lg transition-all duration-300 ease-in-out font-semibold bg-white  ">
                <DashBoardPage/>          
            </div>
          </ProtectedRoutes>
         
        }/>  
        

      </Routes>


    </>
  )
}

export default App
