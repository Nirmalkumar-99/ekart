import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
class Header extends React.Component
{
    render()
    {
        return(
            <div>
               something changed in this document..
            </div>

        );
    }
}
const con=(
    <div>
      <Header />
    </div>
);
ReactDOM.render(con,document.getElementById('ro'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
