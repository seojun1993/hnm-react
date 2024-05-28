import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProudctAll from './page/ProudctAll';
import PrivateRoute from './route/PrivateRoute';
import Login from './page/Login';
import Navbar from './component/Navbar';


function App() {
  const [authenticate, setAuthenticate] = useState(false);

  // 1. 전체상품페이지, 로그인, 상품상세페이지
  // 1-1 내비게이션 바
  // 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
  // 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
  // 4. 상품디테일을 눌렀으나, 로그인이 안 되어 있을 경우네는 로그인 페이지가 먼저 나온다.
  // 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
  // 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
  // 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
  // 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
  // 9. 상품을 검색 할 수 있다.

  return (
    <div className="App">
      <Navbar authenticate={ authenticate } setAuthenticate={ setAuthenticate }/>
      <Routes>
        <Route path='/' element={ <ProudctAll/> }/>
        <Route path='/login' element={ <Login setAuthenticate={setAuthenticate}/> }/>
        <Route path='/product/:id' element={ <PrivateRoute authenticate={ authenticate }/>}/>
      </Routes>

    </div>
  );
}

export default App;
