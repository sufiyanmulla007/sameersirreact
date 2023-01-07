// import logo from './logo.svg';
// import './App.css';
import './components/StyleTodo.css';
import ForwordRaf from './components/ForwordRaf';
import HandelingArray from './components/HandelingArray';
import MapFun from './components/MapFun';
import ParentsC from './components/ParentsC';
import RefHook from './components/RefHook';
// import Registration from './components/Registration';
import UseMemo from './components/UseMemo';
// import './components/Registration.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Link, Route, Routes,} from 'react-router-dom';
import Nav  from './components/Nav';
import ErrorPage from './components/ErrorPage';
import Users from './components/Users';
import ApiCalled from './components/ApiCalled';
import Previous from './components/Previous';
import SearchParams from './components/SearchParams';
import Newpage from './components/Newpage';
import Company from './components/Company';
import TodoList from './components/TodoList';
import Task from './Interview/Task';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav/>
       {/* <Task/>
       <RefHook/> */}
      <Routes>
      <Route path='/'element={<HandelingArray/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      <Route path='/users' element={<Users/>}></Route>
      <Route path='/Api' element={<ApiCalled/>}></Route>
      <Route path='/Previous' element={<Previous/>}></Route>
      <Route path='/SearchParams'element={<SearchParams/>}></Route>
      <Route path='/newpage'element={<Newpage/>}></Route>
      <Route path='/Company'element={<Company/>}></Route>
      <Route path='/TodoList' element={<TodoList/>}></Route>
      </Routes>
   </header>
    </div>
  );
}

export default App;
