import React from 'react';
//components
import Form from './components/Form.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHumidity
} from '@fortawesome/pro-duotone-svg-icons';
import { faMapMarkerCheck } from '@fortawesome/pro-solid-svg-icons';
import { faCircle, faTimes } from '@fortawesome/pro-regular-svg-icons';
import './App.css';
library.add(
  faMapMarkerCheck
);
export default function App() {
  return (
    <div className='App'>
      <Form />
    </div>
  );
}
