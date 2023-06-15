const title = document.getElementById("title");
const content = document.getElementById("content");
const send = document.getElementById("send");
const list = document.getElementById("list");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();

const datetext = year+"/"+month+"/"+day;

// send.addEventListener("click",function(){
//     if(title.value=="" | content.value==""){

//     }
//     else{
//         list.innerHTML = `
//         <div class="article">
//             <p><h2>${title.value}</h2>${content.value}</p>
//                 <h5>${year}/${month}/${day}</h5> 
//                 <hr size="2px" color="black">
//         </div>
//         `+list.innerHTML;
//         title.value="";
//         content.value="";
//         closeaddwindow();

//         setCookies("diaryhtml",list.innerHTML);
        
//     };
// });

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


////save data with local storage
const titleinput = document.getElementById('title');
const contentinput = document.getElementById('content');
const nameinput = document.getElementById('name');


const comments = JSON.parse(localStorage.getItem("comments")) || [];

const createcomment = ({title,content,name,date}) => {
    //create
    const commentdiv = document.createElement('div');
    const commenttitle = document.createElement('h2');
    const commentcontent = document.createElement('p');
    const commentname = document.createElement('label');
    const commentdate = document.createElement('label');
    const divide = document.createElement('hr');
    commentdiv.classList.add("article")
    //set value
    commenttitle.innerText = title;
    commentcontent.innerText = content;
    commentname.innerText = name+"  ";
    commentdate.innerText = date;
    //append
    commentdiv.append(commenttitle,commentcontent,commentname,commentdate,divide);
    list.appendChild(commentdiv);
}

comments.forEach(createcomment);

send.addEventListener("click",()=>{

    if(titleinput.value=="" | contentinput.value=="" | nameinput.value==""){
    }
    else{
        const newcomment = addcomment(
            titleinput.value,
            contentinput.value,
            nameinput.value,
            datetext
        )
        createcomment(newcomment);
        titleinput.value="";
        contentinput.value="";
        nameinput.value="";
        closeaddwindow();
    }
    
})

const addcomment = (title,content,name,date)=>{
    comments.push({
        title,content,name,date
    })
    localStorage.setItem("comments",JSON.stringify(comments));

    return{title,content,name,date};
}

