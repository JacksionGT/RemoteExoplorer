import React from 'react';
import ReactDOM from 'react-dom';
import 'mdui/dist/css/mdui.min.css'
import './styles/index.css';
import mdui from 'mdui';
import App from './App';
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = Component => {
    ReactDOM.render(
        // Wrap App inside AppContainer
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);
mdui.updateSliders();

if (module.hot) {
    module.hot.accept('./App', () => {
        render(App);
        mdui.updateSliders();
    });
}