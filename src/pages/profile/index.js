import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import ProfileInfo from '../../components/profileInfo';
import ListRepo from '../../components/ListRepo';

import api from '../../services/api';
import './styles.scss';

function Home() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [typeRepo, setTypeRepo] = useState('repos');
  const { username } = useParams();

  useEffect(() => {
    api.get(`users/${username}`)
      .then((response) => {
        setUser(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }, [username]);

  useEffect(() => {
    api.get(`users/${username}/${typeRepo}`)
      .then((response) => {
        setRepos(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }, [username, typeRepo]);

  return (
    <>
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <ProfileInfo {...user} />
            <div className="containerList">
              <div className="containerList__nav">
                <button type="button" className={`${typeRepo === 'repos' ? 'active' : ''}`} onClick={() => setTypeRepo('repos')}>
                  Repositorios
                </button>
                <button type="button" className={`${typeRepo === 'starred' ? 'active' : ''}`} onClick={() => setTypeRepo('starred')}>
                  Starred
                </button>
              </div>

              {repos?.map(repo => (
                <ListRepo key={repo.id} {...repo} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <p className="footer__text">Criado por Jonas Benjamim.</p>
          </div>
        </div>
      </footer>
      </>
  );
}

export default Home;
