function toggleFunction() {
		let menuUl = document.getElementById("menuul");
		menuUl.classList.toggle("active");
	}


	var sIndex = 0;
	carousel();

	function register(){
		document.getElementById("container-register").style.display = "";
		document.getElementById("container-login").style.display = "none";
	}

	function login(){
		document.getElementById("container-register").style.display = "none";
		document.getElementById("container-login").style.display = "";
	}

	function currentSlide(n) {
		var x = document.getElementsByClassName("simg");
		sIndex = n;
		for (i = 0 ; i < x.length; i++) {
			if( i == sIndex) {
				x[i].style.display = "block";
			}
			else {
				x[i].style.display = "none";
			}
		}
	}


	function carousel() {
		var i;
		var x = document.getElementsByClassName("simg");
		for (i = 0 ; i < x.length; i++) {
			if( i == sIndex) {
				x[i].style.display = "block";
			}
			else {
				x[i].style.display = "none";
			}
		}
		sIndex++;
		if (sIndex >= x.length) { sIndex = 0;}
		setTimeout(carousel,2000);
	}


	$(document).ready(function(){
	  $("#animate").click(function(){
	    
	 

	  var val = $("#name").val();
	  var val2 = $("#lname").val();

	  $("#name").hide();
	   $("#lname").hide();

	    $("#h41").html(val);
	    $("#h42").html(val2);

	    $("#h41").show();
	    $("#h42").show();

	    $("#h41").animate({
                fontSize: "40px"
            }, 1000);
	    $("#h42").animate({
                fontSize: "40px"
            }, 1000);
 	});
  
	});