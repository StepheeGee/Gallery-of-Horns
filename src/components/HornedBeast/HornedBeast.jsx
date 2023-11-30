import React from 'react';
import Button from 'react-bootstrap/Button';

function HornedBeast({ imageUrl, title, description, keyword, horns, setSelectedBeast }) {
  const [favorites, setFavorites] = React.useState(0);

  const incrementFavorites = () => {
    setFavorites((prevFavorites) => prevFavorites + 1);
  };

  const handleClick = () => {
    setSelectedBeast({ imageUrl, title, description, keyword, horns });
  };

  return (
    <div>
      <div className="image-container">
        <div className="image-card">
          <img src={imageUrl} alt={title} onClick={handleClick} />
          <h3>{title}</h3>
          <p>{description}</p>
          <div className='fave'>
            <Button role="img" aria-label="Heart" variant="warning" className="Button" onClick={incrementFavorites}>
              ❤️ {favorites}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HornedBeast;
