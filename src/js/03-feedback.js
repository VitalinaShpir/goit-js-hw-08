import '../css/common.css';

import { throttle } from 'lodash';

const refs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector(".feedback-form input"),
  textarea: document.querySelector(".feedback-form textarea")
}

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateTextarea();

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})
function onFormSubmit(evt){
evt.preventDefault();
evt.currentTarget.reset();
    // feedback-form-state
localStorage.removeItem(STORAGE_KEY);

};



function populateTextarea(){
const savedMessage =  JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedMessage) {
    refs.textarea.value = savedMessage['message'] || '';
    refs.input.value = savedMessage['email'] || '';
}
};

console.log('hello')