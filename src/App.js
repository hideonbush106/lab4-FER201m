import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createTheme } from '@mui/material';
import ColorModeContext from './context/ColorModeContext';
import { routes } from './routes/routes';

const useColorMode = () => {
  const [mode, setMode] = React.useState('dark');

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const colorMode = React.useMemo(() => ({
    toggleColorMode,
  }), [toggleColorMode]);

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode,
      },
    }), [mode]);

  return { colorMode, theme };
}

function App() {
  const { colorMode, theme } = useColorMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} Component={route.element} />
          ))}
        </Routes>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
