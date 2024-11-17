(function(){
    let filtre__bouton = document.querySelectorAll('.filtre__bouton button')
    console.log(filtre__bouton.length);
    
    for(const elm of filtre__bouton){
        elm.addEventListener('mousedown', function(e){
            console.log(e.target.dataset.id);   
        })
    }


})()