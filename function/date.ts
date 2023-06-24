function removeHoursFromDate(date : Date) {
    date.setMilliseconds(0); date.setSeconds(0); date.setMinutes(0);
    date.setHours(0); date.setDate(1);
	return date;
}

function getMinutesBetweenDates(sDate : Date, eDate : Date) {
	return (eDate.getTime() - sDate.getTime()) / (1000*60);
}

export {
	removeHoursFromDate,
	getMinutesBetweenDates
}