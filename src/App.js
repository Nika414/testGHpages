import logo from './logo.svg';
import './App.css';
import { isMobile, isDesktop } from 'react-device-detect';

function App() {
  return (
    <div className="App">
      {isMobile ? (
        <p>Устройство является мобильным</p>
      ) : (
        <p>Устройство является десктопом</p>
      )}
      {isDesktop ? <p>Режим десктопа</p> : <p>Режим мобильного устройства</p>}
    </div>
  );
}

export default App;
