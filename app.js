// create the promesse

const promiseGetUsers = new Promise((resolve, reject)=>{
    if(typeof USERS !== 'undefined'){
        resolve(USERS);
    } else{
        reject('acces impossible')
    }
});

// get the promesse state

promiseGetUsers
    .then( u => {
        let liste = '<ul>';
        for(let user of u){
            liste +=`<li>${user.name}</li>`;
        }
        liste += '</ul>';
        document.querySelector('#users').innerHTML =liste;

})
    .catch( e => {
       console.log(e)
});

// **********************NEWS**********************
// create the promesse

const promiseGetNews = new Promise((resolve, reject)=>{
        if(typeof NEWS !== 'undifined'){
            resolve(NEWS);
        } else{
            reject('acces impossible')
        }
    });
    
    // get the promesse state
    
    promiseGetNews
        .then( u => {
            let liste = '<ul>';
            for(let news of u){
                liste +=`<li>${news.title}</li>`;
            }
            liste += '</ul>';
            document.querySelector('#news').innerHTML =liste;
    
    })
        .catch( e => {
           console.log(e)
    });
    