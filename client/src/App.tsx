
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

const App = () => {
  return (
    <div className="bg-gray-100">

    <BrowserRouter >
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>        
        <Route path='/profile' element={<SignOut/>}/>        
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signout' element={<Profile/>}/>        
        
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App