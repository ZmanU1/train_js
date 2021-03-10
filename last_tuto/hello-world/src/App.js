import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind/>
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message /> */}
      {/* <Greet name="toto" heroname="batman">
        <p>this is children props</p>
      </Greet>
      <Greet name="titit" heroname="superman">
        <button>action</button>
      </Greet>
      <Welcome name="toto" heroname="batman" />
      <Welcome name="titit" heroname="superman" />
      <Hello/> */}
       {/* <Welcome name="titit" heroname="superman" /> */}
    </div>
  );
}

export default App;
