import { BrowserRouter, Route, Routes } from 'react-router';

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
