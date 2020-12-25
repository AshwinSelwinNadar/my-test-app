import React, { Component } from 'react'
import { connect } from "react-redux";
import getAllUsersAction from "./action/getAllUsers";
import getAllAccountsAction from "./action/getAllAccounts"; 
import User from "./component/User";
import Account from "./component/Account";
import AppElement from "./component/AppElement";
import "./App.css";

class App extends Component { 
    
    state = {};  

    componentDidMount(){
        this.props.getAllUsersAction();
        this.props.getAllAccountsAction();
    }

    render() {

        if((this.props.userState.getAllUsers) && (this.props.accountState.getAllAccounts)) {
            // User Details
            const usersObject = this.props.userState.getAllUsers;
            const usersArray = Object.keys(usersObject).map((key) => usersObject[key]);

            // Account Details
            const accountObject = this.props.accountState.getAllAccounts;
            const accountIdArray = Object.keys(accountObject).map((key) => key);
            const accountAppArray = Object.keys(accountObject).map((key) => accountObject[key]);

            return (
                <div className="app">
                    <h1>USERS LIST</h1>
                    {
                        (usersArray && 1) ? 
                        (   usersArray.map( (element, index) => {

                                let appElement = "";
                                let indexMatch = accountIdArray.indexOf(element.account);
                                if( indexMatch !== "-1") {

                                    let accountElement = accountAppArray[ indexMatch ]; 
                                    let apps = accountElement.apps;
                                    let keys = Object.keys(apps);   

                                    appElement = keys.map((key, index) => {
                                        return <AppElement key={index} appTitle={apps[Object.keys
                                        (apps)[index]].title} serialNo={index + 1}/>;
                                    });
                                }

                                return (<div className="app__item" key={element.account}>
                                            <User username={element.name} />
                                            <Account accountId={element.account}/>
                                            {appElement}
                                        </div>);
                            })  
                        ): ""
                    }
                </div> 
            )
        }
        else {
            return (<div>
                No users
            </div>);
        }
        // End else
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    getAllUsersAction: () => dispatch(getAllUsersAction()),
    getAllAccountsAction: () => dispatch(getAllAccountsAction()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);