import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter , Route, Link,Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import ReduxThunk from 'redux-thunk';
// import App from './Containers/AppContainer';
import App from './Components/UploadComponent'

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))
ReactDOM.render(<Provider store={store}>
        <div>
            <App />
        </div>
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
 