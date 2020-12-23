
function displayHunt() {
    getRadio();
    getList();
    
    if(x==20){
        document.getElementById("result").innerHTML = getSoup2020();
        document.getElementById("result2").innerHTML = getHunt2020();
        
    }

    if(x==21){
        document.getElementById("result").innerHTML = getSoup2021();
        document.getElementById("result2").innerHTML = getHunt2021();
    }
}

function getRadio() {
    var ele = document.getElementsByName('answer');

    for(i = 0 ; i < ele.length ; i++) {
        if(ele[i].checked)
        x = ele[i].value;
    }

}

function getList() {
    var sel = document.getElementById('case');
    y = sel.value;
}

function getSoup2020() {

    if (y==1){
        return ("Super T-Hunt :: Nissan Skyline GT-R [BNR32]");
    } else if(y==2){
        return ("Super T-Hunt :: Ford GT-40\n");
    } else if(y==3){
        return ("Super T-Hunt :: ’67 Commando Jeepster\n");
    } else if(y==4){
        return ("Super T-Hunt :: Porsche 918 Spyder\n");
    } else if(y==5){
        return ("Super T-Hunt :: ’88 Honda CR-X\n");
    } else if(y==6){
        return ("Super T-Hunt :: Mazda RX-7\n");
    } else if(y==7){
        return ("Super T-Hunt :: ’17 Nissan GT-R (R35)\n");
    } else if(y==8){
        return ("Super T-Hunt :: ’84 Audi Sport Quattro\n");
    } else if(y==9){
        return ("Super T-Hunt :: Lamborghini Sesto Elemento\n");
    } else if(y==10){
        return ("Super T-Hunt :: ’57 Chevy\n");
    } else if(y==11){
        return ("Super T-Hunt :: Custom ’69 Chevy\n");
    } else if(y==12){
        return ("Super T-Hunt :: ’65 Ford Galaxie\n");
    } else if(y==13){
        return ("Super T-Hunt :: ’18 Dodge Challenger SRT Demon\n");
    } else if(y==14){
        return ("Super T-Hunt :: ’17 Pagani Huayra Roadster\n");
    } else if(y==15){
        return ("Super T-Hunt :: ’64 Chevy Chevelle SS\n");
    }

}

function getHunt2020() {
    if (y==1){
        return ("T-Hunt :: Bubble Matic");
    } else if(y==2){
        return ("T-Hunt :: Mercedes-Benz Unimog 1300");
    } else if(y==3){
        return ("T-Hunt :: Grass Chomper");
    } else if(y==4){
        return ("T-Hunt :: Buns of Steel");
    } else if(y==5){
        return ("T-Hunt :: Batman Arkham Asylum Batmobile");
    } else if(y==6){
        return ("T-Hunt :: Circle Trucker");
    } else if(y==7){
        return ("T-Hunt :: Dodge Charger Daytona");
    } else if(y==8){
        return ("T-Hunt :: 2013 Hot Wheels Chevy Camaro Special Edition");
    } else if(y==9){
        return ("T-Hunt :: Power Pistons");
    } else if(y==10){
        return ("T-Hunt :: Custom ’56 Ford Truck");
    } else if(y==11){
        return ("T-Hunt :: Dune Daddy");
    } else if(y==12){
        return ("T-Hunt :: Tricera-Truck");
    } else if(y==13){
        return ("T-Hunt :: The Beatles Yellow Submarine");
    } else if(y==14){
        return ("T-Hunt :: Chevy Silverado");
    } else if(y==15){
        return ("T-Hunt :: Dodge Viper RT/10");
    }
}

function getSoup2021() {
    if (y==1){
        return ("Super T-Hunt :: Nissan 300ZX Twin Turbo");
    } else if(y==2){
        return ("Super T-Hunt :: Corvette Grand Sport Roadster");
    } else if(y==3){
        return ("Super T-Hunt :: Rodger Dodger");
    } else if(y==4){
        return ("Super T-Hunt :: '95 Mazda RX-7");
    } else if(y==5){
        return ("Super T-Hunt :: Corvette C7 Zo6 Convertible");
    } else if(y==6){
        return ("Super T-Hunt :: Mazda RX-3");
    } else if(y==7){
        return ("Super T-Hunt :: 2020 Ford Mustang Shelby GT500");
    } else if(y==8){
        return ("Super T-Hunt :: Not Released");
    } else if(y==9){
        return ("Super T-Hunt :: Not Released");
    } else if(y==10){
        return ("Super T-Hunt :: Not Released");
    } else if(y==11){
        return ("Super T-Hunt :: Not Released");
    } else if(y==12){
        return ("Super T-Hunt :: Not Released");
    } else if(y==13){
        return ("Super T-Hunt :: Not Released");
    } else if(y==14){
        return ("Super T-Hunt :: Not Released");
    } else if(y==15){
        return ("Super T-Hunt :: Not Released");
    } 
}

function getHunt2021() {
    if (y==1){
        return ("T-Hunt :: Baja Bone Shaker");
    } else if(y==2){
        return ("T-Hunt :: Street Wiener");
    } else if(y==3){
        return ("T-Hunt :: Custom '77 Dodge Van");
    } else if(y==4){
        return ("T-Hunt :: Not Released");
    } else if(y==5){
        return ("T-Hunt :: Not Released");
    } else if(y==6){
        return ("T-Hunt :: Not Released");
    } else if(y==7){
        return ("T-Hunt :: Not Released");
    } else if(y==8){
        return ("T-Hunt :: Not Released");
    } else if(y==9){
        return ("T-Hunt :: Not Released");
    } else if(y==10){
        return ("T-Hunt :: Not Released");
    } else if(y==11){
        return ("T-Hunt :: Not Released");
    } else if(y==12){
        return ("T-Hunt :: Not Released");
    } else if(y==13){
        return ("T-Hunt :: Not Released");
    } else if(y==14){
        return ("T-Hunt :: Not Released");
    } else if(y==15){
        return ("T-Hunt :: Not Released");
    } 
}

