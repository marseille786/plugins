// 
	(function(){
		var note = jQuery('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;

		if((new Date()) > ts){
			// The new year is here! Count towards something else.
			// Notice the *1000 at the end - time must be in milliseconds
			ts = localStorage.getItem('timePoint') || (new Date()).getTime() + 4*24*60*60*1000;
			newYear = false;
		}
			
		jQuery('#countdown').countdown({
			timestamp	: ts,
			callback	: function(days, hours, minutes, seconds){

				var message = "<span>Days</span><span>Hours</span><span>Minutes</span><span>Seconds</span>";
				
				note.html(message);

				// Зацикливание отсчета
				if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
					this.timestamp = (Date.now()+4*24*60*60*1000);
				}

				// Сохранение стадии отсчета, чтобы при перезагрузке не было отсчета сначала
				localStorage.setItem('timePoint', this.timestamp);
			}
		});
	})();
