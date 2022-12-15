import { Routes,Route} from 'react-router-dom'
import Anime from './screens/Anime/Anime'
import Home from './screens/Home/Home'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/Anime'
        element={<Anime  />}
      />
    </Routes>
  )
}

export default App