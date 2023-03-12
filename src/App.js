import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/contact'
import List from './pages/List';
import Hotel from './pages/Hotel';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/List' element={<List/>}/>
  <Route path='/Hotel' element={<Hotel/>}/>
  <Route path='/contact' element={<Contact/>}>
  
  </Route>
</Routes>
</BrowserRouter>
  </>
  )
}

export default App;
