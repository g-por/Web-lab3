document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.toggle-header');
    headers.forEach(header=>{header.addEventListener('click', () => {
        const content = header.nextElementSibling; 
        content.classList.toggle('active')} 
        )
    }
    )
    });

setTimeout(function(){
    document.body.classList.add('body_visible');}, 25);


document.addEventListener('keydown', function(event){  
    if (event.code == 'KeyA' && (event.altKey)){
        window.open(href="../html/index.html", "_self");
    }
    else if(event.code == 'KeyB' && (event.altKey)){
        window.open(href="../html/donat.html", "_self");
    }
})