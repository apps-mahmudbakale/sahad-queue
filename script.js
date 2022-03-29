class SahadQueue{
	// Constructor Method for Sahad Class
	constructor () {
		this.locale = '';
	}

   // Get current date with Locale formattinhg
	getDate () {
		var date = new Date();
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

		return date.toLocaleDateString(this.locale, options);
	}

	//Get Realtime time 
	getTime (){
	  let date = new Date(); 
	  let hh = date.getHours();
	  let mm = date.getMinutes();
	  let ss = date.getSeconds();
	  let session = "AM";

	  if(hh == 0){
	      hh = 12;
	  }
	  if(hh > 12){
	      hh = hh - 12;
	      session = "PM";
	   }

	   hh = (hh < 10) ? "0" + hh : hh;
	   mm = (mm < 10) ? "0" + mm : mm;
	   ss = (ss < 10) ? "0" + ss : ss;
	    
	   let time = hh + ":" + mm + ":" + ss + " " + session;

	   return time;
	}

	randMinutes (min, max){
	   return Math.floor(Math.random()*(max-min+1)+min);
	}

	formatMinutes(minute){
	  var hours = Math.trunc(minute/60);
	  var minutes = minute % 60;
	  return hours; 
	}
	getPatients (patients) {
		let tag = '';
		patients.forEach((patient)=>{
		    tag +=`
		    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
		    <div class="flex-column">
		      ${patient.firstName} ${patient.lastName} (${patient.gender} ${patient.age})
		      <p><small>${patient.address.address}</small></p>
		      <span class="badge bg-info badge-pill">in ${this.formatMinutes(this.randMinutes(20, 500))} hours</span>
		    </div>
		    <div class="image-parent">
		        <img src="${patient.image}" class="img-fluid img-thumbnail" alt="quixote">
		    </div>
		    </a>
		    `;
		});
		return tag;
	}

}
