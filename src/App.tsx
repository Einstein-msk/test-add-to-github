import React from 'react';
import './App.css';
import Post from "./Post/Post";
import User from "./User/User";

function App() {
    //add summ
    const summ = (a: number, b: number) => {
        return a + b;
    }
    return (
        <div className="App">
            <Post/>
            <User/>
            <p>{summ(2,3)}</p>


        </div>
    );
}

export default App;
