import firebase from "../firebaseConfig";
const databaseRef = firebase.database().ref();
const userDetailsRef = databaseRef.child("users");

const getAllUsers = () => async dispatch => {

   userDetailsRef.on("value", snapshot => {
        dispatch({
            type: "GET_ALL_USERS",
            payload: snapshot.val() || {}
        });
   })

};

export default getAllUsers;