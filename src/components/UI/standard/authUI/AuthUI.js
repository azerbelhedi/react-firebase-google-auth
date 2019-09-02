import React , { Component } from 'react'
import authSession from '../../../database/AuthSession'

var firebase = require('firebase');
var firebaseui = require('firebaseui');

  var firebaseConfig = {
    apiKey: "AIzaSyBz3-mrQK_SfVRqfn8PnjAlpkqXFCxcfI4",
    authDomain: "ktebi-fbee4.firebaseapp.com",
    databaseURL: "https://ktebi-fbee4.firebaseio.com",
    projectId: "ktebi-fbee4",
    storageBucket: "ktebi-fbee4.appspot.com",
    messagingSenderId: "273524750261",
    appId: "1:273524750261:web:74e965b56d47f344"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var ui = new firebaseui.auth.AuthUI(firebase.auth());


// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       // List of OAuth providers supported.
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       firebase.auth.GithubAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
// });

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        document.getElementById('loader').style.display = 'none';
      }
    },        
    signInFlow: 'popup',
    signInSuccessUrl: '/home',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '<your-tos-url>',
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  

class AuthUI extends Component{
    constructor(props){
        super(props)
        this.state = {
          userState : false ,
          userID : ""
        }
    }

    componentWillMount(){
      
    }

    render(){
        return(
            <div>
                <h1>Welcome to My Awesome App</h1>
                <div id="firebaseui-auth-container"></div>
                <div id="loader">Loading...</div>
                <button onClick = {() => {
                  firebase.auth().signOut()
                  }}>Logout</button>
            </div>
        )
    }

    componentDidMount(){
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
        authSession.addAuthListener( (user) => {
            console.log("listener output : " , user.uid , user.userState)
        })
    }
    
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    authSession.login(user.uid)
    console.log(authSession.getUserState())
    console.log(authSession.getUserID())
    // User is signed in.
    // console.log(user)
    // console.log(user.uid)
    // this.setState({userID : user.uid})

  } else {
    authSession.logout()
    console.log("outttttttttt")
    // No user is signed in.
  }
});



export default AuthUI 