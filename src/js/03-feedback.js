import '../css/common.css';

import { throttle } from 'lodash';

const refs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector(".feedback-form input"),
  textarea: document.querySelector(".feedback-form textarea")
}

const STORAGE_KEY = 'feedback-form-state';

let savedMessage =  JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};



populateTextarea();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    savedMessage[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedMessage));
}

function onFormSubmit(evt){
evt.preventDefault();
evt.currentTarget.reset();
console.log(savedMessage);
    // feedback-form-state
localStorage.removeItem(STORAGE_KEY);
savedMessage = {};

};

function populateTextarea(){
    refs.textarea.value = savedMessage['message'] || '';
    refs.input.value = savedMessage['email'] || '';
};

