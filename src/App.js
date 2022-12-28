import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowBookList from './pages/ShowBookList'
import CreateBook from './pages/CreateBook'
import UpdateBookIfo from './pages/UpdateBookIfo'
import ShowBooksDetails from './pages/ShowBooksDetails'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<ShowBookList/>} />
          <Route path="/create" element={<CreateBook/>}/>
          <Route path='/edit/:id' element={<UpdateBookIfo/>} />
          <Route path='/show/:id' element={<ShowBooksDetails/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
