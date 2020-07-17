import React, { useState } from 'react';
import './App.css';
import { HomepageComponent } from './components/HomepageComponent/HomepageComponent';
import { TitleComponent } from './components/TitleComponent/TitleComponent';
import { FancyBorder } from './components/FancyBorderComponent/FancyBorderComponent';
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { ClickerComponent } from './components/ClickerComponent/ClickerComponent';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { User } from './models/User';
import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';
import { AllUsersComponent } from './components/AllUserComponent/AllUsersComponent';
import { RegisterComponent } from './components/RegisterComponent/RegisterComponent';
import { EditUserComponent } from './components/EditUserComponent/EditUserComponent';
import { ToastContainer } from 'react-toastify';
import { LogoutComponent } from './components/LogoutComponent/LogoutComponent';
import { SubmitReimbursementComponent } from './components/ReimbursementComponents/SubmitReimbursementComponent';
import { UpdateReimbursementComponent } from './components/ReimbursementComponents/UpdateReimbursementComponent';
import { AllReimbursementComponent } from './components/ReimbursementComponents/AllReimbursementComponent';


function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)
  return (
    <div className="App">
      <Router>
       
        <Redirect to='/login' />
        
        <NavBarComponent user={currentUser}/>
        
        <Route path='/home'>
          <HomepageComponent/>
        </Route>

      
        <Route path='/clicker'>
          
          <FancyBorder>
            <ClickerComponent user={currentUser}/>
          </FancyBorder>
        </Route>
        <Route path='/title' render={(props) => (
         
          <FancyBorder  {...props} >
            
            <TitleComponent title={'Now We are Cooking with Props'} size='large' />
            
          </FancyBorder>)} />
        
        <Route path='/login' render={(props) => (<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
        <Route path='/register' component={RegisterComponent} />
        <Route path='/profile/:userId' component={ProfileComponent} />
        <Route path='/edit/:userId' component={EditUserComponent}/>
        <Route path='/users' component={AllUsersComponent} />
        <Route path='/logout' component={LogoutComponent} />
        <Route path='/reimbursement/submit' component={SubmitReimbursementComponent} />
        <Route path='/reimbursement/update' component={UpdateReimbursementComponent} />
        <Route path='/reimbursements' component={AllReimbursementComponent} />
        <ToastContainer position='bottom-right'/>
      </Router>

    </div>
  );
}

export default App;