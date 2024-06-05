import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const authenticate = useSelector(state => state.auth.authenticate);
    const status = useSelector(state => state.auth.authenticate)
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const search = (e) => {
      if(e.key === 'Enter'){
        let keyword = e.target.value;
        navigate(`/?q=${keyword}`)
      }
    }

    const loginHandler = () => {
      authenticate ? dispatch({ type : 'LOGOUT_SUCCESS' }): navigate('/login');
    }

  return (
    <div>
      <div className='login-button'>
        <div onClick={() => loginHandler()}>
          <FontAwesomeIcon icon={faUser} />
          <span style={{ cursor: "pointer" }}>{
            status ? '로그아웃' : '로그인'
          }</span>
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
