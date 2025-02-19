var conall, con1, con2, con3, con4 = 0;
var num, num1, num2, num3;
num1 = 1;
function cont(){
    conall = conall += num1;
    alert(num1);
};

function sal(){
    let ssap = prompt("Ingrese la contraseña:",'Password aquí:');
    alert(ssap);
    if (ssap === "Jose Miel") {
        function cont(){};
    } else {
        window.close("");
    }
}