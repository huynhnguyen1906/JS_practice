function checkAnswers() {
    const answers = {
        q1: "a",
    };

    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
    };


    const result = document.getElementById("result");
    if(userAnswers.q1 === answers.q1) {
        result.innerText = "正しい";
    } else {
        result.innerText = "違う";
    }
}