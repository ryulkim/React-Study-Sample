import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './commons/component/main';
import List from './commons/component/list';
import Menu from './commons/component/menu';
import Footer from './commons/component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
          <Route path="/main" exact element={<Main />}></Route>
          <Route path="/list" exact element={<List />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
