function arrange(num)
{
    localStorage.setItem("value", num);
}
function show()
{
    var txt;
    var num = localStorage.getItem("value");
    var tabs = document.getElementsByClassName("cont_tab");
    for(let i=0; i<12; i++)
    {
        txt = "SOCIETY " + num + " IMAGE " + (i+1); 
        tabs[i].innerHTML = txt;
    }
    document.getElementById("head").innerHTML+= " " + num;
}