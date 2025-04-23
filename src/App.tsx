import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<Layout />}>

          <Route 
            element={<Home />}
            index 
          />

          <Route
            element={<Login />}
            path='/login'
          />

          <Route
            element={<Register />}
            path='/register'
          />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
