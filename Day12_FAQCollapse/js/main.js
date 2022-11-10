const faqs = document.querySelectorAll('.show-answer');

faqs.forEach(element => element.addEventListener('click', showAnswer));

function showAnswer(element) {
    const answerPanel = element.target.closest('li').querySelector('.answer');

    element.target.classList.toggle('fa-angle-down');
    element.target.classList.toggle('fa-xmark');
    element.target.classList.toggle('close');
    answerPanel.classList.toggle('show');
}