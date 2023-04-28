import { GlobalStyle } from 'src/styles/global-styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SplashPage as Splash } from './pages/Splash';
import { NavBar } from './components/NavBar';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="*" element={<Splash />} />
      </Routes>
      <NavBar />
      <GlobalStyle />
    </BrowserRouter>
  )
}