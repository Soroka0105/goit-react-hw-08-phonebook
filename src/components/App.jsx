
import { ContactList } from "./ContactList";
import { Route, Routes} from 'react-router-dom'
import { persistor, store } from ".././redux/store";
import { Provider } from 'react-redux'
import { LoginPage } from "Pages/LoginPage";
import { RegistrationPage } from "Pages/RegistrationPage";
import { PersistGate } from 'redux-persist/integration/react'
import { Layout } from "Layout";


export const App = () => {
 
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/contacts' element={<ContactList/> } />
        </Routes>
  </Provider>
   
      
    </div>
  );

}