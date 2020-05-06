fetch("https://api.covid19india.org/data.json").then((el)=>
{
    return el.json()}).then(el=>{
    var len=el.statewise.length;
    console.log(el.statewise);
    var data=el.statewise[1];
    console.log(data);
    var tb1=document.getElementById("tab");
var row=tb1.insertRow();
var cel1=row.insertCell(0);
var cel2=row.insertCell(1);
var cel3=row.insertCell(2);
var cel4=row.insertCell(3);
var cel5=row.insertCell(4);
var cel6=row.insertCell(5);
var cel7=row.insertCell(6);
cel1.innerHTML=data.confirmed;
cel2.innerHTML=data.deaths;
cel3.innerHTML=data.deltarecovered;
cel4.innerHTML=data.lastupdatedtime;
cel5.innerHTML=data.deltaconfirmed;
cel6.innerHTML=data.deltadeaths;
cel7.innerHTML=data.recovered;
for(var i=1;i<el.statewise.length;i++){
var state=el.statewise[i];
    var tb2=document.getElementById("tab1");
var row=tb2.insertRow();
var cel1=row.insertCell(0);
var cel2=row.insertCell(1);
var cel3=row.insertCell(2);
var cel4=row.insertCell(3);
var cel5=row.insertCell(4);
var cel6=row.insertCell(5);
var cel7=row.insertCell(6);
var cel8=row.insertCell(7);
cel1.innerHTML=state.state;
cel2.innerHTML=state.confirmed;
cel3.innerHTML=state.deaths;
cel4.innerHTML=state.deltarecovered;
cel5.innerHTML=state.lastupdatedtime;
cel6.innerHTML=state.deltaconfirmed;
cel7.innerHTML=state.deltadeaths;
cel8.innerHTML=state.recovered;
}
    })
