import './App.css';
import FilterBar from './Components/FilterBar';
import { Routes , Route } from 'react-router-dom'
import Table from './Components/Table';
import Profile from './Components/Profile';
import Update from './Components/Update';

function App() {
  return (

  <div className="App">
  <Routes>
      <Route exact path="/" element={
        <>
      <FilterBar />
      <Table/>
        </>
        
      
      } /> 
      <Route exact path='/profile' element={<Profile/>} />
      <Route exact path='/update' element={<Update />} />
  </Routes>

    </div>
  );
}

export default App;
