document.querySelector('.push').onclick = function(e){
    e.preventDefault();
    if(document.querySelector('input').value.length == 0){
        alert("Siyahiya metn elave et!")
    }

    else{
        document.querySelector('.tasks').innerHTML += `
            <div class="task">
                    ${document.querySelector('input').value}
                <button class="delete">x</button>
            </div>
        `;

        var delete_btn = document.querySelectorAll(".delete");
        for(var i=0; i<delete_btn.length; i++){
            delete_btn[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}