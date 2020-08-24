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

function sortarr(a, b) {
    return a[0] - b[0];
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
    if (freq.toUpperCase() == "DAILY") {
        monbusy.push([timefrom, timeto]);
        monbusy.sort(sortarr);
        tuebusy.push([timefrom, timeto]);
        tuebusy.sort(sortarr);
        wedbusy.push([timefrom, timeto]);
        wedbusy.sort(sortarr);
        thubusy.push([timefrom, timeto]);
        thubusy.sort(sortarr);
        fribusy.push([timefrom, timeto]);
        fribusy.sort(sortarr);
        satbusy.push([timefrom, timeto]);
        satbusy.sort(sortarr);
        sunbusy.push([timefrom, timeto]);
        sunbusy.sort(sortarr);
    } else {
        freq = freq.split(",");
        console.log("freq:", freq);
        for (let item of freq) {
            item = item.trim();
            console.log("item:", item);
            switch (item.toUpperCase()) {
                case "MONDAY":
                    {
                        monbusy.push([timefrom, timeto]);
                        monbusy.sort(sortarr);
                        break;

                    }
                case "TUESDAY":
                    {
                        tuebusy.push([timefrom, timeto]);
                        tuebusy.sort(sortarr);
                        break;
                    }
                case "WEDNESDAY":
                    {
                        wedbusy.push([timefrom, timeto]);
                        wedbusy.sort(sortarr);
                        break;
                    }
                case "THURSDAY":
                    {
                        thubusy.push([timefrom, timeto]);
                        thubusy.sort(sortarr);
                        break;
                    }
                case "FRIDAY":
                    {
                        fribusy.push([timefrom, timeto]);
                        fribusy.sort(sortarr);
                        break;
                    }
                case "SATURDAY":
                    {
                        satbusy.push([timefrom, timeto]);
                        satbusy.sort(sortarr);
                        break;
                    }
                case "SUNDAY":
                    {
                        sunbusy.push([timefrom, timeto]);
                        sunbusy.sort(sortarr);
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
    document.getElementById("tasktable").deleteRow(tasknum - 1);
    tasknum--;
    task.pop();
    console.log(task);
}

function removebusy() {
    document.getElementById("busytable").deleteRow(busynum - 1);
    busynum--;
    busy.pop();
    console.log(busy);
}

function makeschedule() {
    console.log(monbusy);
}