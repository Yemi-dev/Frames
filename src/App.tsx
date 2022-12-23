import NotFound from 'pages/404';
import About from 'pages/About';
import Landing from 'pages/Landing';
import { Route, Routes } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
