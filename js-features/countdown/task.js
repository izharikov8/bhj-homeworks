const p = document.getElementById("timer")

var timer = setInterval(() => {  
p.textContent = Number(p.textContent) - 1;
if (p.textContent == 0) {
    alert('Вы победили в конкурсе!')
    clearInterval(timer)
}
}, 
1000) 
