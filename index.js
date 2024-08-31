function calculateResult() {
    const form = document.getElementById('questionnaire');
    const answers = new FormData(form);

    let score = {
        a: 0,
        b: 0,
        c: 0
    };

    for (let value of answers.values()) {
        score[value]++;
    }

    let highestScore = Math.max(score.a, score.b, score.c);
    let continent;

    if (score.a === highestScore) {
        continent = "Africa or Asia";
    } else if (score.b === highestScore) {
        continent = "Europe or North America";
    } else {
        continent = "South America or Oceania";
    }

    document.getElementById('result').innerText = `Your ideal continent for a romantic relationship is: ${continent}`;
}
