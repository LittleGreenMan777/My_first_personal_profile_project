var startbtn = document.getElementById("startbtn");
var infobox = document.getElementById("infobox");
var quizbox = document.getElementById("quizbox");
var endbox = document.getElementById("endbox");

startbtn.addEventListener("click",function(){
    infobox.classList.remove('active');
    quizbox.classList.add('active');
    startquiz();
})

////////////////////////////////////
const questions = [
    {
        question:"我最喜歡的運動是什麼？",
        ans:[
            {text:"籃球", correct:true},
            {text:"排球", correct:false},
            {text:"跑步", correct:false},
            {text:"巧固球", correct:false}
        ]
    },
    {
        question:"我最喜歡的一個NBA球隊是哪個？",
        ans:[
            {text:"勇士", correct:true},
            {text:"湖人", correct:false},
            {text:"塞爾提克", correct:false},
            {text:"灰熊", correct:false}
        ]
    },
    {
        question:"123",
        ans:[
            {text:"123", correct:false},
            {text:"456", correct:false},
            {text:"456", correct:false},
            {text:"789", correct:true}
        ]
    },
    {
        question:"企鵝為什麼叫企鵝？",
        ans:[
            {text:"他很有", correct:false},
            {text:"penguin", correct:false},
            {text:"不知道", correct:false},
            {text:"企有站", correct:true}
        ]
    }
]

const questionelement = document.getElementById("question");
const ansbtn = document.getElementById("ansbtn");
const nextbtn = document.getElementById("nextbtn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const setscore = document.getElementById("end-score");
const set_endtext1 = document.getElementById("end-text1");
const set_endtext2 = document.getElementById("end-text2");
const qus_text = document.getElementById("qus-text");


let score = 0;
let curindex = 0;

function startquiz(){
    curindex = 0;
    score = 0;
    Showquestion();
}

function Showquestion(){
    nextbtn.classList.remove("active");
    let curquestion = questions[curindex];
    let number = curindex+1;
    questionelement.innerText = curquestion.question;
    qus_text.innerText = number+"/10";
    curquestion.ans.forEach(answer =>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("creatbtn");
        ansbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectans);
    })
}
function selectans(e){
    nextbtn.classList.add("active");
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(ansbtn.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
}

nextbtn.addEventListener("click",function(){
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
    curindex++;
    
})

nextbtn.addEventListener("click" ,function(){
    if(curindex>1){
        endquiz();
    }
    else{
        Showquestion();
    }
})

function endquiz(){
    quizbox.classList.remove("active");
    endbox.classList.add("active");
    setscore.innerText = "恭喜你答對了 "+score+" 題";
    if(score<=2){
        set_endtext1.innerText = "遜咖再加油吧👎";
        set_endtext2.innerText = "糟糕你不了解這個世界😥";
    }
    else if(score<=8){
        set_endtext1.innerText = "恭喜你有機會上大學🙃";
        set_endtext2.innerText = "恭喜你對這個世界了解了一點點點";
    }
    else {
        set_endtext1.innerText = "Wow你真厲害!有像到我欸🤝";
        set_endtext2.innerText = "恭喜你對這個世界了解了一點";
    }
}
