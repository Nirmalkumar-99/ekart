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
class Category extends Place
{
  constructor(plc,ctgy)
  {
    super(plc);
    this.ctgy=ctgy;
  }
  display()
  {
    let dis=super.getPlace();
    dis+=this.ctgy;
    return dis;
  }

}

function App() {
  const pp=new Place("kashmir");
  const ctg=new Category("Kashmir ","a tourist palce");
 

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
    
     {ctg.display()}
     
    </div>
  );
    }



export default App;
