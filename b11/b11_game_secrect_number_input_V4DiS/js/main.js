var secret_number = 0;

var GetElement = function (e) {
    var o = document.querySelectorAll(e);
    if (o.length == 1) {
        return o[0];
    }
    else {
        return o;
    }
}

const table_info = GetElement("#info");

var GetSecretNumber = function () {
    if (localStorage.getItem('ta1o9er_secret_number') == null) {
        return CreateSecretNumber();
    }
    else {
        return localStorage.getItem('ta1o9er_secret_number');
    }

}
var GetButton = function (i) {
    return GetElement("[button_index='" + i + "']");
}
var ShowSecretNumber = function () {
    var i = GetSecretNumber();
    GetElement("[button_index='" + i + "']").classList.add("ok");
}
var CreateSecretNumber = function (maxnumber = 25) {
    var x = Math.floor(Math.random() * maxnumber) + 1;
    localStorage.setItem('ta1o9er_secret_number', x);
    return x;
}

var table = GetElement("#numbers");
for (var i = 1; i <= 25; i++) {
    var button = document.createElement("button");
    button.setAttribute('class', 'btn btn-number');
    button.setAttribute('button_index', i)
    button.setAttribute('onclick', 'click_button(' + i + ')')
    button.innerHTML = i;
    table.appendChild(button);
}

var GetTimeBox = function (i) {
    return GetElement("[data-index='" + i + "']");
}

var SetTimeBox = function (i) {
    console.log('i nè', i)
    GetTimeBox(i).classList.add("active");
}

var GetFalseTime = function () {
    if (localStorage.getItem('ta1o9er_false_times') == null) {
        localStorage.setItem('ta1o9er_false_times', 0);
    }
    return localStorage.getItem('ta1o9er_false_times');
}

var SetFalseTime = function (i) {
    localStorage.setItem('ta1o9er_false_times', i);
}
var UpFalseTime = function (max = 3) {
    var x = GetFalseTime();
    if (Number(x) < max)
        localStorage.setItem('ta1o9er_false_times', Number(x) + 1);
}

var arr_box = [];
var false_times = 1;


var IsRestore = function () {
    return localStorage.getItem('ta1o9er_saved') != null
    || 
    localStorage.getItem('ta1o9er_item')!=null;
}
var LoadTimeBox = function () {
    var i = 0;
    if (IsRestore()) {
        i = GetFalseTime();
    }

    for (var j = 1; j <= i; j++) {
        SetTimeBox(j);
    }
}

var ShowLog = function (stt = false, t = 1, n, auto = false) {
    var root = GetElement("#logs");
    var x = GetSecretNumber();

    var panel = document.createElement('div');

    panel.setAttribute('class', 'log-item');

    if (auto == false) {
        var span = document.createElement('span');
        span.setAttribute('class', stt == false ? 'badge bg-warning' : 'badge bg-success');
        span.innerHTML = stt == false ? 'Sai rồi!' : "Đúng rồi!";
        panel.appendChild(span);
    }


    if (stt == false) {
        var p = document.createElement('p');
        console.log('lần ', t)
        p.innerHTML = t + ". Lần " + t + ": " + n + " - Số của bạn " + (n > x ? "lớn hơn" : "nhỏ hơn") + " số bí mật";
        panel.appendChild(p);
    }
    else {
        var r = document.createElement('div');
        r.setAttribute('id', 'result');
        r.setAttribute('class', 'd-flex align-items-center');
        var h4 = document.createElement('h4');
        h4.setAttribute('class', 'me-3');
        h4.innerHTML = t + ". Số bí mật: ";
        r.appendChild(h4);

        var h2 = document.createElement('h2');
        var sp = document.createElement('span');
        sp.setAttribute('id', 'result-display');
        sp.setAttribute('class', 'badge bg-success');
        sp.innerHTML = x;
        h2.append(sp);
        r.appendChild(h2);
        GetElement("#info").appendChild(r);

    }


    root.appendChild(panel);
}


const arr_item = [];



var click_time = 1;
var ok = false;

var click_button = function (i) {
    console.log('click_time nè',click_time)
    var x = Number(GetSecretNumber());
    if (click_time <= 3 && !ok) {
        arr_item.push(i);
        if (x != Number(i)) {
            SetTimeBox(false_times);
            ShowLog(false, false_times, i);
            if (click_time == 3) {

                ShowLog(true, false_times + 1, i, true);
                ok =true;
            }
            false_times++;
        }
        else
        {
            ShowLog(true, false_times,i);
            ok =true;
        }
        
    }
    //ShowSecretNumber();
    console.log('click_time',click_time);
    click_time++;

    console.log(arr_item)

}

var LoadLog = function () {
    var list = JSON.parse(localStorage.getItem('ta1o9er_item'));
    var x = GetSecretNumber();
    var _time = 1;
    var f = false;
    console.log(list)

    for (var i = 0;i<list.length;i++){
        console.log(_time)
        SetTimeBox(Number(i)+1);
        if(list[i]!=x){
            ShowLog(false,_time,list[i]);
            if(_time==3){
                ShowLog(true,_time+1,x);
            }
        }
        else
        ShowLog(true,_time,x);
        _time++;
    }
    
}


GetElement("#btn-play-again").onclick = function () {
    CreateSecretNumber();
    SetFalseTime(0);
    localStorage.removeItem('ta1o9er_item');
    location.href = "";
}

GetElement("#btn-suggest").onclick = function () {
    ShowSecretNumber();
}

GetElement("#btn-save").onclick = function () {
    if(arr_item.length<=0 && localStorage.getItem('ta1o9er_item')==null){
        alert("Bạn chưa chơi lượt nào!");
    }
    else
    {
            localStorage.setItem('ta1o9er_item', JSON.stringify(arr_item));
    }
}


if(IsRestore()){
    secret_number = GetSecretNumber();
    LoadLog();
    if(localStorage.getItem('ta1o9er_item')!=null){
        var n = [];
        var f = 0;
        var data = JSON.parse(localStorage.getItem('ta1o9er_item'));
        click_time+=data.length;
        for (var i = 0; i <data.length; i++){
            arr_item.push(data[i]);
            if(data[i]!=secret_number)
            f++;
        }
        false_times+=f;
    }
}
else
{
    secret_number = CreateSecretNumber();
}

