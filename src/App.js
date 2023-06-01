import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Contact from './components/Contact';
import News from './components/News';
import About from './components/About';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createTheme } from '@mui/material';
import ColorModeContext from './context/ColorModeContext';


function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <div className='App'>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Navigation />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/about' element={<About />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}
export default App;
