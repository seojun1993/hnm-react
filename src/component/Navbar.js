import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ( { authenticate, setAuthenticate } ) => {
    const [status, setStatus] = useState('로그인');
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const navigate = useNavigate();

    const search = (e) => {
      if(e.key === 'Enter'){
        let keyword = e.target.value;
        navigate(`/?q=${keyword}`)
      }
    }

    useEffect(() => {
      if(authenticate){
        setStatus('로그아웃')
      }else{
        setStatus('로그인')
        navigate('/login')
      }
    }, [authenticate])

  return (
    <div>
      <div className='login-button'>
        <div onClick={() => setAuthenticate(!authenticate)}>
          <FontAwesomeIcon icon={faUser} />
          <span style={{ cursor: "pointer" }}>{status}</span>
        </div>

      </div>
      <div className='nav-section' onClick={() => {
        navigate('/');
      }}>
        <img width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWX-khOf9-4QEQSMTZQ_Nip-as5dQom0MnBVgpvDK-QQ&s'/>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
        {menuList.map((menu, index) => {
                return <li key={index}>{menu}</li>
            })}
        </ul>
        <div className='search-area'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' onKeyDown={(e) => { search(e) }}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
