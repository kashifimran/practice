import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';

import home from './pages/home.js';
import test from './pages/test.js';

export default function() {
  addPage('', home);
  addPage('test', test);
  addPaths('site', []);
}
