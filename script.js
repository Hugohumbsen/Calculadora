let v1 = document.getElementById('valor1')
let v2 = document.getElementById('valor2')
let res = document.getElementById('res')


function Somar(){
    if(v1.value=='' || v2.value==''){
        window.alert('Digite um valor valido!')

    }else {
        Somar= parseFloat(v1.value)+ parseFloat(v2.value)
        res.innerHTML=`<p> o valor da Soma é ${Somar}<p>`

    }
    
    
}
function Subtrair(){
    if(v1.value=='' || v2.value==''){
        window.alert('Digite um valor valido!')

    }else{Subtrair = parseFloat(v1.value)-parseFloat(v2.value)
        res.innerHTML=`<p> o valor da subtração é ${Subtrair}<p>` 
    }
    
}
function Multiplicar(){
    if(v1.value=='' || v2.value==''){
        window.alert('Digite um valor valido!')
    }else{Multiplicar= parseFloat(v1.value)*parseFloat(v2.value)
        res.innerHTML=`<p> o valor da multiplicação é ${Multiplicar}<p>`
    }
    
}
function Dividir(){
    if(v1.value=='' || v2.value==''){
        window.alert('Digite um valor valido!')
    }else{Dividir=parseFloat(v1.value)/parseFloat(v2.value)
    res.innerHTML=`<p> o valor da divisão é ${Dividir}<p>`
    }
    
}