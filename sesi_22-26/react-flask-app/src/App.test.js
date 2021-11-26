import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Provider } from 'react-redux'
import store from './store'

test('renders learn react link', () => {
  render(
    <React.StrictMode >
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="contact" element={<Contact />}>
              <Route path=":name" element={<Contact />}></Route>
            </Route>
            <Route path="about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  );
  const linkElement = screen.getByText(/Add by 1/i);
  expect(linkElement).toBeInTheDocument();
});