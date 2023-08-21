
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import {Articles} from './Components/Articles'
import {Article} from './Components/Article'
import { CreateArticle } from './Components/CreateArticle'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route  exact path='/' element={<Articles/>}></Route>
        <Route exact  path='/article' element={<Article/>}></Route>
        <Route   path='/create' element={<CreateArticle/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
