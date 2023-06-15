// import './styles/App.css';
// import "bootstrap/dist/css/bootstrap.min.css"


// function App() {
//   return (
//  <h1>bye</h1>
//   );
// }

// export default App;


import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import './styles/App.scss';
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;