(function (){
    const formatDate = date => date.toISOString().replace(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})(\.\d+)?Z$/,'$1 $2');
    const display = document.querySelector("#display");
    const loop = setInterval(_=>{
        display.textContent=formatDate(new Date());
    },1000);
    console.log("loop",loop);
}())
