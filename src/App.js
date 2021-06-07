import { React, useState } from 'react';
import './App.css';
import Intro from './Components/Intro';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/DarkMode/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/DarkMode/Theme"
import { useDarkMode } from "./Components/DarkMode/useDarkMode"
import Toggle from "./Components/DarkMode/Toggler"
import { Provider } from 'react-redux'
import { store } from '../src/app/store'
import SideNavBar from './Components/sideMenu/SideNavBar';
import Menu from './Components/sideMenu/Menu';
import ScrollDown from './Components/ScrollDown';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills.js';
import Zoom from 'react-reveal/Zoom';
import Projects from './Components/Projects';




function App() {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [open, setOpen] = useState(false);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <div className="App">
            {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
            <Intro theme={theme} toggleTheme={themeToggler} id="Home" />
            <AboutMe id="About">
            </AboutMe>
            <Zoom ssrFadeout>
              <Skills theme={theme} id="Skills" />
            </Zoom>
            <Projects id="Projects" />
            <div>
              <SideNavBar open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>

          </div>
        </>
      </ThemeProvider>
    </Provider >
  );
}

export default App;
