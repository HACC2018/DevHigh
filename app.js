//chat bot code
let trigger = [ ['hi'] ];
let reply = [ ['Hi, im chat bot'] ];

document.querySelector('#input').addEventListener('keypress', (e)=>{
    var key = e.which || e.keyCode;
    if(key ===13){
        let input = document.querySelector('#input').value;
        document.querySelector('#user').innerHTML = input;
        output(input);
    }
});

function output(input){
    try{
        let product = input + '=' + eval(input);
    } catch{
        let text =(input.toLowerCase()).replace(/[^w\s\d]/gi, '');
        if(compare(trigger, reply, text)){
            let product = compare(trigger, reply, text);
        } else{
            var product = text;
        }
    }
    document.querySelector('#chatBot').innerHTML = product;
    document.querySelector('#input').value = '';
}

function compare(arr, array, string){
    var item;
    for(var x = 0; x < arr.length; x++){
        for(var y = 0; y< arr.length; y++){
            if(arr[x][y] == string){
                items = arrey[x];
                item = items[Math.floor(math.random()*items.length)];
            }
        }
    }
    return item;
}

// side bar code

var sideBar = document.getElementsByClassName("sideBar");
var i;

for (i = 0; i < sideBar.length; i++) {
  sideBar[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


//search bar code 

var submit = document.getElementById("submit");
// function submit()

submit.addEventListener('click', ()=>{
    alert('no results found');
});
