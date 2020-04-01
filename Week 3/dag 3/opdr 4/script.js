

async function apiCall(){
try{   
    const res  = await fetch('https://api.themoviedb.org/3/movie/550?api_key=250e3053cdb2537cb3173c229dd39d71')
    const genres  = res.map(x => x == 'genres');
    console.log(genres);
}catch(error){console.log(error);}

}
apiCall();

// ik krijg de error :referenceerror fetch is not defined
//als ik het probeeer optelossen krijg ik de error Error: Cannot find module 'node-fetch'