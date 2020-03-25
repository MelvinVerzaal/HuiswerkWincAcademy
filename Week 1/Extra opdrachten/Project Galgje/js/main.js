const words = ['bloem', 'hond', 'pizza', 'fiets', 'kaart',  'foto'];
let level = 0;

//maak random numertje aan voor dat het woord word gekozen
function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//woord kiezen
    const goodword = words[getRandomNumber(0, 7)];
    const goodwordLenght = goodword.length;
    let lines =[];
    for(i=0; i<goodwordLenght; i++){
        lines.push(" _ ");
    }
    document.getElementById('lines').innerHTML = lines


function restart(){
    location.reload();
}

function guessLetter(letter){
    if(level < 10){
        let linesInDoc = document.getElementById('lines').innerHTML;
        lines = linesInDoc.split(",");

        if (lines.includes(letter)){}else{
            
            let letters = goodword.split("");
            let i = 0;
            
            let newGoodLetter = [];
            letters.forEach(element =>{
                if(element == letter){
                    newGoodLetter.push(i);
                }
                i++; 
                
            });
            if(newGoodLetter.length == 0){
                alert('Helaas zit deze letter niet in het woord');
            }
        
            i = 0;
            lines.forEach(element =>{ 
                if(newGoodLetter.includes(i)){
                    lines[i] = letter; 
                }
                i++; 
            });

            if(lines.includes(' _ ') == false){document.body.innerHTML = 'Gefeliciteerd je heb gewonnen';}

            document.getElementById('lines').innerHTML = lines
            level++;
            let remainLevel = 5 - level;
            document.getElementById('levels').innerHTML = 'Je heb nog '+remainLevel+ ' over';
        }
   }else{document.body.innerHTML ='Game Over';}

   document.getElementById("guessLetter").value='';
}

function logKey(e) {
       if(`${e.code}` == 'Enter' || `${e.code}` == 'NumpadEnter'){guessLetter(document.getElementById("guessLetter").value)}

}

document.getElementById("guess").addEventListener("click", function(){guessLetter(document.getElementById("guessLetter").value)});
document.getElementById("restart").addEventListener("click", function(){restart()});
document.addEventListener('keypress', logKey);