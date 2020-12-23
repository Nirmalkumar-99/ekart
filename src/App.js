import { useState } from "react";


function App() {
  
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
    </div>
  );
    }



export default App;
