import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from '../HornedBeast/HornedBeast.jsx';
import imageData from '../../data/data.json';



function Gallery() {
  function chunkArray(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  }

  const chunkedData = chunkArray(imageData, 4);

  return (
    <Row xs={1} md={4} className="g-4">
      {chunkedData.slice(0, 5).map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((item) => (
            <Col key={item._id}>
              <HornedBeast
                imageUrl={item.image_url}
                title={item.title}
                description={item.description}
                keyword={item.keyword}
                horns={item.horns}
              />
            </Col>
          ))}
        </React.Fragment>
      ))}
    </Row>
  );
}

export default Gallery;