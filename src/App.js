
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main'
import Footer from './components/Footer'
import Missing from './components/Missing';
import Postpage from './components/Postpage';
import Newpost from './components/Newpost';
import Editpost from './components/Editpost';
import { DataProvider } from './Datacontent/DataContext';


function App() {
  
  return (
    <>
    <DataProvider>
      <div className='Headdiv'>
        <h1 className="Heading">Social </h1>
        <h1 className="Heading2"> Media </h1>
      </div>
      <div className='NavBox'>
        <Nav
          
        />
      </div>
      <div className='Contents'>

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path='/Posts'>
            <Route index element={<Newpost />} />
            <Route path=":id" element={<Postpage />} />
          </Route>
          <Route path="/edit/:id"
            element={<Editpost />}
          ></Route>
          <Route path='/footer' element={<Footer />}></Route>
          <Route path='*' element={<Missing />}></Route>
        </Routes>


      </div>

      </DataProvider>
    </>
  );
}

export default App;
