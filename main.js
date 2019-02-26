var startExperienteBtn = document.getElementById('start_experience');

startExperienteBtn.onclick = function(){
    document.getElementById('container').outerHTML = '';
    document.getElementsByTagName('a-scene')[0].style.zIndex = '0';
    //document.getElementById('debug').style.zIndex = '1';
};

/*var debugSection = document.getElementById('debug_section');

debugSection.onclick = function(){
	document.getElementById('section').style.zIndex = '2';
};*/

var closeSection = document.getElementById('close_section');

closeSection.onclick = function(){
	document.getElementById('section').style.zIndex = '-1';
};
