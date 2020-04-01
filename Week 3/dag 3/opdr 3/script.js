async function getData(){
    try{
        const apiUrl ='https://api.themoviedb.org/3/genre/movie/list'
        const res = await fetch(apiUrl)
        const data = await res.json();
    }
    catch(err){
        console.log(err);
    }
}