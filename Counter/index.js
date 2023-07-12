let count=0;
function add()
{
    count++;
    document.getElementById("pTag").innerHTML=count;
}

function minus()
{
    count--;
    document.getElementById("pTag").innerHTML=count;
}

function reset()
{
    count=0;
    document.getElementById("pTag").innerHTML=count;
}