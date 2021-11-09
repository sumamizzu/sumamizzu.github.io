{
    const display = document.querySelector("#display");
    const loop = setInterval(p=>{
        const now = new Date();
        console.log('p',p,now.toISOString());
        display.textContent=now.toISOString();
    },1000);
}
