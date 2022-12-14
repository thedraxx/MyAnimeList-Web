import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './screens/Home/Home'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/about'
        element={<div>About</div>}
      />
    
    </Routes>
  )
}

export default App