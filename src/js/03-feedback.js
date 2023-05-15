import '../css/common.css';

import { throttle } from 'lodash';

const refs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector(".feedback-form input"),
  textarea: document.querySelector(".feedback-form textarea")
}

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onEmailInput);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt){

};


function onEmailInput(evt){

};

function onTextareaInput(evt){
const value = evt.currentTarget.value;

console.log(value)
};