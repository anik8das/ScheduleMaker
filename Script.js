var busy = [];
var task = [];
var busynum = 3;
var tasknum = 3;

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
    var dailytasktime = [0, 0, 0, 0, 0, 0, 0];
}