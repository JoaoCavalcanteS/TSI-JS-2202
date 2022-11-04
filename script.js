console.log("Olá mundo no console, mas com script externo");

let x=1;
for(let i=1; i<=129; i+=i){
    x+=x;
}
window.alert(x);
