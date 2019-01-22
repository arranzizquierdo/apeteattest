import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.scss';

const images = [
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E",
  "http://ximg.es/200x200/001/fff.jpg&text=%3Cimage%3E"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main images={images} />
        <Footer />
      </div>
    );
  }
}

export default App;
