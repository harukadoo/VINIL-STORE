/*let faqs = document.querySelectorAll('.faq__question');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });;
});*/

let faqBtn =  document.querySelectorAll('.question__btn span');
let faqs = document.querySelectorAll('.faq__answer');

faqBtn.addEventListener('click', () => {
  faqBtn.classList.toggle('active');
  faqs.classList.toggle('active');
});