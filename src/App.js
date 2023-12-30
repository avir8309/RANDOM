import logo from './logo.svg';
import './App.css';
import ChatPage from './components/ChatPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
const base_url="https://picsum.photos/v2/list?page=1&limit=10";
function App() {
  const [Post,setPost]=useState(null);
  console.log(Post);
  useEffect(()=>{
    axios.get(base_url).then((response) => {
      setPost(response.data);
    });
  },[])
  return (
    <div className="App">
      {Post && <ChatPage Post={Post}/>}
    </div>
  );
}

export default App;
