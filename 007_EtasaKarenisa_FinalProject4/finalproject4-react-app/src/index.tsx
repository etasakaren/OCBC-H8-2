import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';
import PersonDelete from './components/PersonDelete';
import PersonEdit from './components/PersonEdit';
import PersonDetails from './components/PersonDetails';

ReactDOM.render(
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css"></link>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<PeopleList />}></Route>
              <Route path="PersonForm" element={<PersonForm />}></Route>
              <Route path="PersonDelete/:firstName/:lastName/:key" element={<PersonDelete />}></Route>
              <Route path="PersonEdit/:firstName/:lastName/:key" element={<PersonEdit />}></Route>
              <Route path="PersonDetails/:firstName/:lastName/:key" element={<PersonDetails />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
