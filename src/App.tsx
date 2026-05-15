import LoginPage from "./pages/LoginPage"
import { Navigate, Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import DashBoardPage from "./pages/DashboardPage"
import ProtectedRoutes from "./security/ProtectedRoutes"
import AdminDashPage from "./pages/AdminDashPage"
import GroupDashPage from "./pages/GroupDashPage"
import PopMsg from "./components/PopMsg"
import AdminRoutes from "./security/AdminRoutes"
import Confirmation from "./components/Confirmation"
import CreateGroupFrom from "./components/CreateGroupFrom"
import JoinGroupForm from "./components/JoinGroupForm"

function App() {

  return (
    <>

      <Routes>

        {/* LOGIN PAGE */}
        <Route path='/login' element ={
          <div className="relative flex w-screen h-screen bg-slate-900 justify-center items-center text-lg overflow-hidden">
            <LoginPage/>          
          </div>
        }/>

        {/* REGISTRATION PAGE */}
        <Route path='/sign-up' element ={
          <div className="relative flex w-screen h-screen bg-slate-900 justify-center items-center text-lg overflow-hidden">
            <SignUpPage/>          
          </div>
        }/>


        {/* DASHBOARD PAGE */}
        <Route path="/" element={<Navigate to="/Dashboard"/>} />
        
        <Route path="/Dashboard" element={
          
          <ProtectedRoutes>
            <div className="relative flex  w-sreen h-screen text-lg transition-all duration-300 ease-in-out font-semibold bg-slate-900 overflow-hidden  ">
                <DashBoardPage/>          
            </div>
          </ProtectedRoutes>
         
        }/>  

        {/* ADMIN DASHBOARD PAGE */}
        <Route path='/Admin-Panel' element ={
          <ProtectedRoutes>
            <AdminRoutes>
              <div className="relative flex  w-sreen h-screen text-lg transition-all duration-300 ease-in-out font-semibold bg-slate-900 overflow-hidden " >
                <AdminDashPage/>
              </div>
            </AdminRoutes>
          </ProtectedRoutes>
        }/>


        {/* GROUP PAGE */}
        <Route path="/Groups" element={
          
          <ProtectedRoutes>
            <div className="relative flex  w-sreen h-screen text-lg transition-all duration-300 ease-in-out font-semibold bg-slate-900 overflow-hidden">
                <GroupDashPage/>          
            </div>
          </ProtectedRoutes>
         
        }/>  
        


      </Routes>

      <PopMsg/>
      <Confirmation/>
      <CreateGroupFrom/>
      <JoinGroupForm/>
    </>
  )
}

export default App
