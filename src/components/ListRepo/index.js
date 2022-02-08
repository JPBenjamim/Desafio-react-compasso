import './styles.scss';

function ListRepo(props){
  const {
    full_name,
    language,
    stargazers_count,
    html_url
  } = props;

  return(
    <a 
      target="_blank"  
      rel="noopener noreferrer" 
      href={html_url}
      className="repository"
    >
      <div className="repository__info">
        <h3>{full_name}</h3>
        <div>
          <span>{language}</span>  
          <span>
            <i className="fas fa-star"></i>
            <strong>
              {stargazers_count}
            </strong>
          </span>
        </div>
      </div>
      <i className="fas fa-chevron-right"></i>
    </a>
  );
}

export default ListRepo;
