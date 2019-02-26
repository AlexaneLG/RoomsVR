AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
    	var debugSection = document.getElementById('debug_section');
    	document.getElementById('section').style.zIndex = '2';
    	document.getElementById('appendinnersection').innerHTML = "";
    	
    	if (this.id === "computer") {
    		var innerSectionProjects = document.getElementById("innerSectionProjects");
    		var innerSectionProjectsCopy = innerSectionProjects.cloneNode(true);
    		document.getElementById("appendinnersection").appendChild(innerSectionProjectsCopy); 
    	}
    	if (this.id === "watercolor") {
    		var innerSectionSkills = document.getElementById("innerSectionSkills");
    		var innerSectionSkillsCopy = innerSectionSkills.cloneNode(true);
    		document.getElementById("appendinnersection").appendChild(innerSectionSkillsCopy); 
    	}
    	if (this.id === "smartphone") {
    		var innerSectionContact = document.getElementById("innerSectionContact");
    		var innerSectionContactCopy = innerSectionContact.cloneNode(true);
    		document.getElementById("appendinnersection").appendChild(innerSectionContactCopy); 
    	}
    	

    });
    /*this.el.addEventListener('hover', function (evt) {
    	cursor: pointer
    });*/
  }
});