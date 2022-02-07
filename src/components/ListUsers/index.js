import {Link} from 'react-router-dom';

import './styles.scss';

function ListUsers({
  image,
  username
}){
  return(
    <Link to={`/${username || ''}`} className="list">
      <img src={image || ''} alt="Foto do perfil" className="list__image" />
      <p className="list__name">{username || ''}</p>
      <i className="fas fa-chevron-right"></i>
    </Link>
  );
}

export default ListUsers;
