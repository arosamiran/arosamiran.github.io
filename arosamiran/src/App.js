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
            <p className="text">
              Hey there! What's up? I'm Angelo Rosamiran, fan of web development and everything open source. I'm also interested in designing
              and photography.
            </p>

            <p className="text">
              Through self-studying, I've learned how to program with JavaScript. Currently, I'm updating what I know about the language
            (It's a never-ending process) and VR experiences for the web (with A-Frame!).
            </p>
            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Farosamiran.me&width=25px&layout=button_count&action=like&show_faces=true&share=false&height=21&appId"
                width="75px" height="21" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
          </div>

         <div className="jay">
         <h1><a href="#">Jay</a></h1>
         <hr/>
                <p className="text">A chatbot for notifying you what needs to be done. It can also tell you weathe forecasts on a place you specified.
                </p>
                <p className="text">It is currenty on beta stage that gets better the more you talk to it. Written in Javascript and uses the React.js library. It is open for contribution. <em>You may follow this <a classNameh="text" target="_blank" href="#">link</a> for the repo.</em></p>
         </div>

         <div className="url">
          <h1><a href="#">URL-Shortening App</a></h1>
          <hr/>
            <p className="text">An app that shortens (or expands) URLs.</p>
         </div>

         <div className="contact">
         <h1>Contact</h1>
          <p className="text">You may contact me by following the linkd belor. Or you may</p>
          <p className="text">I'm open for freelance ptojects!</p>
         </div>

      <div className="links">
        <h1>Links</h1>
        <p className="text">You may fin me by following any of these links:</p>
          <div>
          <a className="text" target="_blank" href="www.facebook.com/arosamiran">Facebook</a>
          </div>
          <div>
          <a className="text" target="_blank" href="www.twitter.com/arosamiran">Twitter</a>
          </div>
          <div>
          <a className="text" target="_blank" href="http://instagram.com/arosamiran">Instagram</a>
          </div>
          <div>
          <a className="text" target="_blank" href="https://linkedin.com/in/arosamiran">Linkedin</a>
          </div>
          <div>
          <a className="text" target="_blank" href="https://plus.google.com/+AngeloRosamiran">Google+</a>
          </div>
          <div>
          <a className="text" target="_blank" href="http://arosamiran.tumblr.com/">Tumblr</a>
          </div>
          <div>
          <a className="text" target="_blank" href="http://doodlrph.wordpress.com/">Wordpress</a>
          </div>
          <div>
          <a className="text" target="_blank" href="http://flickr.com/arosamiran" class="link-8 text">Flickr</a>
          </div>
          <div>
          <a className="text" target="_blank" href="http://github.com/arosamiran" class="link-9 text">Github</a>
          </div>
          <div>
          <a className="text" target="_blank" href="http://youtube.com/arosamiran" class="link-10 text">Youtube</a>
          </div>
          </div>
        </div>
    );
  }
}
export default App;