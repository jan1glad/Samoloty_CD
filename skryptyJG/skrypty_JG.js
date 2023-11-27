let rodzajeSamolotow = ["Boeing","Dreamliner","Cessna","Antonov","Cargo","Airbus","UFO","Transportowiec"];

let zastosowanie = ["Towarowy","Pasazerski"];

let iloscPasazerow = [0,100];

let wielkosc = ["Duzy","Maly"];

let silnik = ["Odrzutowy","Turboodrzutowy"];

let suma = 0;

let id = 1;

let sections =[];

let flotaSamolotow = [];

let Samolot = {
    "Nazwa":"Samolot",
    "Przeznaczenie":"Dowolne",
    "Ilosc_Pasazerow":"Srednie",
    "Rozmiar":"Sredni",
    "Naped":"Smiglowy",
    "Cena":100
};

const towarowy = Object.create(Samolot);
towarowy.Przeznaczenie = zastosowanie[0];
towarowy.Ilosc_Pasazerow = iloscPasazerow[0];


const pasazerski = Object.create(Samolot);
pasazerski.Przeznaczenie = zastosowanie[1];
pasazerski.Ilosc_Pasazerow = iloscPasazerow[1];

const Boeing = Object.create(pasazerski);
Boeing.Nazwa = "Boeing";
Boeing.Rozmiar = wielkosc[0];
Boeing.Naped = silnik[0];
Boeing.Cena = 100000000;

const Dreamliner = Object.create(pasazerski);
Dreamliner.Nazwa = "Dreamliner";
Dreamliner.Rozmiar = wielkosc[0];
Dreamliner.Naped = silnik[1];
Dreamliner.Cena = 200000000;

const Cessna = Object.create(pasazerski);
Cessna.Nazwa = "Cessna";
Cessna.Rozmiar = wielkosc[1];
Cessna.Naped = silnik[0];
Cessna.Cena = 1000000;

const UFO = Object.create(pasazerski);
UFO.Nazwa = "UFO";
UFO.Rozmiar = wielkosc[1];
UFO.Naped = silnik[1];
UFO.Cena = 300;

const Antonov = Object.create(towarowy);
Antonov.Nazwa = "Antonov";
Antonov.Rozmiar = wielkosc[0];
Antonov.Naped = silnik[1];
Antonov.Cena = 150000000;

const Cargo = Object.create(towarowy);
Cargo.Nazwa = "Cargo";
Cargo.Rozmiar = wielkosc[0];
Cargo.Naped = silnik[0];
Cargo.Cena = 20000000;

const Airbus = Object.create(towarowy);
Airbus.Nazwa = "Airbus";
Airbus.Rozmiar = wielkosc[1];
Airbus.Naped = silnik[0];
Airbus.Cena = 10000000;

const Transportowiec = Object.create(towarowy);
Transportowiec.Nazwa = "Transportowiec";
Transportowiec.Rozmiar = wielkosc[1];
Transportowiec.Naped = silnik[1];
Transportowiec.Cena = 750000000;

const samoloty = {
    "Airbus":Airbus,
    "Cargo":Cargo,
    "Antonov":Antonov,
    "Boeing":Boeing,
    "Dreamliner":Dreamliner,
    "Cessna":Cessna,
    "Transportowiec":Transportowiec,
    "UFO":UFO
}

function start(){
    sections = document.getElementsByTagName('section');
    selectZastosowanie();
    selectRozmiar();
    selectSilnik();
    showHide(0);
}
function showHide(nr){
    for (let i=1; i<sections.length; i++){
    sections[i].hidden = true;
    }
    sections[nr].hidden = false
    if(nr === 3){ countParameters();}
   }



   function selectZastosowanie(){
    let selectZastosowanie = document.getElementById("selectZastosowanie");
    for(let i=0;i<zastosowanie.length;i++){
        let option = document.createElement('option');
        option.innerHTML = option.value = zastosowanie[i];
        selectZastosowanie.appendChild(option);
    }
}

function selectRozmiar(){
    let selectRozmiar = document.getElementById("selectRozmiar");
    for(let i=0;i<wielkosc.length;i++){
        let option = document.createElement('option');
        option.innerHTML = option.value = wielkosc[i];
        selectRozmiar.appendChild(option);
    }
}

function selectSilnik(){
    let selectSilnik = document.getElementById("selectSilnik");
    for(let i=0;i<silnik.length;i++){
        let option = document.createElement('option');
        option.innerHTML = option.value = silnik[i];
        selectSilnik.appendChild(option);
    }
}

function dodajSamolot(){
    let selectZastosowanie = document.getElementById("selectZastosowanie").value;
    let selectRozmiar = document.getElementById("selectRozmiar").value;
    let selectSilnik = document.getElementById("selectSilnik").value;
    
    console.log(selectZastosowanie+" "+selectRozmiar + " " + selectSilnik);

  
    findMatchingAirplanes(selectZastosowanie, selectRozmiar, selectSilnik);
}



function findMatchingAirplanes(zastosowanie, rozmiar, silnik) {
    // znajdz pasujace
    for (const key in samoloty) {
        const airplane = samoloty[key];
        if (
            airplane.Przeznaczenie === zastosowanie &&
            airplane.Rozmiar === rozmiar &&
            airplane.Naped === silnik
        ) {
            console.log("Matching airplane found: " + airplane);

            addPlane(airplane.Nazwa);
        }
    }
} 

function addPlane(matchingPlane){

    const button = document.createElement('button');
    button.textContent = 'Usun';
    button.addEventListener('click', function() {
        usunSamolot(this);
    });

    const button2 = document.createElement('button');
    button2.textContent = 'Modyfikuj';
    button2.addEventListener('click', function() {
        modyfikujSamolot(this);
    });

    let newValue = matchingPlane;
    let planeNew = samoloty[newValue];
    flotaSamolotow.push(planeNew);
    let table = document.getElementById("tableOfPlanes");
    let row = table.insertRow(-1);
    let cell0 = row.insertCell(0);
    cell0.innerHTML = id;
    id++;
    let cell1 = row.insertCell(1);
    cell1.innerHTML = planeNew.Nazwa;
    let cell2 = row.insertCell(2);
    cell2.innerHTML = planeNew.Przeznaczenie;
    let cell3 = row.insertCell(3);
    cell3.innerHTML = planeNew.Ilosc_Pasazerow;
    console.log(planeNew.Ilosc_Pasazerow);
    let cell4 = row.insertCell(4);
    cell4.innerHTML = planeNew.Rozmiar;
    let cell5 = row.insertCell(5);
    cell5.innerHTML = planeNew.Naped;
    let cell6 = row.insertCell(6);
    cell6.innerHTML = planeNew.Cena;
    suma+=planeNew.Cena;
    document.getElementById("suma").textContent = "Cena za wszystkie samoloty to: " + suma;
    let cell7 = row.insertCell(7);
    cell7.appendChild(button);
    let cell8 = row.insertCell(8);
    cell8.appendChild(button2);


        

}

function usunSamolot(button){
    let row = button.parentNode.parentNode;
    let index = row.rowIndex -1;
    
    flotaSamolotow.splice(index,1);
    
    row.parentNode.removeChild(row);

    let suma = 0;

for (let i = 0; i < flotaSamolotow.length; i++) {
    suma += flotaSamolotow[i].Cena;
}
    document.getElementById("suma").textContent = "Cena za wszystkie samoloty to: " + suma;
    countParameters();
}

function modyfikujSamolot(button) {
    let row = button.parentNode.parentNode;
    let cells = row.cells;

    for (let i = 1; i < cells.length - 2; i++) {
        if(i==6){}else{
        let input = document.createElement('input');
        input.type = 'text';
        input.value = cells[i].innerText;
        cells[i].innerHTML = '';
        cells[i].appendChild(input);}
    }

    let acceptButton = document.createElement('button');
    acceptButton.textContent = 'Accept';
    acceptButton.addEventListener('click', function () {
        acceptChanges(row);
    });
    cells[cells.length - 1].innerHTML = '';
    cells[cells.length - 1].appendChild(acceptButton);

    
}

function acceptChanges(row) {
    let cells = row.cells;
    for (let i = 1; i < cells.length - 2; i++) {
        if(i==6){}else{
        let input = cells[i].querySelector('input');
        cells[i].innerHTML = input.value;}
    }

    
    cells[cells.length - 1].innerHTML = '';
    // usun accept 

   

    const mod = document.createElement('button');
    mod.textContent = 'Modyfikuj';
    mod.addEventListener('click', function() {
        modyfikujSamolot(this);
    });

// dodaj modyfikuj 
    cells[cells.length - 1].appendChild(mod);
}




function countParameters(){
    let ileAirbus, ileCargo, ileAntonov, ileBoeing, ileDreamliner, ileCessna, ileTransportowiec,IleUFO;

    ileAirbus = ileCargo = ileAntonov = ileBoeing = ileDreamliner = ileCessna = ileTransportowiec = IleUFO = 0;

    for (let i=0;i<flotaSamolotow.length;i++){
        switch(flotaSamolotow[i].Nazwa){
            case "Airbus":
                ileAirbus++;
                break;
                case "Cargo":
                ileCargo++;
                break;
                case "Antonov":
                    ileAntonov++;
                break;
                case "Boeing":
                    ileBoeing++;
                break;
                case "Dreamliner":
                    ileDreamliner++;
                break;
                case "Cessna":
                    ileCessna++;
                break;
                case "UFO":
                    IleUFO++;
                break;
                case "Transportowiec":
                    ileTransportowiec++;
                break;
        }
    }
    document.getElementById("paramAirbus").innerHTML=ileAirbus;
    document.getElementById("paramCargo").innerHTML=ileCargo;
    document.getElementById("paramAntonov").innerHTML=ileAntonov;
    document.getElementById("paramBoeing").innerHTML=ileBoeing;
    document.getElementById("paramDreamliner").innerHTML=ileDreamliner;
    document.getElementById("paramCessna").innerHTML=ileCessna;
    document.getElementById("paramTrans").innerHTML=ileTransportowiec;
    document.getElementById("paramUFO").innerHTML=IleUFO;
}