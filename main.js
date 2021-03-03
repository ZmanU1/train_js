let p = document.querySelector('p')
let rougit = function()  {
    p.classList.toggle('red');
};
window.addEventListener('keydown', e =>{

    if (e.keyCode == '38'){
        p.classList.toggle('red');
    } else{ 
        p.classList.toggle('blue');
    };
});
document.querySelector('#a').addEventListener('keydown', function(e){
    console.log(e)
})
