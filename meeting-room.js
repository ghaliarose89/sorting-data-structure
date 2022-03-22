var canAttendMeetings = function (intervals) {
    if (intervals.length < 2) return true;
    intervals.sort((a, b) => { return a[0] - b[0]; });
    let arr = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        //console.log(arr)
        if (arr >= intervals[i][0]) return false;
        if (arr <= intervals[i][1]){ arr = intervals[i][1]; console.log(arr)}

    }
    return true;
};
let intervals = [[0, 30], [5, 10], [15, 20]];
console.log(canAttendMeetings(intervals))
//console.log(intervals[1][0])