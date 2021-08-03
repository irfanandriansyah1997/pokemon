import ReactDOM from 'react-dom';

import '@/library/styles/css/style.css';
import App from '@/apps';
import { reportWebVitals } from '@/helper';

ReactDOM.render(<App />, document.getElementById(`root`));

reportWebVitals();
