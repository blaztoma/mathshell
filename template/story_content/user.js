function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66nXZafO22j":
        Script1();
        break;
      case "6mt4e1c1hfo":
        Script2();
        break;
      case "5aeX1ROztPq":
        Script3();
        break;
      case "5l8HFkdpnoU":
        Script4();
        break;
      case "6dY01UBaSaC":
        Script5();
        break;
      case "5j4OFnRmgs1":
        Script6();
        break;
      case "5pqFQ0PKYLh":
        Script7();
        break;
      case "6BFX9x0vW7D":
        Script8();
        break;
      case "65QROOoiyJm":
        Script9();
        break;
      case "5hmuOK79vWG":
        Script10();
        break;
      case "6DWs4kzTBVA":
        Script11();
        break;
      case "6RZtdsdwTQh":
        Script12();
        break;
      case "5Z9UK2D7IeW":
        Script13();
        break;
      case "6pEu2NQK8ZU":
        Script14();
        break;
      case "6D4OIqzGhjD":
        Script15();
        break;
      case "6C60ee2zegJ":
        Script16();
        break;
      case "6BnChw60Ubh":
        Script17();
        break;
      case "6rNtjeGWiAC":
        Script18();
        break;
      case "6My0tiSkRER":
        Script19();
        break;
      case "6YFfhghFNGB":
        Script20();
        break;
  }
}

function Script1()
{
  var els = document.getElementsByTagName('input');
for (var i=0; i < els.length; i++) {
 els[i].setAttribute("autocomplete", "off");
}
}

function Script2()
{
  player = GetPlayer();

	function loadGameData() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                processGameData(this);
            }
        };
        xmlhttp.open("GET", "game.xml?rnd="+ Math.random() * 10000000, true);
        xmlhttp.send();
    }

	function processGameData(xml) {
        var gameDoc = xml.responseXML;
        xml_el = gameDoc.getElementsByTagName("numquestions");
        qnum = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("operation");
        qoperation = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("from1");
        from1 = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("to1");
        to1 = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("from2");
        from2 = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("to2");
        to2 = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("minvalue");
        minval = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("maxvalue");
        maxval = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("timed");
        timed = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("duration");
        duration = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("bonus");
        bonus = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("fine");
        fine = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("music");
        music = xml_el[0].childNodes[0].nodeValue;
        xml_el = gameDoc.getElementsByTagName("score");
        passing_score = xml_el[0].childNodes[0].nodeValue;

		player.SetVar("duration", duration);
		player.SetVar("bonus", bonus);
		player.SetVar("fine", fine);
		player.SetVar("minvalue", minval);
		player.SetVar("maxvalue", maxval);
		player.SetVar("from1", from1);
		player.SetVar("to1", to1);
		player.SetVar("from2", from2);
		player.SetVar("to2", to2);
		player.SetVar("pscore", passing_score);
		player.SetVar("NumQuestions", qnum);
		player.SetVar("operation", qoperation);
		if (timed == 1) player.SetVar("timer", true);
		if (music == 1) player.SetVar("music_on", true);
	}
	
loadGameData();

}

function Script3()
{
  var els = document.getElementsByTagName('input');
for (var i=0; i < els.length; i++) {
 els[i].setAttribute("autocomplete", "off");
}
}

function Script4()
{
  var taimer_inst;
var duration;
var duration_mins;
var duration_secs;
var full_duration;
var visible_bars = 10;
var paused = false;

var player = GetPlayer();

duration = player.GetVar("duration");
full_duration = duration;
visible_bars = player.GetVar("visible_bars");

duration_mins = Math.floor(duration / 60);
duration_secs = duration - duration_mins * 60;

player.SetVar("duration_min", duration_mins);
player.SetVar("duration_sec", duration_secs);

from1 = player.GetVar("from1");
to1 = player.GetVar("to1");

from2 = player.GetVar("from2");
to2 = player.GetVar("to2");

minval = player.GetVar("minvalue");
maxval = player.GetVar("maxvalue");

op_code = player.GetVar("operation");

if (op_code != "/") {
	do {
		num1 = Math.floor(Math.random() * (to1 - from1 + 1) + from1);
		num2 = Math.floor(Math.random() * (to2 - from2 + 1) + from2);
		if (op_code == "+") ans = num1 + num2; 
		if (op_code == "-") ans = num1 - num2; 
		if (op_code == "*") ans = num1 * num2; 
	} while ((ans < minval) || (ans > maxval));
} else {
	do {
		num1 = Math.floor(Math.random() * (to1 - from1 + 1) + from1);
		ans = num1;
		num2 = Math.floor(Math.random() * (to2 - from2 + 1) + from2);
		res = num1 * num2;
		num1 = res;
	} while ((ans < minval) || (ans > maxval) || (num1 > to1));
}

player.SetVar("a", num1);
player.SetVar("b", num2);

timer = player.GetVar("timer");
if (timer) {
	taimer_inst = setInterval(calc_time, 1000);
}

function set_time() {
	duration_mins = Math.floor(duration / 60);
	duration_secs = duration - duration_mins * 60;
	player.SetVar("duration_min", duration_mins);
	player.SetVar("duration_sec", duration_secs);
	visible_bars = Math.ceil((duration / full_duration) * 10);
	player.SetVar("visible_bars", visible_bars);
	player.SetVar("duration", duration);
}

function calc_time() {
	if (!paused) {
		duration--;
		set_time();
		if (duration <= 0) clearInterval(taimer_inst);
	}
}

window.add_bonus = function() {
	bonus = player.GetVar("bonus");
	duration += bonus;
	if (duration > full_duration) full_duration = duration;
	set_time();
	player.SetVar("bf_string", "+" + bonus);
	player.SetVar("bonus_fine_flag", true);
	setTimeout(function() {
		player.SetVar("bonus_fine_flag", false);	
	}, 700);	
}

window.add_fine = function() {
	fine = player.GetVar("fine");
	duration -= fine;
	if (duration < 1) duration = 1;
	set_time();
	player.SetVar("bf_string", "-" + fine);
	player.SetVar("bonus_fine_flag", true);
	setTimeout(function() {
		player.SetVar("bonus_fine_flag", false);	
	}, 700);	
}

window.toggle_pause = function() {
	paused = !paused;
}

window.isNumber = function(value) {
  return value !== '' && !isNaN(Number(value));
}

inputas = document.getElementsByTagName('textarea')[0];
inputas.onkeydown = function(o) {
  o = o || event;
  if (o.keyCode == 13) {
    clayer = player.GetVar("OnCorrectLayer");
    ilayer = player.GetVar("OnIncorrectLayer");
    if(clayer) {
    	player.SetVar("onCorrectClose", true);
	} else if(ilayer) {
    	player.SetVar("onIncorrectClose", true);	
	} else {
  		player.SetVar("TextEntry", inputas.value);
		player.SetVar("AnswerEntered", true);
	}
	return false;
  }
  return true;
}

}

function Script5()
{
  // canCalculate = player.GetVar("OnCorrectLayer");
// if(canCalculate) {
	enteredNr = player.GetVar("TextEntry");
	if(isNumber(enteredNr)) {
		toggle_pause();
		player = GetPlayer();
		answer = 0;
		num1 = player.GetVar("a");
		num2 = player.GetVar("b");
		op_code = player.GetVar("operation");
		if (op_code == "+") answer = num1 + num2;
		if (op_code == "*") answer = num1 * num2;
		if (op_code == "-") answer = num1 - num2;
		if (op_code == "/") answer = num1 / num2;
		player.SetVar("answer", answer);
		player.SetVar("NumEntry", answer.toString());
	} else {
		player.SetVar("AnswerEntered", false);
		player.SetVar("OnWrongNumber", true);
	}
// }
}

function Script6()
{
  setTimeout(function(){
var inputs = document.getElementsByTagName('textarea');
if(inputs.length) inputs[inputs.length-1].focus();
}, 90);
}

function Script7()
{
  player = GetPlayer();
answer = 0;
num1 = player.GetVar("a");
num2 = player.GetVar("b");
op_code = player.GetVar("operation");
if (op_code == "+") answer = num1 + num2;
if (op_code == "*") answer = num1 * num2;
if (op_code == "-") answer = num1 - num2;
if (op_code == "/") answer = num1 / num2;
player.SetVar("answer", answer);
}

function Script8()
{
  timer = player.GetVar("timer");
if (timer) {
	add_fine();
}
}

function Script9()
{
  numqst = player.GetVar("NumQuestions");
score = player.GetVar("score");
passing_score = player.GetVar("pscore");
score_norm = Math.round((score/numqst) * 100);
if(score_norm>=passing_score) {
	player.SetVar("pass", true);
} else {
	player.SetVar("pass", false);
}
}

function Script10()
{
  player = GetPlayer();

from1 = player.GetVar("from1");
to1 = player.GetVar("to1");

from2 = player.GetVar("from2");
to2 = player.GetVar("to2");

minval = player.GetVar("minvalue");
maxval = player.GetVar("maxvalue");

op_code = player.GetVar("operation");

if (op_code != "/") {
	do {
		num1 = Math.floor(Math.random() * (to1 - from1 + 1) + from1);
		num2 = Math.floor(Math.random() * (to2 - from2 + 1) + from2);
		if (op_code == "+") ans = num1 + num2; 
		if (op_code == "-") ans = num1 - num2; 
		if (op_code == "*") ans = num1 * num2; 
	} while ((ans < minval) || (ans > maxval));
} else {
	do {
		num1 = Math.floor(Math.random() * (to1 - from1 + 1) + from1);
		ans = num1;
		num2 = Math.floor(Math.random() * (to2 - from2 + 1) + from2);
		res = num1 * num2;
		num1 = res;
	} while ((ans < minval) || (ans > maxval) || (num1 > to1));
}

player.SetVar("a", num1);
player.SetVar("b", num2);
toggle_pause();
}

function Script11()
{
  player = GetPlayer();
player.SetVar("TextEntry", "");

setTimeout(function(){
var inputs = document.getElementsByTagName('textarea');
if(inputs.length) inputs[inputs.length-1].focus();
}, 90);
}

function Script12()
{
  timer = player.GetVar("timer");
if (timer) {
	add_bonus();
}
}

function Script13()
{
  numqst = player.GetVar("NumQuestions");
score = player.GetVar("score");
passing_score = player.GetVar("pscore");
score_norm = Math.round((score/numqst) * 100);
if(score_norm>=passing_score) {
	player.SetVar("pass", true);
} else {
	player.SetVar("pass", false);
}

}

function Script14()
{
  player = GetPlayer();

from1 = player.GetVar("from1");
to1 = player.GetVar("to1");

from2 = player.GetVar("from2");
to2 = player.GetVar("to2");

minval = player.GetVar("minvalue");
maxval = player.GetVar("maxvalue");

op_code = player.GetVar("operation");

if (op_code != "/") {
	do {
		num1 = Math.floor(Math.random() * (to1 - from1 + 1) + from1);
		num2 = Math.floor(Math.random() * (to2 - from2 + 1) + from2);
		if (op_code == "+") ans = num1 + num2; 
		if (op_code == "-") ans = num1 - num2; 
		if (op_code == "*") ans = num1 * num2; 
	} while ((ans < minval) || (ans > maxval));
} else {
	do {
		num1 = Math.floor(Math.random() * (to1 - from1 + 1) + from1);
		ans = num1;
		num2 = Math.floor(Math.random() * (to2 - from2 + 1) + from2);
		res = num1 * num2;
		num1 = res;
	} while ((ans < minval) || (ans > maxval) || (num1 > to1));
}

player.SetVar("a", num1);
player.SetVar("b", num2);
toggle_pause();
}

function Script15()
{
  player = GetPlayer();
player.SetVar("TextEntry", "");

setTimeout(function(){
var inputs = document.getElementsByTagName('textarea');
if(inputs.length) inputs[inputs.length-1].focus();
}, 90);
}

function Script16()
{
  var els = document.getElementsByTagName('input');
for (var i=0; i < els.length; i++) {
 els[i].setAttribute("autocomplete", "off");
}
}

function Script17()
{
  var els = document.getElementsByTagName('input');
for (var i=0; i < els.length; i++) {
 els[i].setAttribute("autocomplete", "off");
}
}

function Script18()
{
  player = GetPlayer();
numqst = player.GetVar("NumQuestions");
score = player.GetVar("score");
score_norm = Math.round((score/numqst) * 100);
SCORM_SetScore(score_norm, 100, 0);
}

function Script19()
{
  var els = document.getElementsByTagName('input');
for (var i=0; i < els.length; i++) {
 els[i].setAttribute("autocomplete", "off");
}
}

function Script20()
{
  player = GetPlayer();
numqst = player.GetVar("NumQuestions");
score = player.GetVar("score");
score_norm = Math.round((score/numqst) * 100);
SCORM_SetScore(score_norm, 100, 0);
}

