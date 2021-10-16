let sizeMode = 0;

container = document.querySelector(".container");
let eachSquare15x15 = document.createElement("div");
    eachSquare15x15.classList.add("eachBox15x15")  ; 


 function printSquares15x15(){                  //prints board 15 by 15
    for(let i = 0; i<225; i++){
    
    let eachSquare15x15 = document.createElement("div");
    eachSquare15x15.classList.add("eachBox15x15") ; 
    container.appendChild(eachSquare15x15);
    
    eachSquare15x15.addEventListener("mouseover", function(){
    eachSquare15x15.style.backgroundColor = "black"
    
    sizeMode = 0;
    return sizeMode;

    }); 
    }
}

function printSquares30x30(){                //prints board 30 by 30
    for(let i = 0; i<900; i++){
    
    let eachSquare30x30 = document.createElement("div");
    eachSquare30x30.classList.add("eachBox30x30") ; 
    container.appendChild(eachSquare30x30);
    
    eachSquare30x30.addEventListener("mouseover", function(){
    eachSquare30x30.style.backgroundColor = "black"
    
    sizeMode = 1;
    return sizeMode;

    }); 
    }
}

function printSquares60x60(){                       //prints board 60 by 60
    for(let i = 0; i<3600; i++){
    
    let eachSquare60x60 = document.createElement("div");
    eachSquare60x60.classList.add("eachSquare60x60") ; 
    container.appendChild(eachSquare60x60);
    
    eachSquare60x60.addEventListener("mouseover", function(){
    eachSquare60x60.style.backgroundColor = "black"
   
    sizeMode = 2;
    return sizeMode;

    }); 
    }
}

printSquares15x15()  //starting board


clearButton = document.querySelector(".btnClear")          //clear btn 
clearButton.addEventListener('click', function(){
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if(sizeMode === 0){                           //check which board size when clearing  
        printSquares15x15()
    }else if(sizeMode === 1){
        printSquares30x30()
    }else if(sizeMode === 2){
        printSquares60x60()
    }
});

btn15x15 = document.querySelector(".btn15x15")
btn15x15.addEventListener('click', function(){
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    printSquares15x15()
});

btn30x30 = document.querySelector(".btn30x30")
btn30x30.addEventListener('click', function(){
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    printSquares30x30()
});

btn60x60 = document.querySelector(".btn60x60")
btn60x60.addEventListener('click', function(){
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    printSquares60x60()
});





   