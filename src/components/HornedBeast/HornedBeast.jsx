import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function HornedBeast({imageUrl, title, description, keyword, horns}) {
  const [favorites, setFavorites] = useState(0);

  const incrementFavorites = () => {
    setFavorites((prevFavorites) => prevFavorites + 1);
  };

  return (
    <div>
      <div className="image-container">
        <div className="image-card">
          <img src={imageUrl} alt={title} onClick={incrementFavorites} />
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Keyword: {keyword}</p>
          <p>Horns: {horns}</p>
          <div className='fave'>
            <Button role="img" aria-label="Heart" variant="warning" className="Button"  onClick={incrementFavorites}>
            ❤️ {favorites} Favorites
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HornedBeast;

