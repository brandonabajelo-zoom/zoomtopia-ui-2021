import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import zoomLogo from './Images/zoomBlue.png';
import { Websdk, Participants, Meetings } from './components';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <img src={zoomLogo} alt="" className="zoom-img" />
      </Header>
      <Content>
        <Switch>
          <Route path="/participants/:meetingId">
            <Participants />
          </Route>
          <Route path="/websdk">
            <Websdk />
          </Route>
          <Route path="/">
            <Meetings />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
