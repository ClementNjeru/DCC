import {useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {
        data.map((data) => (
        <div key={data.id}>
          <ul key="{name}">{data.name}</ul>
          <ul key="{age}">{data.age}</ul>
          <ul key="{email}">{data.email}</ul>
          <h1> {}</h1>
        </div>
        ))
       
      }
      
      
      
    </div>
  );
}

export default MyComponent;