import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Profile from './pages/profile';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}