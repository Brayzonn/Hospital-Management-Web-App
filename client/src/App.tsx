import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="*" element={<Landing />}/>
          <Route path='/user/dashboard' element={<Landing />}/>
          <Route path = '/signin' element = {< Signin />} />
          <Route path = '/signup' element = {< Signup />} />
      </Routes>
    </Router>
  )
}

export default App
