import firebase from "../firebaseConfig";
const databaseRef = firebase.database().ref(); 
const accountDetailsRef = databaseRef.child("accounts");

const getAllAccounts = () => async dispatch => {

    accountDetailsRef.on("value", snapshot => {
        dispatch({
            type: "GET_ALL_ACCOUNTS",
            payload: snapshot.val() || {}
        });
   })

};

export default getAllAccounts;