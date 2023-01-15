import { useSelector, useDispatch } from 'react-redux';
import { lightMode, darkMode } from './features/modeSlice';

import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'

function App() {
  const mode = useSelector(state => state.mode)  
  const dispatch = useDispatch()

  const toggleMode = () => {
    mode.darkMode 
      ? dispatch(lightMode()) 
      : dispatch(darkMode())

  }
  return (
    <div style={{ backgroundColor: mode.color1, color: 'black' }} 
      className="App">
      <Nav />
      <button type='button' onClick={toggleMode}>{mode.darkMode ? 'Light' : 'Dark'} Mode</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
