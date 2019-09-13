import React from 'react';
import Header from './component/header';
import HeadLine from './component/headline';
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName:'Bloggs',
  email:'joeblogger@gmail.com',
  age: 24,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
         <HeadLine header="Posts" desc="Click the button to render post" tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
