import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';

import App from './app';

const rootElement = document.getElementById('root');
if(rootElement){
    const root = createRoot(rootElement);
    root.render(<App/>);
}
