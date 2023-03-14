
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import Tablenew from './Tablenew';

const newcontext = createContext();


function App() {
  const [array,setarray] = useState([]);
  return (
    <div className="App">
       
       
       <newcontext.Provider value={{array,setarray}}>
       <BrowserRouter>

         <Routes>
           <Route path='/' element={<LoginPage/>}/>
           <Route path='/Tablenew' element={<Tablenew/>}/>
           

        </Routes>
       </BrowserRouter>
       </newcontext.Provider>
      
    </div>
  );
}

export default App;
export {newcontext}
