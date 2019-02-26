AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
    	var debugSection = document.getElementById('debug_section');
    	document.getElementById('section').style.zIndex = '2';
    	/*document.getElementById('appendinnersection').innerHTML = "";
    	
    	if (this.id === "computer") {
    		var innerSectionProjects = document.getElementById("innerSectionProjects");
    		document.getElementById("appendinnersection").appendChild(innerSectionProjects); 
    	}
    	if (this.id === "watercolor") {
    		var innerSectionSkills = document.getElementById("innerSectionSkills");
    		document.getElementById("section").appendChild(innerSectionSkills); 
    	}*/

    });
    /*this.el.addEventListener('hover', function (evt) {
    	cursor: pointer
    });*/
  }
});