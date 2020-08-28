var monbusy = [];
var tuebusy = [];
var wedbusy = [];
var thubusy = [];
var fribusy = [];
var satbusy = [];
var sunbusy = [];
var task = [];
var busynum = 3;
var tasknum = 3;
var busy = [];
var latest;
var montot = 0;
var tuetot = 0;
var wedtot = 0;
var thutot = 0;
var fritot = 0;
var sattot = 0;
var suntot = 0;
var min;
var minday;
var i, j, k;
var tasktime;
var temp, temp1;

function sortarr(a, b) {
    return a[0] - b[0];
}

function timecompare(a, b) {
    var td = 0;
    td += 60 * (Math.floor(a / 100) - Math.floor(b / 100));
    if ((a % 100) >= (b % 100)) {
        td += (a % 100 - b % 100);
    } else {
        td -= (b % 100 - a % 100);
    }
    return td;
}


function addbusy() {
    var name = document.getElementById("workinput").value;
    var timefrom = document.getElementById("timeinputfrom").value;
    var timeto = document.getElementById("timeinputto").value;
    var freq = document.getElementById("freqinput").value;
    var busytable = document.getElementById("busytable")
    var row = busytable.insertRow(busynum);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = timefrom;
    cell3.innerHTML = timeto;
    cell4.innerHTML = freq;
    busynum++;
    timefrom = timefrom.replace(':', '');
    timefrom = parseInt(timefrom);
    timeto = timeto.replace(':', '');
    timeto = parseInt(timeto);
    busy.push([name, timefrom, timeto, freq]);
    console.log(busy);
    document.getElementById('workinput').value = '';
    document.getElementById('timeinputfrom').value = '';
    document.getElementById('timeinputto').value = '';
    document.getElementById('freqinput').value = '';
    console.log(freq.toUpperCase());
    latest = freq;
    if (freq.toUpperCase() == "DAILY") {
        monbusy.push([timefrom, timeto, name]);
        tuebusy.push([timefrom, timeto, name]);
        wedbusy.push([timefrom, timeto, name]);
        thubusy.push([timefrom, timeto, name]);
        fribusy.push([timefrom, timeto, name]);
        satbusy.push([timefrom, timeto, name]);
        sunbusy.push([timefrom, timeto, name]);
    } else {
        freq = freq.split(",");
        console.log("freq:", freq);
        for (let item of freq) {
            item = item.trim();
            console.log("item:", item);
            switch (item.toUpperCase()) {
                case "MONDAY":
                    {
                        monbusy.push([timefrom, timeto, name]);
                        break;

                    }
                case "TUESDAY":
                    {
                        tuebusy.push([timefrom, timeto, name]);
                        break;
                    }
                case "WEDNESDAY":
                    {
                        wedbusy.push([timefrom, timeto, name]);
                        break;
                    }
                case "THURSDAY":
                    {
                        thubusy.push([timefrom, timeto, name]);
                        break;
                    }
                case "FRIDAY":
                    {
                        fribusy.push([timefrom, timeto, name]);
                        break;
                    }
                case "SATURDAY":
                    {
                        satbusy.push([timefrom, timeto, name]);
                        break;
                    }
                case "SUNDAY":
                    {
                        sunbusy.push([timefrom, timeto, name]);
                        break;
                    }
            }
        }
    }

}

function addtask() {
    var name = document.getElementById("taskname").value;
    var time = document.getElementById("tasktime").value;
    var daily = document.getElementById("taskdaily").value;
    var freq = document.getElementById("taskfrequency").value;
    var tasktable = document.getElementById("tasktable");
    var row = tasktable.insertRow(tasknum);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = time;
    cell3.innerHTML = daily;
    cell4.innerHTML = freq;
    task.push([name, time, daily, freq]);
    document.getElementById("taskname").value = "";
    document.getElementById("tasktime").value = "";
    document.getElementById("taskdaily").value = "";
    document.getElementById("taskfrequency").value = "";
    tasknum++;
    console.log(task);
}

function removetask() {
    if (tasknum != 3) {
        document.getElementById("tasktable").deleteRow(tasknum - 1);
        tasknum--;
        task.pop();
        console.log(task);
    }
}

function removebusy() {
    if (busynum != 3) {
        document.getElementById("busytable").deleteRow(busynum - 1);
        busynum--;
        busy.pop();

        var freq = latest;
        if (freq.toUpperCase() == "DAILY") {
            monbusy.pop();
            tuebusy.pop();
            wedbusy.pop();
            thubusy.pop();
            fribusy.pop();
            satbusy.pop();
            sunbusy.pop();
        } else {
            freq = freq.split(",");
            console.log("freq:", freq);
            for (let item of freq) {
                item = item.trim();
                console.log("item:", item);
                switch (item.toUpperCase()) {
                    case "MONDAY":
                        {
                            monbusy.pop();
                            break;

                        }
                    case "TUESDAY":
                        {
                            tuebusy.pop();
                            break;
                        }
                    case "WEDNESDAY":
                        {
                            wedbusy.pop();
                            break;
                        }
                    case "THURSDAY":
                        {
                            thubusy.pop();
                            break;
                        }
                    case "FRIDAY":
                        {
                            fribusy.pop();
                            break;
                        }
                    case "SATURDAY":
                        {
                            satbusy.pop();
                            break;
                        }
                    case "SUNDAY":
                        {
                            sunbusy.pop();
                            break;
                        }
                }
            }
        }
    }
}

function makeschedule() {
    montot = 0;
    tuetot = 0;
    wedtot = 0;
    thutot = 0;
    fritot = 0;
    sattot = 0;
    suntot = 0;
    monbusy.sort(sortarr);
    tuebusy.sort(sortarr);
    wedbusy.sort(sortarr);
    thubusy.sort(sortarr);
    fribusy.sort(sortarr);
    satbusy.sort(sortarr);
    sunbusy.sort(sortarr);

    for (let item of monbusy) {
        montot += parseInt(item[1]) - parseInt(item[0]);
    }
    for (let item of tuebusy) {
        tuetot += parseInt(item[1]) - parseInt(item[0]);
    }
    for (let item of wedbusy) {
        wedtot += parseInt(item[1]) - parseInt(item[0]);
    }
    for (let item of thubusy) {
        thutot += parseInt(item[1]) - parseInt(item[0]);
    }
    for (let item of fribusy) {
        fritot += parseInt(item[1]) - parseInt(item[0]);
    }
    for (let item of satbusy) {
        sattot += parseInt(item[1]) - parseInt(item[0]);
    }
    for (let item of sunbusy) {
        suntot += parseInt(item[1]) - parseInt(item[0]);
    }
    min = Math.min(montot, tuetot, wedtot, thutot, fritot, sattot, suntot);
    if (min == montot) {
        minday = "MONDAY";
    } else if (min == tuetot) {
        minday = "TUESDAY";
    } else if (min == wedtot) {
        minday = "WEDDAY";
    } else if (min == thutot) {
        minday = "THURSDAY";
    } else if (min == fritot) {
        minday = "FRIDAY";
    } else if (min == sattot) {
        minday = "SATURDAY";
    } else {
        minday = "SUNDAY";
    }
    for (let item of task) {
        tasktime = item[1];
        for (i = 0; i < item[3]; i++) {
            min = Math.min(montot, tuetot, wedtot, thutot, fritot, sattot, suntot);
            if (min == montot) {
                minday = "MONDAY";
                for (k = 0; k < item[2]; k++) {
                    
                }
            } else if (min == tuetot) {
                minday = "TUESDAY";
            } else if (min == wedtot) {
                minday = "WEDDAY";
            } else if (min == thutot) {
                minday = "THURSDAY";
            } else if (min == fritot) {
                minday = "FRIDAY";
            } else if (min == sattot) {
                minday = "SATURDAY";
            } else {
                minday = "SUNDAY";
            }
        }
    }
    console.log("min: ", minday);
    console.log("Difference is ", timecompare(1855, 1254));
}