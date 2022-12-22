import { Routes,Route} from 'react-router-dom'
import Anime from './screens/Anime/Anime'
import Home from './screens/Home/Home'
import './App.css'
import Search from './screens/Search/Search';
const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/Anime/:id'
        element={<Anime  />}
      />
       <Route
        path='/Search'
        element={<Search  />}
      />
    </Routes>
  )
}

export default App