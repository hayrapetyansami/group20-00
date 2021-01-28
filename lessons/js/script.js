window.addEventListener('DOMContentLoaded', function(){
    // document.addEventListener('contextmenu', function(e){
    //     e.preventDefault();
    // });

    document.addEventListener('keydown', function(e){
        
        if (e.keyCode === 123 || e.keyCode === 16 || e.keyCode === 85 || e.keyCode === 73) {
            e.preventDefault();
        }
    });

    const p = document.getElementById('dejavue');

    p.style.cssText = `font-size: 25px; color: blueviolet`;
});