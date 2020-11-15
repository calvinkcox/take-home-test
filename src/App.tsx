import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/rooms/:roomId"}>
            <Layout>
              <div>chat messages...</div>
            </Layout>
          </Route>
          <Route exact path="/">
            <Layout>
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
