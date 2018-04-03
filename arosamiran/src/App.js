import React, { Component } from 'react';
import logo from './doodlr.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div>
            <img src={logo} className="logo" alt="Doodlr logo" />            
          </div>
        </div>
          <div className="intro">
            <p>
              Hey there! What's up? I'm Angelo Rosamiran, fan of web development and everything open source. I'm also interested in designing
              and photography.
            </p>

            <p>
              Through self-studying, I've learned how to program with JavaScript. Currently, I'm updating what I know about the language
            (It's a never-ending process) and VR experiences for the web (with A-Frame!).
            </p>
            {/* <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Farosamiran.me&width=25px&layout=button_count&action=like&show_faces=true&share=false&height=21&appId"
                width="75px" height="21" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowTransparency="true"></iframe> */}
          </div>

      <div className="links">
        <h1>Links</h1>
          <div>
          <a target="_blank" href="www.facebook.com/arosamiran">Facebook</a>
          </div>
          <div>
          <a target="_blank" href="www.twitter.com/arosamiran">Twitter</a>
          </div>
          <div>
          <a target="_blank" href="http://instagram.com/arosamiran">Instagram</a>
          </div>
          <div>
          <a target="_blank" href="https://linkedin.com/in/arosamiran">Linkedin</a>
          </div>
          <div>
          <a target="_blank" href="https://plus.google.com/+AngeloRosamiran">Google+</a>
          </div>
          </div>
        </div>
    );
  }
}
export default App;