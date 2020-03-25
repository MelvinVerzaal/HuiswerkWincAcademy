 // Zet bassis settings voor gebruik in compleet js boven aan om overal te gebruiken
    const options = document.querySelectorAll("li");         
    // ff alle opties in kleuren
    options.forEach(element =>{
        element.style.backgroundColor =  element.innerHTML;
    });

 
    document.getElementById("menuButton").addEventListener("click", function(){showMenu();});
    document.getElementById("menuButton").addEventListener("mouseover", function(){showMenu();});
 
    options.forEach(element =>{
        //voor de balkjes met de naam van de kleur er in
            element.addEventListener("click", function(){choceOption(element.innerHTML)});
        //voor de radio input knopjes
            document.getElementById(element.innerHTML).addEventListener("click", function(){choceOption(element.innerHTML)});
    });

     document.addEventListener('keypress', logKey);

    // na dat de pagina is geladen gelijk op wit zetten
     choceOption('White');