//Format date
function formatDate(date) {
    return date.toISOString().split('T')[0]; 
}
//Format time
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}
//Format duration
function formatDuration(days, hours, minutes) {
    return `${days} Day(s), ${hours} Hour(s), ${minutes} Minute(s)`;
}
//Get today's date
function getTodayDate() {
    const today = new Date();
    return {
        date: formatDate(today),
        time: formatTime(today),
        duration: formatDuration(0, 0, 0)
    };
}
//Get future's date/time
function getFutureDateTime(daysFromToday, hours = 0, minutes = 0) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + daysFromToday);
    futureDate.setHours(futureDate.getHours() + hours);
    futureDate.setMinutes(futureDate.getMinutes() + minutes);
    return {
        date: formatDate(futureDate),
        time: formatTime(futureDate),
        duration: formatDuration(daysFromToday, hours, minutes)
    };
}
//Get past date/time
function getPastDateTime(daysInPast, hours = 0, minutes = 0) {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - daysInPast);
    pastDate.setHours(pastDate.getHours() - hours);
    pastDate.setMinutes(pastDate.getMinutes() - minutes);
    return {
        date: formatDate(pastDate),
        time: formatTime(pastDate),
        duration: formatDuration(-daysInPast, -hours, -minutes)
    };
}

module.exports = {
    getTodayDate,
    getFutureDateTime,
    getPastDateTime
};