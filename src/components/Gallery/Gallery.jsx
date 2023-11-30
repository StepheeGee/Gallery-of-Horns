import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from '../HornedBeast/HornedBeast.jsx';
import SelectedBeast from '../SelectedBeast/SelectedBeast.jsx';
import imageData from '../../data/data.json';


function Gallery() {
  const [selectedBeast, setSelectedBeast] = React.useState(null);

  function chunkArray(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  }

  const chunkedData = chunkArray(imageData, 3);

  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {chunkedData.slice(0, 7).map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((item) => (
              <Col key={item._id}>
                <HornedBeast
                  imageUrl={item.image_url}
                  title={item.title}
                  description={item.description}
                  keyword={item.keyword}
                  horns={item.horns}
                  setSelectedBeast={setSelectedBeast}
                />
              </Col>
            ))}
          </React.Fragment>
        ))}
      </Row>
      <SelectedBeast beast={selectedBeast} setSelectedBeast={setSelectedBeast} />
    </div>
  );
}

export default Gallery;