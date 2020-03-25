function showMenu(){
    document.getElementById("menuOptions").classList.add("show");
}

function closeMenu(){
    document.getElementById("menuOptions").classList.remove("show");
}

function choceOption(color){
    document.body.style.backgroundColor = color;
    document.getElementById("colorName").innerHTML = color;
    
    //eerst alle radio weer rezetten daarna de juiset selectern
    const optionsShowInput = document.querySelectorAll("input");
    optionsShowInput.forEach(element =>{
        document.getElementById(element.id).checked = false;
    });

    document.getElementById(color).checked = true;
    document.getElementById("menuOptions").classList.remove("show");
}

function logKey(e) {
    // om dat 1 home is
        if(`${e.code}` == 'Digit1' || `${e.code}` == 'Numpad1'){choceOption('White');};
    // en de rest allemaal het zelfde is
            let i = 1;
            options.forEach(element =>{
                // Digit is voor nummers boven aan je toetsenbord
                // Numpad is voor de zijkant
                if(`${e.code}` == 'Digit'+i || `${e.code}` == 'Numpad'+i){ choceOption(element.innerHTML);};
                i++;
            });
}