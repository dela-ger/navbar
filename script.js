const list = document.querySelector("#challenge-list ul");
const forms = document.forms;

var btn = document.querySelectorAll("#challenge-list .read");

Array.from(btns).forEach(function(btn){
    btn.addEventListener("click", function(e) {
        const li = e.target.parentElement;
        li.parent.removeChild(li);
    });
});