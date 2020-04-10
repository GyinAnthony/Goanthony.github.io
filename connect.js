//Make Sure everything is loaded at the samae time 
document.addEventListener("DOMContentLoaded",function()
{

//global variables     
let playerturn = true; 
let gameboard = document.getElementById("gameboard");
let p1Color = "red"; 
let p2Color = "blue";
let playertag = document.getElementById("playertag");
let datacell = document.getElementsByTagName("td"); 
let totalRow = document.getElementById("gameboard").rows.length;
let counter = 0; 
let prevcolor = "red";
let on = true; 

//Trying to log the coordinate so I can see which one I click on(Helps Debug) 
for(i = 0; i < datacell.length; i++)
{
    datacell[i].addEventListener("click",(cell) =>
    {
        let row = event.target.parentNode.rowIndex;
        let col = cell.target.cellIndex; 
        console.log("Clicked Row and Column",row,cell.target.cellIndex);

    });
}

//Reset Button. Trying to change all the color back to white and make the border solid again 
let button = document.getElementById("button");
button.addEventListener("click", ()=>{
    for (let i = 0; i < gameboard.rows.length; i++) 
    {
      for (let j = 0; j < gameboard.rows[i].cells.length; j++) 
        {
            gameboard.rows[i].cells[j].style.backgroundColor = "white";
            gameboard.rows[i].cells[j].style.border = "solid";
        }
    }
    on = true;
    counter = 0;
});

//Make a event listener to every single cell in document. and play the game with it
for (let i = 0; i < gameboard.rows.length; i++) 
{
  for (let j = 0; j < gameboard.rows[i].cells.length; j++) 
    {
        gameboard.rows[i].cells[j].addEventListener("click",(cell) =>
        {
            if(on)
            {
            //Testing which row and column Im targeting 
            let row = event.target.parentNode.rowIndex;
            let column = event.target.cellIndex; 
            console.log(column);
            console.log(counter);
            //BUG! I need to figure out how to fix 
            //There is only 42 Turns in the game if all 42 turns has been played and no win then
            if (counter == 41 && finalcheck()== false)
            {
                alert("TIE Please Reset the board");
                on = false; 
            }
            else
            {
            for (let i = totalRow -1; i > -1; i --)
            {
                if(!(gameboard.rows[i].cells[column].style.backgroundColor) || gameboard.rows[i].cells[column].style.backgroundColor == "white" )
                {
                    //When Playerturn is true its player 1 and change color to red. 
                    if(playerturn == true)
                    {
                        playertag.innerHTML = "Player2!-BLUE";
                        if(gameboard.rows[i].cells[column].style.backgroundColor != p1Color && gameboard.rows[i].cells[column].style.backgroundColor != p2Color )
                        {
                        gameboard.rows[i].cells[column].style.backgroundColor = p1Color;
                        prevcolor = p1Color;
                        counter++;
                        if(finalcheck())
                        {
                            gameboard.rows[i].cells[column].style.backgroundColor = p1Color;
                            alert("player1! Red win")
                            on = false; 
                        }    
                        break;
                        }
                    }
                    //When PLayerturn is false its player 2 and change color to blue.
                    if(playerturn == false)
                    {
                        playertag.innerHTML = "Player1!-RED";
                        if(gameboard.rows[i].cells[column].style.backgroundColor != p1Color && gameboard.rows[i].cells[column].style.backgroundColor != p2Color )
                        {
                        gameboard.rows[i].cells[column].style.backgroundColor = p2Color;
                        prevcolor = p2Color;
                        counter++
                        if(finalcheck())
                        {
                            gameboard.rows[i].cells[column].style.backgroundColor = p2Color;
                            alert("player2! blue win")
                            on = false; 
                        }  
                        break;
                        }
                    }

                }
            }
        }
            //Since PlayerTurn is true and false just invert it to change turns.
            playerturn = !playerturn;
            console.log(playerturn);
    }
        })
    }
};

function finalcheck()
{
    if(yaxis() || xaxis() || diagonaldownright() || diagonalupright()) 
    {
        return true;
    }
    else
    {
        return false; 
    }
}


//Checker for the directions 
function yaxis()
{
    for (let i = 0; i < gameboard.rows.length-3; i++) 
    {
        for (let j = 0; j < gameboard.rows[i].cells.length; j++) 
        {
            if (gameboard.rows[i].cells[j].style.backgroundColor == prevcolor &&gameboard.rows[i+1].cells[j].style.backgroundColor == prevcolor  && gameboard.rows[i+2].cells[j].style.backgroundColor == prevcolor && gameboard.rows[i+3].cells[j].style.backgroundColor == prevcolor)
            {
                gameboard.rows[i].cells[j].style.border = "inset";
                gameboard.rows[i+1].cells[j].style.border = "inset";
                gameboard.rows[i+2].cells[j].style.border = "inset";
                gameboard.rows[i+3].cells[j].style.border = "inset";
                return true;
            }
            
        }
    }
}

function xaxis()
{
    for (let i = 0; i < gameboard.rows.length; i++) 
    {
        for (let j = 0; j < gameboard.rows[i].cells.length-3; j++) 
        {
            if (gameboard.rows[i].cells[j].style.backgroundColor == prevcolor &&gameboard.rows[i].cells[j+1].style.backgroundColor == prevcolor  && gameboard.rows[i].cells[j+2].style.backgroundColor == prevcolor && gameboard.rows[i].cells[j+3].style.backgroundColor == prevcolor)
            {
                gameboard.rows[i].cells[j].style.border = "inset"; 
                gameboard.rows[i].cells[j+1].style.border = "inset";  
                gameboard.rows[i].cells[j+2].style.border = "inset";
                gameboard.rows[i].cells[j+3].style.border = "inset";
                
                return true;
            }
        }
}
}

function diagonaldownright()
{
    for (let i = 0; i < gameboard.rows.length-3; i++) 
    {
        for (let j = 0; j < gameboard.rows[i].cells.length-3; j++) 
        {
            {
                console.log(gameboard.rows[i].cells[j].style.backgroundColor == prevcolor);
                if(gameboard.rows[i].cells[j].style.backgroundColor == prevcolor &&gameboard.rows[i+1].cells[j+1].style.backgroundColor == prevcolor  && gameboard.rows[i+2].cells[j+2].style.backgroundColor == prevcolor && gameboard.rows[i+3].cells[j+3].style.backgroundColor == prevcolor)
                { 
                    gameboard.rows[i].cells[j].style.border = "inset";
                    gameboard.rows[i+1].cells[j+1].style.border = "inset";
                    gameboard.rows[i+2].cells[j+2].style.border = "inset";
                    gameboard.rows[i+3].cells[j+3].style.border = "inset";                    
                return true;
                }
            }
}
    }
}

function diagonalupright()
{
    for (let i = 5; i > 2; i--) 
    {
        for (let j = 0; j < 6-2; j++) 
        {
            if(gameboard.rows[i].cells[j].style.backgroundColor == prevcolor &&gameboard.rows[i-1].cells[j+1].style.backgroundColor == prevcolor  && gameboard.rows[i-2].cells[j+2].style.backgroundColor == prevcolor && gameboard.rows[i-3].cells[j+3].style.backgroundColor == prevcolor)
            {
                gameboard.rows[i].cells[j].style.border ="inset"; 
                gameboard.rows[i-1].cells[j+1].style.border = "inset";  
                gameboard.rows[i-2].cells[j+2].style.border = "inset"; 
                gameboard.rows[i-3].cells[j+3].style.border = "inset";
                return true; 
            }
        }
    }
}







});



