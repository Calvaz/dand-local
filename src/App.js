import React from 'react';
import './App.css';
import Layout from './component/layout';
import Character from './pages/characters';

export default function App() {

  let chars = [{name: 'Ivan'}, {name: 'Mario'}]

  return (  
      <Layout>
        <Character characters={chars} ></Character>
      </Layout>
  );
}

