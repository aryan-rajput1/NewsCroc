import React, { Component } from 'react';
import logo from './logo.png';
import music from './smoke-143172.mp3';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMusicPlaying: true,
    };
    this.audioRef = React.createRef();
  }

  handleMusicToggle = () => {
    const audio = this.audioRef.current;
    if (audio.paused) {
      audio.play();
      this.setState({ isMusicPlaying: true });
    } else {
      audio.pause();
      this.setState({ isMusicPlaying: false });
    }
  };

  handleCategoryClick = () => {
    document.title = `NewsCroc Top Punches from ${this.props.category}`;
  };

  render() {
    const { isMusicPlaying } = this.state;
    return (
      <div>
        <audio src={music} autoPlay loop ref={this.audioRef} />
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top " data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} style={{ height: '55px' }} alt="..." />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: 'larger' }}>
                <li className="nav-item">
                  <a className="nav-link mx-3 font-weight-bold" aria-current="page" href="/">
                    General
                  </a>
                </li>
                <li className="nav-item mx-3 ">
                  <a className="nav-link font-weight-bold " href="/Sports">
                    Sports
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link font-weight-bold" href="/Business">
                    Business
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link font-weight-bold" href="/Entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link font-weight-bold" href="/Health" >
                    Health
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link font-weight-bold" href="/Science">
                    Science
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link font-weight-bold" href="/Technology">
                    Technology
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <button
                    className="btn btn-primary position-absolute top-0 end-0" style={{ margin: '20px' }}
                    onClick={this.handleMusicToggle}
                  >
                    {isMusicPlaying ? 'Sound off' : 'sound on'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
