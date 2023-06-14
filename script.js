document.querySelector(".bas").onclick = function(){
    if(document.querySelector(".yenialiskanlik input").value.length == 0){
        alert("Lütfen İçini Doldurunuz...")
    } else {
        document.querySelector("#tag").innerHTML += `
    <div class="liste">
        <span id="listeismi">
            ${document.querySelector(".yenialiskanlik input").value}
        </span>
        <button class="silme">
            <i class='bx bx-message-square-x'></i>
        </button>
    </div>
    `
    }

    var current_list = document.querySelectorAll(".silme");
    for (var i=0; i<current_list.length; i++){
        current_list[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    var list = document.querySelectorAll(".list");
    for (var i=0; i<list.length; i++){
        list[i].onclick = function(){
            this.classList.toggle("comple");
        }
    }
    document.querySelector(".yenialiskanlik input").value = "";
}