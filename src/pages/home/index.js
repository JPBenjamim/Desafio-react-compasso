import {useState} from 'react';

import ListUsers from '../../components/ListUsers';
import api from '../../services/api';

import github from '../../assets/img/github.png';
import './styles.scss';

function Home() {
  const [user, setUser] = useState();
  const [name, setName] = useState('');


  async function getUser(e){
    e.preventDefault();

    const {data: {login, avatar_url}} = await api.get(`users/${name}`);

    setUser({
      login,
      avatar_url
    });
  }

  return (
    <div className="App">
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="header">
              <h1 className="header__title">Github Search</h1>
              <img src={github} className="header__image" alt="Foto" />
              <form className="header__search" onSubmit={e => getUser(e)}>
                <input
                  type="text" 
                  className="header__search--inputSearch" 
                  placeholder="Ex: User-Benjamim"
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
                <button 
                  type="submit"
                  className="header__search--button"
                >
                   <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        {user && (
          <div className="row justify-content-center">
            <div className="col-5 mt-4">
              <ListUsers username={user.login} image={user.avatar_url } />
            </div>
          </div>
        )}
      </main>
      <footer className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <p className="footer__text">Criado por Jonas Benjamim.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
