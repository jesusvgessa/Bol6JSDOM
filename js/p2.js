function imprimeCalendario() {
    //Creo la tabla
    var calendario = document.createElement("table");

    //La primera fila donde van los dias
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.innerText = "D";
    var th2 = document.createElement("th");
    th2.innerText = "L";
    var th3 = document.createElement("th");
    th3.innerText = "M";
    var th4 = document.createElement("th");
    th4.innerText = "X";
    var th5 = document.createElement("th");
    th5.innerText = "J";
    var th6 = document.createElement("th");
    th6.innerText = "V";
    var th7 = document.createElement("th");
    th7.innerText = "S";

    //Los añado a la tabla
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    tr.appendChild(th7);
    calendario.appendChild(tr);
    document.body.appendChild(calendario);

    //Creo el objeto date con la fecha de hoy.
    var fecha = new Date();
    //Cojo los dias del mes que tienen
    var diasMes = new Date(fecha.getFullYear(), fecha.getMonth(), 0).getDate();
    //Cojo el primer dia de la semana
    var diaSemana = new Date(fecha.getFullYear(), fecha.getMonth(), 1).getDay();

    //Contador de dias, que es lo que voy a ir imprimiendo
    var dia = 1;

    var tr = document.createElement("tr");
    //Primera Semana
    for (var i = 0; i < 7; i++) {
        if (i < diaSemana) {
            var td = document.createElement("td");
            tr.appendChild(td);
        } else {
            var td = document.createElement("td");
            td.innerText = dia;
            tr.appendChild(td);
            dia++;
        } //Fin Si
    } //Fin Primera semana
    calendario.appendChild(tr);
    do {
        var tr = document.createElement("tr");
        for (var i = 0; i < 7; i++) {
            if (dia < diasMes + 1) {
                var td = document.createElement("td");
                td.innerText = dia;
                tr.appendChild(td);
                dia++;
            } else {
                var td = document.createElement("td");
                tr.appendChild(td);
            } //Fin Si
        } //Fin Para
        calendario.appendChild(tr);
    } while (dia < 31);
}