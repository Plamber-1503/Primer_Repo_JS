
let simpleBurguer = ("")
let mediumBurguer= ("")
let maxBurguer= ("")
const menu1=1100
const menu2=1450
const menu3=1700
let topin1= 300
let topin2= 400
let topin3= 470
let topin4= 0


let usuario = prompt("ingrese su nombre ")
if (usuario != "") {
    alert ("Hola "+ usuario + "! bienvenido a PEDIDOS BURGUER")
} else {
    alert("ingrese datos validos")
}
let domicilioEntrega = prompt ("ingrese el domicilio de entrega ")
if (domicilioEntrega != "") {
    alert ("Su pedido se entregará en " + domicilioEntrega)
} else {
    alert("ingrese su domicilio para que podamos entrgarle el pedido")
} 

// en caso de no ingresar como volver a pedir que ingrese el domicilio? 

// opcion Menu 
let opcionMenu =prompt ("Seleccione el combo Burguer que desea añadir a su pedido:\n1 Simple Burguer $1100 (Burguer Siple Carne) \n2 Medium Burguer $1450 (Burguer doble Carne) \n3 Max Burguer $1700 (Burguer triple Carne) ");

    // swtch Pedido burguer

    switch (opcionMenu){
        case "1":
            alert(`Usted selecciono, Simple Burguer tiene un valor de:${menu1}`);
            break;
        case "2": 
            alert(`Su pedido, Medium Burguer tiene un valor de:${menu2}`);
            break;
        case "3":
                alert(`Su pedido, Max Burguer tiene un valor de:${menu3}}`);
            break;    
    }

console.log= (opcionMenu);

