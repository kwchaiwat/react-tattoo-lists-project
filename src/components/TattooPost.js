import './TattooPost.css';

function TattooPost(props){
  const { tattoo, onTattooClick } = props;
  return (
    <div className="tattoo-post">
        <div className="tattoo-post-bg" onClick={onTattooClick} />
        <div className="tattoo-post-content">
          <img src={tattoo.fullUrl} alt=""/>
          <h4>{tattoo.title}</h4>
        </div>
    </div>
  )
}

export default TattooPost;