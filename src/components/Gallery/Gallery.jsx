import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from '../HornedBeast/HornedBeast.jsx';
import SelectedBeast from '../SelectedBeast/SelectedBeast.jsx';
import imageData from '../../data/data.json';


function Gallery({ setSelectedBeastProp, filterValue }) {
  const [gallerySelectedBeast, setGallerySelectedBeast] = useState(null);

  function chunkArray(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  }

  const filteredData = filterValue === 'all'
    ? imageData
    : imageData.filter(beast => beast.horns === parseInt(filterValue));

  const chunkedFilteredData = chunkArray(filteredData, 4);

  const handleSelectBeast = (beast) => {
    setGallerySelectedBeast(beast);
  };

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {chunkedFilteredData.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((item) => (
              <Col key={item._id}>
                <HornedBeast
                  imageUrl={item.image_url}
                  title={item.title}
                  description={item.description}
                  keyword={item.keyword}
                  horns={item.horns}
                  setSelectedBeast={handleSelectBeast}
                />
              </Col>
            ))}
          </React.Fragment>
        ))}
      </Row>
      <SelectedBeast beast={gallerySelectedBeast} setSelectedBeast={setGallerySelectedBeast} />
    </div>
  );
}

export default Gallery;
