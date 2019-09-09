/* WELCOME MESSAGE */

function myName() {
  var a = document.getElementById("usr").value;

  document.getElementById("usrnm").innerHTML =
    "Hello, " +
    a +
    " ! Welcome to our Pizzeria. <br> Please, continue with your order !";
}

/* COVER / SHOW */
function myNext() {
  document.getElementById("otp").style.display = "none";
  document.getElementById("osz").style.display = "block";
}

function myNext1(){

  document.getElementById("osz").style.display = "none";
  document.getElementById("odr").style.display = "block";


}

function myNext2(){

  document.getElementById("odr").style.display = "none";
  document.getElementById("opm").style.display = "block";


}

function myNext3(){

  document.getElementById("opm").style.display = "none";
  document.getElementById("odl").style.display = "block";


}

function myNext4(){

  document.getElementById("odl").style.display = "none";
  document.getElementById("oad").style.display = "block";


}

function myNext5(){

  document.getElementById("oad").style.display = "none";
  document.getElementById("ocnf").style.display = "block";


}

/* USR NAME */

function myNm() {
  document.getElementById("cnm").innerHTML = document.getElementById('usr').value;
  document.getElementById("cnmpr").innerHTML = ' - ';
}




/* PHONE NUMBER */


function myPh() {
  document.getElementById("cph").innerHTML = document.getElementById('phn').value;
  document.getElementById("cphpr").innerHTML = ' - ';
}


/* Type */

function hav() {
  document.getElementById("ctp").innerHTML = "Hawai";
  document.getElementById("ctppr").innerHTML = parseInt(document.getElementById('hvpr').innerHTML);
}

function marg() {
  document.getElementById("ctp").innerHTML = "Margarita";
  document.getElementById("ctppr").innerHTML = parseInt(document.getElementById('marpr').innerHTML);
}

function quat() {
  document.getElementById("ctp").innerHTML = "Quatro Formagio";
  document.getElementById("ctppr").innerHTML = parseInt(document.getElementById('quapr').innerHTML);
}


/* SIZE */

function sml(){
  document.getElementById("csz").innerHTML = 'small' ;
  document.getElementById("cszpr").innerHTML = parseInt(document.getElementById('szsm').innerHTML);
}

function md(){
  document.getElementById("csz").innerHTML = 'medium' ;
  document.getElementById("cszpr").innerHTML = parseInt(document.getElementById('szmd').innerHTML);
}

function lrg(){
  document.getElementById("csz").innerHTML = 'large' ;
  document.getElementById("cszpr").innerHTML = parseInt(document.getElementById('szlr').innerHTML);
}

function fml(){
  document.getElementById("csz").innerHTML = 'family' ;
  document.getElementById("cszpr").innerHTML = parseInt(document.getElementById('szfm').innerHTML);
}


/* DRINK */

function cola(){
  document.getElementById("cdr").innerHTML = 'Coke Cola' ;
  document.getElementById("cdrpr").innerHTML = parseInt(document.getElementById('drcl').innerHTML);
}

function fanta(){
  document.getElementById("cdr").innerHTML = 'Fanta' ;
  document.getElementById("cdrpr").innerHTML = parseInt(document.getElementById('drft').innerHTML);
}

function myNo(){
  document.getElementById("cdr").innerHTML = ' - ' ;
  document.getElementById("cdrpr").innerHTML = parseInt(document.getElementById('drno').innerHTML);
}


/* PAYMENT */


function csh(){
  document.getElementById("cpm").innerHTML = 'Cash' ;
  document.getElementById("cpmpr").innerHTML = ' - ';
}

function klr(){
  document.getElementById("cpm").innerHTML = 'Klarna' ;
  document.getElementById("cpmpr").innerHTML = ' - ';
}

function myVisa(){
  document.getElementById("cpm").innerHTML = 'Visa' ;
  document.getElementById("cpmpr").innerHTML = ' - ';
}


/* DELIVERY */

function hmdl(){
  document.getElementById("cdl").innerHTML = 'Home Delivery' ;
  document.getElementById("cdlpr").innerHTML = parseInt(document.getElementById('dlhd').innerHTML);
}

function notdl(){
  document.getElementById("cdl").innerHTML = 'Pick Up' ;
  document.getElementById("cdlpr").innerHTML = parseInt(document.getElementById('dlpu').innerHTML);
}


/* ADD INFO */

function adinf(){
  document.getElementById("cad").innerHTML = document.getElementById('addinf').value ;
  document.getElementById("cadpr").innerHTML = ' - ';
  document.getElementById('ttlpr').innerHTML = parseInt(document.getElementById('ctppr').innerHTML) + parseInt(document.getElementById('cszpr').innerHTML) + parseInt(document.getElementById('cdrpr').innerHTML) + parseInt(document.getElementById('cdlpr').innerHTML);
}


/* CONFIRMATION */

function myOrdr(){
  var prs = document.getElementById('ttlpr').innerHTML;
  var txt;
  var r = confirm("Your order will cost " + prs + ' euroa. Please confirm your order!');
  if (r == true) {
    txt = "Your Pizza will be ready after 30 minutes!";
    document.getElementById("btnnew").style.display = "block";
  } else {
    txt = "You canceled your order!";
    document.getElementById("btnnew").style.display = "block";
  }
  document.getElementById("snt").innerHTML = txt;
}


/* New Order */

function myNewOrdr(){
  location.reload();
}