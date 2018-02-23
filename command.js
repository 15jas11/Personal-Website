


function responce(command){ 

console.log(typeof command); 
console.log("ting:"); 

if(command.includes("info")){ 
	document.getElementById("string").value += "\n*******************************************\n\nCommands for the prompt:\n\ninfo - for info about commands" +
	"\nlinked - to go to linked in\ngithub - to get github link \nabout me - to learn more about me \n\n**********************************************\n"; 
}else if (command.includes("linked")){ 
	document.getElementById("string").value += "routing to linked in \n"; 
	window.open("https://www.linkedin.com/in/jonathan-stroz-953948148/"); 
}else if (command.includes("github")){ 
    document.getElementById("string").value += "routing to github \n"; 
	window.open("https://github.com/15jas11"); 
}else if(command.includes("about me")){ 
	document.getElementById("string").value += "\n\n=====================================================================================================================\n\tI am currently a computer Engineering candidate in my second year" +
	"at Queens University, with interests in cyber security, networks, and data structures. /nAs you will note in my resume, I am studying in an appropriate program for the position and I have been fortunate to have jobs and volunteer positions" + 
	"that have helped develop my non-technical communication skills and leadership skills. I am very interested in cyber security operations, and it is a very important issue for companies today and in the future." +
    "I am involved in the Cryptocurrency Club at Queen’s and have also used the firebase database software in a Hackathon" + 
	"I participated in in December 2017. I work well independently, even writing the Queen’s engineering orientation handbook as well as an accessibility handbook but" + 
	"also function well as part of a team (Engineering orientation committee work). My volunteer obligations have also required"+ 
	"that I be able to set goals and prioritize my time to have my work done promptly.\n" + 
	"=======================================================================================================================\n\n"; 
}else if(command.includes("art")){ 

}else{
	document.getElementById("string").value += "\n";	
}


document.getElementById("string").value += "C:\\Users\\Jonathan Stroz>";


} 




function submit() {
    var key = window.event.keyCode;
	document.getElementById("textarea").scrollTop = document.getElementById("textarea").scrollHeight
    // If the user has pressed enter
    if (key === 13) {
        var input = document.getElementById("string").value; 
		var area = input.split(">"); 
		var length = area.length; 
		var command = area[length -1]; 
		console.log(command); 
		
	    responce(command); 
		
        return false;
		
    }
    else {
		
        return false;
    }
}
