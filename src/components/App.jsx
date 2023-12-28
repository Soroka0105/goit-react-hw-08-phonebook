
import { ContactList } from "./ContactList";
import { Route, Routes} from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { LoginPage } from "Pages/LoginPage";
import { RegistrationPage } from "Pages/RegistrationPage";
import { Layout } from "Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { useEffect } from "react";
import { refreshUser } from "api/auth";
import { selectIsRefreshing } from "../redux/selectors";





export const App = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)
  useEffect(() => {
dispatch(refreshUser())
  }, [dispatch])
  
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
      {isRefreshing && <p>Refreshing</p> }
      <Routes>
            <Route path="/" element={<Layout />} />

          <Route path='/login' element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage/>} />} />
          <Route path='/registration' element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage/>} />} />
          <Route path='/contacts' element={<ContactList/> } />
        </Routes>
 
      
    </div>
  );

}