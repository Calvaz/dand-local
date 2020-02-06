import React from 'react';
import './App.css';
import Layout from './component/layout';

export default function App() {

  const el = (<p>it is: {new Date().toLocaleTimeString()}</p>);

  return (  
      <Layout>
        {el}
      </Layout>
  );
}

