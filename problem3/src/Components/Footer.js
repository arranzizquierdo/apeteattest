import React, { Component } from 'react';
import TextFooter from './TextFooter';
import './Footer.scss';

class Footer extends Component {
    render() { 
        return (
            <footer className="footer"> 
            <TextFooter text="TextFooter1" />
            <TextFooter text="TextFooter2" />
            <TextFooter text="TextFooter3" />
            <TextFooter text="TextFooter4" />
            <TextFooter text="TextFooter5" />
            <TextFooter text="TextFooter6" />
            <TextFooter text="TextFooter7" />
            <TextFooter text="TextFooter8" />
            <TextFooter text="TextFooter9" />
            </footer>
         );
    }
}
 
export default Footer;