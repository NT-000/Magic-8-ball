let advice = ["You are fired!","The election was stolen", "Solution? This is my brilliant solution.", "I'm basicially almost all the time a truthful person", "Release the kraken", "Rudy? I don't know any Rudy.", "Sleepy Joe is a communist", "All those nasty things said about me.","The radical left...","The election was stolen","The election was stolen", "Fake news!","Sorry losers and haters, but my IQ is one of the highest.","Nobody respects women more than I do.","I know words. I have the best words.","I'm a very stable genius.",];
let randomAdvice = '';
function updateView(){
    let html;
    html = /*HTML*/`
    <img src="trump.jpeg">
    <div class="fields">
    <div>${randomAdvice}</div>
    <input type=text placeholder="Fire away your questions!">
    </div>
    <button onclick="submitQuestion()">Submit question</button>
    `
    document.getElementById('app').innerHTML = html;
}


function submitQuestion(){
    let randomIndex = Math.floor(Math.random()* advice.length);
    randomAdvice = advice[randomIndex];
    updateView();
}

updateView();