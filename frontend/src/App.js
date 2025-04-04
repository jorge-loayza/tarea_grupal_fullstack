import React, { useEffect } from 'react';
import './estilos/App.css';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/producto')
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <span>test</span>
    </>
  );
};
export default App;
