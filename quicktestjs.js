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
        question:"一英尺等於？",
        ans:[
            {text:"2.2公分", correct:false},
            {text:"22公分", correct:false},
            {text:"0.0254公尺", correct:true},
            {text:"25.4公分", correct:false}
        ]
    },
    {
        question:"中文的企鵝為什麼叫企鵝？",
        ans:[
            {text:"他很有企圖心", correct:false},
            {text:"penguin聽起來像企鵝", correct:false},
            {text:"他們做事很有企劃", correct:false},
            {text:"企有站著的意思，表示站著的鵝", correct:true}
        ]
    },
    {
        question:"誰擁有最多Instagram追蹤數？",
        ans:[
            {text:"巨石強森", correct:false},
            {text:"Nike", correct:false},
            {text:"Instagram", correct:true},
            {text:"C羅", correct:false}
        ]
    },
    {
        question:"下列哪個選項消耗了1度電？",
        ans:[
            {text:"50W的電燈使用2小時", correct:false},
            {text:"1000W的冰箱使用1小時", correct:true},
            {text:"2000W的冷氣使用50分鐘", correct:false},
            {text:"125W的電風扇使用800分鐘", correct:false}
        ]
    },
    {
        question:"奧地利的英文？",
        ans:[
            {text:"Austria", correct:true},
            {text:"Australia", correct:false},
            {text:"Vienna", correct:false},
            {text:"Auckland", correct:false}
        ]
    },
    {
        question:"鹽度最高的海？",
        ans:[
            {text:"鴻海", correct:false},
            {text:"波羅的海", correct:false},
            {text:"紅海", correct:true},
            {text:"死海", correct:false}
        ]
    },
    {
        question:"幾秒算一次觀看？",
        ans:[
            {text:"Tiktok：2秒", correct:false},
            {text:"Youtube：10秒", correct:false},
            {text:"Instagram：3秒", correct:true},
            {text:"Spotify：10秒", correct:false}
        ]
    },
    {
        question:"甲酸又稱？",
        ans:[
            {text:"蟻酸", correct:true},
            {text:"乙酸", correct:false},
            {text:"檸檬酸", correct:false},
            {text:"好酸", correct:false}
        ]
    },
    {
        question:"18÷2（1+2）=？",
        ans:[
            {text:"27", correct:true},
            {text:"3", correct:false},
            {text:"0", correct:false},
            {text:"1", correct:false}
        ]
    },
    {
        question:"現在全世界大約有幾億人？",
        ans:[
            {text:"72", correct:false},
            {text:"75", correct:false},
            {text:"78", correct:false},
            {text:"80", correct:true}
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
const pre_box = document.getElementById("prebox");
const pre_score = document.getElementById("pre-score");
const pre_btn = document.getElementById("pre-btn"); 

const save_score = JSON.parse(localStorage.getItem("pre_score")) || -1;
if(save_score==-1){
}
else{
    pre_score.innerText = save_score;
}
pre_btn.addEventListener("click",function(){
    infobox.classList.add("active");
    pre_box.classList.remove("active");
})
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
        if(button.dataset.correct === "true"){
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
    if(curindex>questions.length-1){
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
    localStorage.setItem("pre_score",JSON.stringify(score));
    if(score<=2){
        set_endtext1.innerText = "遜咖再加油吧👎";
        set_endtext2.innerText = "糟糕你不了解這個世界😥";
    }
    else if(score<=7){
        set_endtext2.innerText = "我相信你再做一次會更好🙃";
        set_endtext1.innerText = "恭喜你對這個世界了解了一點點點";
    }
    else {
        set_endtext1.innerText = "Wow你真厲害!有像到我欸🤝";
        set_endtext2.innerText = "恭喜你對這個世界了解了一點";
    }
}



