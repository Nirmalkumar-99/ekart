import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
class First extends React.Component
{

    render()
    {
      const prop="i changed this...";
        return(
            <div>
               who changed this document..
              <Header val={prop} />
              <Alrt />
              
            </div>

        );
    }
}
class Header extends React.Component
{
    render()
    {
        return(
            <div>
              <h3>hii all</h3>
             
               something changed in this document..
               <h3>{this.props.val}</h3>
            </div>

        );
    }
}
class Alrt extends React.Component
{
  msg(e)
  {
    e.preventDefault();
    const click=e.target.elements.click.value;
    if(click)
    {
      alert(click);
    }
  }
  render()
  {
    return(
      <div>
        <form onSubmit={this.msg}>
          <input type="text" name="click"></input>
          <button>alert msg</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<First />,document.getElementById('ro'));

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
