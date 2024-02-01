/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

import { listenerLanguageBtns, underlineLangFlag } from "./language.js";

listenerLanguageBtns(); // adds listener to the language buttons
/**************************************************************************************************************************************************************************************/ 
/* DOMcl sets username, changes theme *** */
/**************************************************************************************************************************************************************************************/ 
document.addEventListener('DOMContentLoaded', function() {
    underlineLangFlag();
});
/**************************************************************************************************************************************************************************************/ 
/* FORM FOR LOGIN LISTENER */ // index.html // <form id="loginForm" action="homepage.html">
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    // declare variable: var nextStatus is not recommended after IE6, best practice is let keyword
    let form = document.getElementById('loginForm'); // obtains the loginForm
    // adds an EventListener to the form, on click, triggers the function that follows
    form.addEventListener('submit', function(event) { 
        let username = document.getElementById('username').value; // obtains username inserted text
        let errorElement = document.getElementById('errorLogin'); // obtains the error element for later message insertion
        let errorMsg = 'Mandatory field. Min. 6 letters.';
        if (localStorage.getItem('language')==='pt')
            errorMsg='Campo obrigatório. Min. 6 letras.';

        if (isUsernameInvalid(username) || isUsernameSmall(username)) {
            console.log("here is problem");
            event.preventDefault(); // prevents that the form be set/submitted without any fields filled out (just username for now)
            errorElement.innerText = errorMsg; // sets the error message
        } else {
            localStorage.setItem('username', username); // saves data into localStorage
            console.log("The user "+username+" has been added.");
            errorElement.innerText=""; // clear the error message 
        }
    });
});
/**************************************************************************************************************************************************************************************/ 
/* FUNCTION isUsernameInvalid(username) - checks if username is empty or null
/**************************************************************************************************************************************************************************************/
function isUsernameInvalid(username) {
    if (username === "" || username === null)
        return true;
    return false;
};
/**************************************************************************************************************************************************************************************/ 
/* FUNCTION isUsernameSmall(username) - checks if username is under 6 letters
/**************************************************************************************************************************************************************************************/
function isUsernameSmall(username) {
    if (username.length<6) {
        console.log("username is smoll");
        return true;
    }
    return false;
};
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/

























