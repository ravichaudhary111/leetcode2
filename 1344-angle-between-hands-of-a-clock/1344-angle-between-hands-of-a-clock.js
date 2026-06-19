/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    /// min--->6 de
    // hours --> 30 deg


    //    60 min--> 30;
    //    1 min--> .5 degress

    hour = hour % 12;

    let hoursAngle = hour * 30 + minutes * .5;

    let minutesAngle = minutes * 6;
    let diff1 = Math.abs(minutesAngle - hoursAngle);
    let diff2 = Math.abs(hoursAngle - minutesAngle);
    return Math.min(diff1, 360 - diff1, diff2, 360 - diff2);
};