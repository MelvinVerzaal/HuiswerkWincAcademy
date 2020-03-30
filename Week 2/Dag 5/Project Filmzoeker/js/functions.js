function show(){
    document.getElementById('container').innerHTML ='';
    movies.forEach(element => 
        document.getElementById('container').innerHTML += 
        '<a href="https://www.imdb.com/title/'+element.imdbID+'/"><div class="poster"><img src="'+element.Poster+'" /></div></a>'
    );
}


function filterClicked(filter){
    document.getElementById('container').innerHTML ='';
    if(filter.toElement.value == 'NewReleases'){
        for (i=0; i<=movies.length; i++) {
            if(movies[i].Year < 2014  )
            document.getElementById('container').innerHTML += 
            '<a href="https://www.imdb.com/title/'+movies[i].imdbID+'/"><div class="poster"><img src="'+movies[i].Poster+'" /></div></a> '
        };
    }else{
        for (i=0; i<=movies.length; i++) {
            
                if(movies[i].Title.includes(filter.toElement.value)){
                    document.getElementById('container').innerHTML += 
                    '<a href="https://www.imdb.com/title/'+movies[i].imdbID+'/"><div class="poster"><img src="'+movies[i].Poster+'" /></div></a>'
                }
        }
    }
}


function filterSearch(){
    document.getElementById('container').innerHTML ='';
        for (i=0; i<=movies.length; i++) {
            
                if(movies[i].Title.includes(document.getElementById('search').value)){
                    document.getElementById('container').innerHTML += 
                    '<a href="https://www.imdb.com/title/'+movies[i].imdbID+'/"><div class="poster"><img src="'+movies[i].Poster+'" /></div></a>'
                }
        }
}

function logKey(e) {
    if(`${e.code}` == 'Enter' || `${e.code}` == 'NumpadEnter'){filterSearch()}
}
    
