import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Navbar from './components/layout/Navbar';

import Navbar from "./components/layout/Navbar";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import SignUpCom from "./components/auth/SignUpCom";
import MyAccount from "./components/layout/MyAccount";
import Chongdae_auth from "./components/layout/Chongdae_auth";
import Identity_auth from "./components/auth/Identity_auth";
import Account_auth from "./components/auth/Account_auth";
import CreateFunding from "./components/layout/CreateFunding";
import FindCompanyForm from "./components/layout/FindCompanyForm";
import Payment from "./components/payment/Payment";
import RewardFunding from "./components/layout/funding/reward/RewardFunding";
import RewardFundingDetail from "./components/layout/funding/reward/RewardFundingDetail";
import CollectFunding from './components/layout/funding/collect/CollectFunding';
import CollectFundingDetail from "./components/layout/funding/collect/CollectFundingDetail";
import RecruitFormDetail from "./components/layout/company/RecruitFormDetail";
import CompanyRecruit from "./components/layout/company/CompanyRecruit";
// import test from './components/layout/test';
import FundingDetails from "./components/layout/FundingDetails";
import FundingState from "./components/layout/FundingState";
import MainPage from "./components/layout/MainPage";
import ReactDOM from "react-dom";

import firebase from "firebase"
import MainPageDefault from "./components/layout/MainPageDefault";


class App extends Component {
  render() {
    console.log("current user:",firebase.auth().currentUser);
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            {/*<Route exact path="/" component={MainPage} />*/}
            <Route exact path="/" component={MainPageDefault} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signupcom" component={SignUpCom} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signupcom" component={SignUpCom} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/create_funding" component={CreateFunding} />
            <Route path="/chongdae" component={Chongdae_auth} />
            <Route path="/identity_auth" component={Identity_auth} />
            <Route path="/account_auth" component={Account_auth} />
            <Route exact path="/find_company" component={CompanyRecruit} />
            <Route path="/find_company_form" component={FindCompanyForm} />
            <Route path="/payment" component={Payment} />
            <Route exact path="/reward_funding" component={RewardFunding} />
            <Route exact path="/reward_funding/:id" component={RewardFundingDetail} />
            <Route exact path="/collect_funding" component={CollectFunding} />
            <Route exact path="/collect_funding/:id" component={CollectFundingDetail} />
            <Route path="/find_company/:id" component={RecruitFormDetail} />
            {/*<Route path="/test" component={test}/>*/}
            <Route path="/funding_detail/:id" component={FundingDetails} />
            <Route path="/funding_state/:id" component={FundingState} />


          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


// class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             username:null
//         };
//     }
//
//     componentDidMount() {
//         fetch('/api')
//             .then(res=>res.json())
//             .then(data=>this.setState({username:data.username}));
//     }
//
//
//     render() {
//         const {username} = this.state;
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     {username ? `Hello ${username}` : 'Hello World'}
//                 </header>
//             </div>
//         );
//         ;
//     }
// }

export default App;
