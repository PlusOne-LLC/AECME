function toggleAnswer(clickedQuestion) {
    // Seleciona todas as perguntas
    const questions = document.querySelectorAll('.faq-question');

    // Fecha todas as respostas
    questions.forEach(question => {
        const answer = question.nextElementSibling;
        if (question !== clickedQuestion) {
            answer.style.display = 'none'; // Fecha resposta
        }
    });

    // Alterna a resposta da pergunta clicada
    const answerToToggle = clickedQuestion.nextElementSibling;
    answerToToggle.style.display = answerToToggle.style.display === 'block' ? 'none' : 'block';
}