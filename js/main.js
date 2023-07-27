let header = document.getElementById("header")

window.onscroll = function(){
    if(scrollY>=200){
        header.classList.add("header2")
    }
    else{
        header.classList.remove("header2")
    }
}