var mainbox = document.querySelector('#container');
var t = document.querySelector('#text1');
var t2 = document.querySelector('#text2');

function cursorfollow(e,mainbox)
{
    var con = mainbox.getBoundingClientRect();
    var x = ((e.pageX - con.x)*0.5);
    t.style.transform = `translate(${x}px,0)`;
    t2.style.transform = `translate(${x}px,0)`;
}

mainbox.addEventListener('mousemove',(e)=>{
    setInterval(cursorfollow(e,mainbox),1000);
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', ()=> {
cursor.classList.add("expand");

setTimeout(() => {
cursor.classList.remove("expand");
}, 500)
})


