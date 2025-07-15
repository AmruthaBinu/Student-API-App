import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={  <Login /> }/>
      <Route path="/add" element={  <AddStudent /> }/>
      <Route path="/search" element={  <SearchStudent /> }/>
      <Route path="/delete" element={  <DeleteStudent /> }/>
      <Route path="/view" element={  <ViewAll /> }/>
      

    </Routes>
   </BrowserRouter>
  );
}

export default App;
