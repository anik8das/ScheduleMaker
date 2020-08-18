var busy = [];
var busynum = 3;
var tasknum = 3;

function addbusy() {
    var name = document.getElementById("workinput").value;
    var time = document.getElementById("timeinput").value;
    var freq = document.getElementById("freqinput").value;
    var busytable = document.getElementById("busytable")
    var row = busytable.insertRow(busynum);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = time;
    cell3.innerHTML = freq;
    busynum++;

    console.log(name, time, freq);
    document.getElementById('workinput').value = '';
    document.getElementById('timeinput').value = '';
    document.getElementById('freqinput').value = '';
}

function addtask() {
    var name = document.getElementById("taskname").value;
    var time = document.getElementById("tasktime").value;
    var daily = document.getElementById("taskdaily").value;
    var spaced = document.getElementById("taskspaced");
    var freq = document.getElementById("taskfrequency").value;
    var tasktable = document.getElementById("tasktable");
    var row = tasktable.insertRow(tasknum);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = name;
    cell2.innerHTML = time;
    cell3.innerHTML = daily;
    if (spaced.checked == true) {
        cell4.innerHTML = "&#9745";
    } else {
        cell4.innerHTML = "&#9744"
    }
    cell5.innerHTML = freq;
    document.getElementById("taskname").value = "";
    document.getElementById("tasktime").value = "";
    document.getElementById("taskdaily").value = "";
    spaced.checked = false;
    document.getElementById("taskfrequency").value = "";
    tasknum++;
    console.log(spaced.checked);
}

function removetask() {
    document.getElementById("tasktable").deleteRow(tasknum - 1);
    tasknum--;
}

function removebusy() {
    document.getElementById("busytable").deleteRow(busynum - 1);
    busynum--;
}