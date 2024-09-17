import React from 'react';
import AppRouter from './routes/AppRouter';
import { FormProvider } from './context/FormContext'

function App() {
  return (
    <div className="App">
      <FormProvider>
        <AppRouter />
      </FormProvider>

    </div>
  );
}

export default App;
