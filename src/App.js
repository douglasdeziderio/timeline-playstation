import LinhadoTempo from './components/LinhadoTempo/LinhadoTempo';
import Logo from './components/img/logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reset, setReset] = useState(false);

  const handleLogoClick = () => {
    setReset(true);
    setTimeout(() => setReset(false), 0); 
  };

  return (
    <div className="App">
      <img src={Logo} id="logo" alt="Logo" onClick={handleLogoClick} />

      <iframe
        id="ytplayer"
        type="text/html"
        width="1980"
        height="1080"
        src="https://www.youtube.com/embed/r3DlBh9O4gM?autoplay=1&mute=1&controls=0&fs=0&loop=0&modestbranding=1&color=white&iv_load_policy=3"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        style={{ pointerEvents: 'none' }}
      ></iframe>
      
      <LinhadoTempo reset={reset} />
    </div>
  );
}

export default App;
