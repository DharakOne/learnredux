import { auth } from '../configFirebase'

export function whatCherUser() {
    auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('User is :',user.email)
            console.log("User displayname :",user.displayName)
        } else {
            console.log('User is  logget out')
            // No user is signed in.
        }
    });
}