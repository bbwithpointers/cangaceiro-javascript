var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
]; 
console.log(campos)
var tbody = document.querySelector('table tbody');
// aguarda o click no botao com type submit contido no form
document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    // cria a TR que sera inserida dentro do tbody 
    var tr = document.createElement('tr');
    campos.forEach(function(campo){
        var td = document.createElement('td');
        // insere o conteudo do campo, no context da td 
        td.textContent = campo.value; 
        // append a row 
        tr.appendChild(td);
    });
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);
    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';
    campos[0].focus(); 
});


