import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/rooms/:roomId"}>
            <Layout>
              <ChatRoom />
            </Layout>
          </Route>
          <Route exact path="/">
            <Layout isChatRoom={false}>
              <div>
                Select a chat room to view chats.
              </div>
            </Layout>
          </Route>
          <Route path="*">
            <div>Page Not Found...</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
