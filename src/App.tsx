import React from 'react';

import './App.css';
import { Menu } from 'antd';
import Content from './components/Content';
function App() {
  return (
    <div className="App" style={{display:'flex', flexDirection:'row'}}>
      <Menu style={{width:'25vw'}}>
        <Menu.Item key='1'>
          Home
        </Menu.Item>
        <Menu.Item key='2'>
          Dashboard
        </Menu.Item>
        <Menu.Item key='3'>
          Users List
        </Menu.Item>
        <Menu.Item key='4'>
          Profile
        </Menu.Item>
        <Menu.Item key='5'>
          Sign Out
        </Menu.Item>
      </Menu>
      <Content/>
    </div>
  );
}

export default App;
