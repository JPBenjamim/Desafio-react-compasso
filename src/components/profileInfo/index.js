import './styles.scss';

function ProfileInfo(props) {
  const { 
    avatar_url,
    name,
    public_repos,
    followers,
    following,
    bio
  } = props;

  return (
    <div className="profileInfo">
      <div className="profileInfo__photo">
        <img src={avatar_url || ""} alt="Foto do perfil" />
      </div>
      <h3>{name}</h3>
      <p>{bio}</p>
      <div className="profileInfo__social">
        <div>
          <strong>{public_repos}</strong>
          <span>Repositorios</span>
        </div>
        <div>
          <strong>{followers}</strong>
          <span>Seguidores</span>
        </div>
        <div>
          <strong>{following}</strong>
          <span>Seguindo</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
