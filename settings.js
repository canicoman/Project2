/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/* SET USERNAME INTO HEADER AND LOAD UPDATED TASKSS */
document.addEventListener('DOMContentLoaded', function() {
   checkLanguage(); // checks the language setting
    let storedUsername = localStorage.getItem('username'); //
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = storedUsername;
    }
});

/**************************************************************************************************************************************************************************************/ 
/* DEFAULT LANGUAGE = ENGLISH */
/**************************************************************************************************************************************************************************************/
function checkLanguage() {
   if (localStorage.getItem('language')===null) { // if it doesn't exist 
       let lang='en'; // set it to English
       localStorage.setItem('language', lang); // save it
       console.log("Default language was null. Default language is now set to: "+lang);
   }
   else { // otherwise...
       changeLanguage(localStorage.getItem('language')); // call function to changeLanguage (and all the elements which of change)
       console.log("Default language was previously set to: "+localStorage.getItem('language')+".");
   }
};
/**************************************************************************************************************************************************************************************/
/* LANGUAGE SETTINGS */
/* Content switching according to */
/**************************************************************************************************************************************************************************************/
let languageContent = {
   "en": {
     "nav-home": "Homepage",
     "nav-add": "Add Task",
     "nav-retro": "Retrospective",
     "nav-sett": "Settings",
     "nav-copy": "Copyright",
     "nav-exit": "Exit",
     "theme":"Theme",
     "dark-theme": "Dark",
     "white-theme": "White",
     "lang":"Language",
      "langEN": "English",
      "langPT": "Portuguese",
      "footer": "About",
   },
   "pt": {
     "nav-home": "Início",
     "nav-add": "Adicionar Tarefa",
     "nav-retro": "Retrospetiva",
     "nav-sett": "Definições",
     "nav-copy": "Direitos de autor",
     "nav-exit": "Sair",
     "theme":"Tema",
     "dark-theme": "Escuro",
     "white-theme": "Claro",
     "lang":"Linguagem",
     "langEN": "Inglês",
      "langPT": "Português",
      "footer": "Sobre",
   }
};
function changeLanguage(lang) {
    if (lang) {
        // set no local storage.............. gravar lá
        localStorage.setItem('language', lang); // saves data into localStorage
    }

   for (let key in languageContent[lang]) {
      document.getElementById(key).innerHTML = languageContent[lang][key];
   }
};
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/



/*


                <script>
                   let languageContent = {
                      "en": {
                        "nav-home": "Homepage",
                        "nav-add": "Add Task",
                        "nav-retro": "Retrospective",
                        "nav-sett": "Settings",
                        "nav-copy": "Copyright",
                        "nav-exit": "Exit",
                        "theme":"Theme",
                        "dark-theme": "Dark",
                        "white-theme": "White",
                        "lang":"Language",
                         "langEN": "English",
                         "langPT": "Portuguese",




                      },
                      "pt": {
                        "nav-home": "Início",
                        "nav-add": "Adicionar Tarefa",
                        "nav-retro": "Retrospetiva",
                        "nav-sett": "Definições",
                        "nav-copy": "Direitos de autor",
                        "nav-exit": "Sair",
                        "theme":"Tema",
                        "dark-theme": "Escuro",
                        "white-theme": "Claro",
                        "lang":"Linguagem",
                        "langEN": "Inglês",
                         "langPT": "Português",
                      }
                   }
                   function swithcLang(lang) {
                      for (let key in languageContent[lang]) {
                         document.getElementById(key).innerHTML = languageContent[lang][key];
                      }
                   }
                </script>

                */