	//2 gtm events 1st will drop cookie
	//2nd will read cookie and send event

	//to be ran on 1st page button press
	function setCookie(){
	var date = new Date();
	document.cookie = "buttonClickTime="+ date.getTime() + "; max-age="+5*60;
	}
	
	//to be ran on document.load on 2nd page
	function getPageLoadTime(name){
		var timeNow = new Date();
		var cookies = document.cookie;
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		var timeClicked; 
		if (parts.length == 2){
			timeClicked = (parts.pop().split(";").shift());
		}
		//will send event to GA
		console.log(timeNow.getTime() - timeClicked);
	}