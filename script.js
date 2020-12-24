
// This Is a project I made with 0 knowledge on javascript, html, or CSS.
// It defiently took longer than it should, and this code is defiently
// Overcomplicated, but It was fun to learn HTML and Javascript to make
// An App that is useful for me.

//things to do
// - Add an all option



function displayHunt() {
    getRadio();
    getList();
    
    var src1 = document.getElementById("resimg");

    var src2 = document.getElementById("res2img");

    var src3 = document.getElementById("idImage");

    if(x==20){
        document.getElementById("result").innerHTML = getSoup2020();
        src1.src = getSoupPic2020();
        document.getElementById("result2").innerHTML = getHunt2020();
        src2.src = getHuntPic2020();
        document.getElementById("idCar").innerHTML = getID2020();
        src3.src = getIDPic2020();
    }

    if(x==21){
        document.getElementById("result").innerHTML = getSoup2021();
        src1.src = getSoupPic2021();
        document.getElementById("result2").innerHTML = getHunt2021();
        src2.src = getHuntPic2021();
        document.getElementById("idCar").innerHTML = getID2021();
        src3.src = getIDPic2021();
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

function getSoupPic2020() {
    if (y==1){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Nissan-Skyline-GT-R.jpg");
    } else if(y==2){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-ford-gt-40.jpg");
    } else if(y==3){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-67-Commando-Jeepster.jpg");
    } else if(y==4){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Porsche-918-Spyder.jpg");
    } else if(y==5){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-88-Honda-CR-X.jpg");
    } else if(y==6){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Mazda-RX-7.jpg");
    } else if(y==7){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-17-Nissan-GT-R-R35.jpg");
    } else if(y==8){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-84-Audi-Sport-Quattro.jpg");
    } else if(y==9){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Lamborghini-Sesto-Elemento.jpg");
    } else if(y==10){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-57-Chevy.jpg");
    } else if(y==11){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Custom-69-Chevy.jpg");
    } else if(y==12){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/65-Ford-Galaxie.jpg");
    } else if(y==13){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-18-Dodge-Challenger-SRT-Demon.jpg");
    } else if(y==14){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-17-Pagani-Huayra-Roadster.jpg");
    } else if(y==15){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/64-Chevy-Chevelle-SS-1.jpg");
    }
}

function getHuntPic2020() {
    if (y==1){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Bubble-Matic.jpg");
    } else if(y==2){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Mercedes-Benz-Unimog-1300-2.jpg");
    } else if(y==3){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Grass-Chomper.jpg");
    } else if(y==4){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Buns-of-Steel.jpg");
    } else if(y==5){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/Batman-Arkham-Asylum-Batmobile.jpg");
    } else if(y==6){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Circle-Trucker.jpg");
    } else if(y==7){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Dodge-Charger-Daytona.jpg");
    } else if(y==8){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2013-Hot-Wheels-Chevy-Camaro-Special-Edition.jpg");
    } else if(y==9){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Power-Pistons.jpg");
    } else if(y==10){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Custom-56-Ford-Truck.jpg");
    } else if(y==11){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Dune-Daddy.jpg");
    } else if(y==12){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Tricera-Truck.jpg");
    } else if(y==13){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-The-Beatles-Yellow-Submarine.jpg");
    } else if(y==14){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Chevy-Silverado.jpg");
    } else if(y==15){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Dodge-Viper-RT10.jpg");
    }
}

function getSoupPic2021() {
    if (y==1){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2021-Nissan-300ZX-Twin-Turbo.jpg");
    } else if(y==2){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2021-Corvette-Grand-Sport-Roadster.jpg");
    } else if(y==3){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2021-Rodger-Dodger.jpg");
    } else if(y==4){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/95-Mazda-RX-7.jpg");
    } else if(y==5){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/Corvette-C7-Z06-Convertible.jpg");
    } else if(y==6){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/Mazda-RX-3.jpg");
    } else if(y==7){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2020-Ford-Mustang-Shelby-GT500.jpg");
    } else if(y==8){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==9){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==10){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==11){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==12){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==13){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==14){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==15){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } 
}

function getHuntPic2021() {
    if (y==1){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2021-Baja-Bone-Shaker.jpg");
    } else if(y==2){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2021-Street-Wiener.jpg");
    } else if(y==3){
        return ("https://www.hwtreasure.com/wp-content/uploads/cars/2021-Custom-77-Dodge-Van.jpg");
    } else if(y==4){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==5){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==6){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==7){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==8){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==9){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==10){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==11){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==12){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==13){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==14){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } else if(y==15){
        return ("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png");
    } 
}

function getID2020() {
    if (y==1){
        return ("ID Chase :: Night Shifter");
    } else if(y==3){
        return ("ID Chase :: '70 Ford Escort RS1600");
    } else if(y==5){
        return ("ID Chase :: Time Attaxi");
    } else if(y==7){
        return ("ID Chase :: Motosaurus");
    } else if(y==9){
        return ("ID Chase :: Bone Shaker");
    } else if(y==11){
        return ("ID Chase :: TV Series Batmobile");
    } else if(y==13){
        return ("ID Chase :: Aston Martin One-77");
    } else if(y==15){
        return ("ID Chase :: '70 Dodge Charger R/T");
    }else{
        return ("");
    }
}

function getIDPic2020() {
    if (y==1){
        return ("https://idchecklist.com/wp-content/uploads/2020/02/2020-Night-Shifter-Chase-7.jpg");
    } else if(y==3){
        return ("https://idchecklist.com/wp-content/uploads/2020/02/2020-70-Ford-Escort-RS1600-Chase-8.jpg");
    } else if(y==5){
        return ("https://idchecklist.com/wp-content/uploads/2020/02/2020-Time-Attaxi-Chase-7.jpg");
    } else if(y==7){
        return ("https://idchecklist.com/wp-content/uploads/2020/02/2020-Motosaurus-Chase-1.jpg");
    } else if(y==9){
        return ("https://idchecklist.com/wp-content/uploads/2020/02/2020-Bone-Shaker-Chase-3.jpg");
    } else if(y==11){
        return ("https://idchecklist.com/wp-content/uploads/2020/03/2020-TV-Series-Batmobile-Chase-International-Card.jpg");
    } else if(y==13){
        return ("https://idchecklist.com/wp-content/uploads/2020/05/2020-Aston-Martin-One-77-Chase-Blister-Card.jpg");
    } else if(y==15){
        return ("https://idchecklist.com/wp-content/uploads/2020/10/2021-70-Dodge-Charger-RT-Chase.jpg");
    }
}

function getID2021() {
    if(y==1){
        return ("ID Chase :: Batman: Arkham Knight Batmobile");
    }else{
        return ("");
    }
}

function getIDPic2021() {
    if(y==1){
        return ("https://idchecklist.com/wp-content/uploads/2020/11/2021-Arkham-Knight-Batmobile-Chase-6.jpg");
    }
}