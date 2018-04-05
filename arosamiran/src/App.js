import React, { Component } from 'react';
import logo from './doodlr.jpg';
import  './materialize-v1.0.0-beta/css/materialize.css';
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
            <p className="text">
              Hey there! What's up? I'm Angelo Rosamiran, fan of web development and everything open source. I'm also interested in designing
              and photography.
            </p>

            <p className="text">
              Through self-studying, I've learned how to program with JavaScript. Currently, I'm updating what I know about the language
            (It's a never-ending process) and VR experiences for the web (with A-Frame!).
            </p>
          </div>

         <div className="jay " >
         <h1 className="card-panel indigo light-panel-2"><a href="#" >Jay</a></h1>
                <p className="text">A chatbot for notifying you what needs to be done. It can also tell you weathe forecasts on a place you specified.
                </p>
                <p className="text">It is currenty on beta stage that gets better the more you talk to it. Written in Javascript and uses the React.js library. It is open for contribution. <em>You may follow this <a classNameh="text" target="_blank" href="#">link</a> for the repo.</em></p>
         </div>

         <div className="url">
          <h1 className="card-panel indigo light-panel-2"><a href="#">URL-Shortening App</a></h1>
            <p className="text">An app that shortens (or expands) URLs.</p>
         </div>

         <div className="aframe">
          <h1 className="card-panel indigo light-panel-2">A-Frame</h1>
        </div>

         <div className="contact">
         <h1 className="card-panel indigo light-panel-2">Contact</h1>
          <p className="text">You may contact me by following the links below. Or you may</p>
          <p className="text">I'm open for freelance ptojects!</p>
         </div>

      <div className="links card-panel blue-grey darken-4">
        <h1>Links</h1>
        <p className="text">You may find me by following any of these links:</p>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="http://facebook.com/arosamiran">Facebook</a>
          </div>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="http://twitter.com/arosamiran">Twitter</a>
          </div>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="http://instagram.com/arosamiran">Instagram</a>
          </div>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="https://linkedin.com/in/arosamiran">Linkedin</a>
          </div>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="https://plus.google.com/+AngeloRosamiran">Google+</a>
          </div>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="http://arosamiran.tumblr.com/">Tumblr</a>
          </div>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="http://doodlrph.wordpress.com/">Wordpress</a>
          </div>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="http://flickr.com/arosamiran">Flickr</a>
          </div>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="http://github.com/arosamiran">Github</a>
          </div>
          <div>
          <a className="text card-panel blue-grey darken-3" target="_blank" href="http://youtube.com/arosamiran" >Youtube</a>
          </div>
          </div>
        </div>
    );
  }
}
export default App;