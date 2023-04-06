function compute()
{
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("years").value;

    let result = document.getElementById("result");

    let simpleIntrest = p * r * t;
    
    function compute() {
    result.innerText = simpleIntrest;
    }
}
        