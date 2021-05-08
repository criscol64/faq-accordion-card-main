const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.btn');
    btn.addEventListener('click', () => {
      questions.forEach((el) => {
        if(question !== el) {
          el.classList.remove('open');
        }
      });
      question.classList.toggle('open');
    });
});