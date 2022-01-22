import logo from './logo.svg';
import './App.css';
import Cliente from './components/Cliente';

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

function App() {
  return (
    <div className="App">
      <Cliente/>
    </div>
  );
}

export default App;
