var title = document.getElementById("title");
var content = document.getElementById("content");
var send = document.getElementById("send");
var list = document.getElementById("list");

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();

send.addEventListener("click",function(){
    if(title.value=="" | content.value==""){

    }
    else{
        list.innerHTML = `
        <div class="article">
            <p><h2>${title.value}</h2>${content.value}</p>
                <h5>${year}/${month}/${day}</h5> 
                <hr size="2px" color="black">
        </div>
        `+list.innerHTML;
        title.value="";
        content.value="";
        closeaddwindow();

        setCookies("diaryhtml",list.innerHTML);
        
    };
});

var addbutton = document.getElementById("addbutton");
var closebutton = document.getElementById("closebutton");
var mainpage = document.getElementById("mainpage");
var addwin = document.getElementById("addwin");

addbutton.addEventListener("click",function(){
    addwindow();
})

closebutton.addEventListener("click",function(){
    closeaddwindow();
})
function addwindow(){
    mainpage.classList.remove("active");
    addwin.classList.add("active");
}
function closeaddwindow(){
    mainpage.classList.add("active");
    addwin.classList.remove("active");
}

//////setcookies
function setCookies(diaryhtml,value){
    document.cookie = `${diaryhtml}=${value}`;
    console.log(document.cookie);
}