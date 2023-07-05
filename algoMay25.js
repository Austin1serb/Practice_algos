
function points(competitions, results) {
    var obj = {}
    var score = 0;
    var str = "";
    for (var i = 0; i < competitions.length; i++) {
        if (results[i] == 0) {
            if (obj[competitions[i][1]]) {
                obj[competitions[i][1]] += 3
            }
            else {
                obj[competitions[i][1]] = 3
            }
        }
        else {
            if (obj[competitions[i][0]]) {
                obj[competitions[i][0]] += 3
            }
            else {
                obj[competitions[i][0]] = 3
            }
        }

    }
    console.log(obj)
    for (let val in obj) {
        if (obj[val] > score) {
            score = obj[val];
            str = val
        }
    }
    return str;
}






var competitions = [['HTML', 'C#'], ["C#", 'Python'], ['Python', 'HTML']]
var results = [0, 0, 1]
console.log(points(competitions, results));