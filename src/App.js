import React from 'react';
import Video from './component/Video/video.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Video} path="/" exact />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
