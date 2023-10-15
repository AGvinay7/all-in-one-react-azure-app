import './App.css';
import { MsalProvider } from '@azure/msal-react';
import Dashboard from './components/Dashboard/Dashboard';
import React from 'react';
import { MyContext } from './MyContext';

function App(props: any) {
  const { msalInstance } = props;


  const contextSample = {
    name: 'UserName',
    value: 'Role',
  }

  return (
    <MsalProvider instance={msalInstance}>
      <MyContext.Provider value={contextSample}>
        <Dashboard />
      </MyContext.Provider>
    </MsalProvider>
  );
}

export default App;
