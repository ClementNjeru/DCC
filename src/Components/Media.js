// import {useState, useEffect } from 'react';
// import db from './db.json';

// function MyComponent() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => response.json())
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       {db.images.map((image) => (
//         <figure key={image.id}>
//           <img src={image.src} alt={image.alt} />
//           <figcaption>{image.caption}</figcaption>
//         </figure>
//       ))}
//     </div>
//   );
// }

// export default MyComponent;




import React, { useState, useEffect } from 'react';

function Media() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/images')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default Media;