import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
    render() { 
        const { images } = this.props;
        return (
            <main className="main"> 
            <ul className="list-images">
                {images.map ((image, i) => {
                    return <li key={i} className="image">
                        <img src={image} alt="image"/>
                    </li>
                })}
            </ul>
            </main>
         );
    }
}
 
export default Main;