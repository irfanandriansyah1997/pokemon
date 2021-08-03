import ReactDOM from 'react-dom';

import '@/library/styles/css/style.css';
import { reportWebVitals } from '@/helper';

import App from './app';

ReactDOM.render(<App />, document.getElementById(`root`));

reportWebVitals();
