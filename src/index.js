import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
class First extends React.Component
{

    render()
    {
     
        return(
            <div>
               who changed this document..
              <Header val={this.props.val} />
              <Alrt />
              
            </div>

        );
    }
}
First.defaultProps={
  val:"this is default props"
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
class Increa extends React.Component
{
  constructor(props)
  {
    super(props);
    this.inc=this.inc.bind(this);
    this.state={
      count: 100
    };
  }
  inc()
  {
    this.setState((prevstate)=>{
      return{
        count:0
      };
    });
  }
  render()
  {
    return(
      <div>
        <h2>count:{this.state.count}</h2>
        <button onClick={this.inc} >Reset</button>
      </div>
    );
  }
}


ReactDOM.render(<First />,document.getElementById('ro'));
ReactDOM.render(<Increa />,document.getElementById('roo'));
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
