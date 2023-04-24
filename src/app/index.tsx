import { GlobalStyle } from 'src/styles/global-styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Splash } from './pages/Splash/Loadable';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="*" element={<Splash />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}