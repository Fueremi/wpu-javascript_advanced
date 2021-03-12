// TODO Closure

// ? Lexical Scope 

// Contoh
function init(){
    let nama = 'Rian'; // local variable
    function tampilNama(){ // inner function (closure*)
        console.log(nama); // akses ke parent variable
    }

    tampilNama();
}
init();