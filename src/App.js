import React from 'react';
import Header from './component/header';
import HeadLine from './component/headline';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
         <HeadLine header="Posts" desc="Click the button to render post"/>
      </section>
    </div>
  );
}

export default App;
