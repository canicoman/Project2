/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

import { setUsername } from "./username.js";
import { loadTheme} from "./theme.js";
import { listenerLanguageBtns, underlineLangFlag } from "./language.js";

listenerLanguageBtns(); // adds listener to the language buttons
/**************************************************************************************************************************************************************************************/ 
/* DOMcl sets username *** */
/**************************************************************************************************************************************************************************************/ 
document.addEventListener('DOMContentLoaded', function() {
    setUsername(); // set username on loading
    loadTheme(); // loads up the previously set theme
    underlineLangFlag();
});
/**************************************************************************************************************************************************************************************/ 
/*  TASK SUBMISSION */
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('taskForm'); // obtem o forumulário de criação de uma task!
    form.addEventListener('submit', function(event) { //Adiciona actionListner em caso de submissão
        event.preventDefault(); // previne que o formulário seja enviado da forma default
        var title = document.getElementById('title').value; //obtem o titulo da task
        var description = document.getElementById('description').value; //obtem a descrição da task
        if(title && description) { // se o titulo e a descrição não estiverem vazios    
            addTask(title, description); // adiciona uma task com o titulo e a descrição
            window.location.href = 'homepage.html'; // redireciona para a página principal
        }    
    });
});

/**************************************************************************************************************************************************************************************/ 
/* TASK CREATION */
/**************************************************************************************************************************************************************************************/
function addTask(title, description) { // adiciona uma task com o titulo e a descrição
    let task = { // cria um objeto task
        id: getNextTaskId(),
        title: title,
        description: description,
        status : "todo",
    };
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // obtem as tasks do localStorage
    tasks.push(task); // adiciona a task ao array de tasks
    localStorage.setItem('tasks', JSON.stringify(tasks)); // guarda as tasks no localStorage
};
/**************************************************************************************************************************************************************************************/ 
/* function getNextTaskId() */
/**************************************************************************************************************************************************************************************/
function getNextTaskId() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id || 0), 0);
    return maxId + 1;
};

/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/