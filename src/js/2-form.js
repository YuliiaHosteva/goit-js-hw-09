const feedbackForm = document.querySelector('.feedback-form');
const userEmail = feedbackForm.querySelector('input[type="email"]');
const userMessage = feedbackForm.querySelector('textarea');

let userFeedback = {};
let parsedFeedback;

const LS_FEEDBACK = 'feedback-form-state';

const onRender = () => { 
    if (localStorage.getItem(LS_FEEDBACK)) {
        parsedFeedback = JSON.parse(localStorage.getItem(LS_FEEDBACK));

        userEmail.value = parsedFeedback.email || '';
        userFeedback.email = parsedFeedback.email;
        userMessage.value = parsedFeedback.message || '';
        userFeedback.message = parsedFeedback.message;
    };
    
};

const handleInput = ({target: {name, value}}) => {
    userFeedback[name] = value.trim();
    const strUserFeedback = JSON.stringify(userFeedback);
    localStorage.setItem(LS_FEEDBACK, strUserFeedback);
};

const handleSubmit = (e) => {
    if (!userFeedback.email || !userFeedback.message) { 
        alert('Both inputs must be filled');
        return;
    };
    e.preventDefault();
    console.log(userFeedback);
    e.currentTarget.reset();
    localStorage.removeItem(LS_FEEDBACK);
    userFeedback = {};
};

feedbackForm.addEventListener('input', handleInput);
feedbackForm.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', onRender);

