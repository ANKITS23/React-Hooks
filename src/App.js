import "./App.css";
import State from "./UseState/State";
import Effect from "./UseEffect/Effect";
import Context from "./UseContext/Context";
import Ref from "./UseRef/Ref";
import Reducer from "./UseReducer/Reducer";
import CallBack from "./UseCallback/Callback";
import Memo from "./UseMemo/Memo";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";

function App() {
  return (
    <div className="App bg-gray-600">
      {/* BASIC HOOKS */}


      {/* <State/> */}
      {/* <Effect/> */}
      <Context/>

     {/* Additional Hooks */}

      {/* <Ref/> */}
      {/* <Reducer/> */}
      {/* <CallBack/> */}
      {/* <Memo/> */}
      {/* <ImperativeHandle/> */}
    </div>
  );
}

export default App;
