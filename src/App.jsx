import './App.css'
import UserAuthPage from './pages/UserAuthPage'
import Signup from './pages/Signup'

import { BrowserRouter ,Route, Routes} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAuthPage />} exact/>
        <Route path="/Signup" element={<Signup />} exact/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
