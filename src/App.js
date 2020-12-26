import { useState } from "react";

class Place
{
  constructor(plc)
  {
    this.plc=plc;
  }
  getPlace()
  {
    return ("I like "+this.plc);
  }
}

function App() {
  const pp=new Place("kashmir");
 

  var detail=
  {
    name:"welcome"
  };

    const [Toggle, state] = useState(true);

    const toggleHandler = () => {
      const temp = Toggle;
      state(!temp);
    }
    let displayContent = detail.name+" Hello.. this is react!!";
    if (Toggle) {
      displayContent = "bye..";
    }
 
    return (

    <div>
      <button onClick={toggleHandler}>clickme</button>
      <div className="content">
        {displayContent}
      </div>
     {pp.getPlace()}
    </div>
  );
    }



export default App;
