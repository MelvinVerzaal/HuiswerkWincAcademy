let buttons = document.getElementsByTagName('button');





for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){

    
        if(this.innerHTML == 'landenlijst'){
            let countrys =[];
            randomPersonData.forEach(element => {
                if(!countrys.includes(element.region)){
                    countrys.push(element.region);
                }
          });
         document.getElementById('resFeeld').innerHTML = countrys.sort();
        }


        if(this.innerHTML == 'steenbokvrouwen' ){
            let steenbokvrouwen =[];
            randomPersonData.forEach(element => {
                if(element.gender == 'female' 
                    && element.age < 50 
                    && (element.birthday.dmy.substring(0, 2) > 21  && element.birthday.dmy.substring(3, 5) == 12)
                    ||(element.birthday.dmy.substring(0, 2) < 19  && element.birthday.dmy.substring(3, 5) == 01)){
                   
                        steenbokvrouwen.push({name : element.name, surname : element.surname, photo : element.photo});
                }
            });
            console.log(steenbokvrouwen);     
            for (let index = 0; index < steenbokvrouwen.length; index++) {
                document.getElementById('resFeeld').innerHTML += steenbokvrouwen[index].photo;
                document.getElementById('resFeeld').innerHTML += steenbokvrouwen[index].name;
                document.getElementById('resFeeld').innerHTML += steenbokvrouwen[index].surname;
                document.getElementById('resFeeld').innerHTML += '<br/>';
            }
            
        }
        

        if(this.innerHTML == 'ouwe creditcards' ){
            let creditcards =[];
    
            randomPersonData.forEach(element => {
                if(element.age > 18 ){
                   
                        creditcards.push({name : element.name, surname : element.surname, phone : element.phone, credit_card : element.credit_card.number, expiration : element.credit_card.expiration});
                }
            });    
            for (let index = 0; index < creditcards.length; index++) {
               
                document.getElementById('resFeeld').innerHTML += creditcards[index].name;
                document.getElementById('resFeeld').innerHTML += creditcards[index].surname;
                document.getElementById('resFeeld').innerHTML += creditcards[index].phone;
                document.getElementById('resFeeld').innerHTML += creditcards[index].credit_card;
                document.getElementById('resFeeld').innerHTML += creditcards[index].expiration;
                document.getElementById('resFeeld').innerHTML += '<br/>';
            }
            
        }

    });
}




