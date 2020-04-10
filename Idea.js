
/////////////////////////////////
/*
Previous Ideas that didn't work out and experiments below; 
    -Use what you discovered to figure out what is going on. 
*/
/////////////////////////////////

//Final Checker that returns true or false;
/*
function finalcheck(i,j)
{
    if(right(i,j)|| left(i,j) || up(i,j) || down(i,j) || downright(i,j) || downleft(i,j) || upright(i,j) || upleft(i,j)  )
    {
        return true;
    }
    else
    {
        return false; 
    }
}

//Checker for the directions 
function right(row,col)
{
    for(let i = 0; i < 4; i++)
    {
        //Check if it is in bound 
        if((col+i) > 6)
        {
            counter = 0;
            return false;
        }
        else 
        {
            if(gameboard.rows[row].cells[col+i].style.backgroundColor == prevcolor)
            {
            counter++;
            } 
            else
            {
                counter = 0; 
            }
        }
    }
    if(counter == 4)
            {
                return true;
            }
            else
            {
                return false; 
            }

}

function left(row,col)
{
    for(let i = 0; i < 4; i++)
    {
        //Check if it is in bound 
        if((col-i)<0)
        {
            counter = 0;
            return false;
        }
        else
        {
            if(gameboard.rows[row].cells[col-i].style.backgroundColor == prevcolor)
            {
            counter++;
            } 
            else
            {
                counter = 0; 
            }
        }
    }
    if(counter == 4)
            {
                return true;
            }
            else
            {
                return false; 
            }
}

function up(row,col)
{
    for(let i = 0; i < 4; i++)
    {
        //Check if it is in bound 
        if((row-i)<0)
        {
            counter = 0; 
            return false;

        }
        else
        {
            if(gameboard.rows[row-i].cells[col].style.backgroundColor == prevcolor)
            {
            counter++;
            } 
            else
            {
                counter = 0; 
            }
        }
    }
    if(counter == 4)
            {
                return true;
            }
            else
            {
                return false; 
            }
}
function down(row,col)
{
    for(let i = 0; i < 4; i++)
    {
        //Check if it is in bound 
        if((row+i)>5)
        {
            counter = 0; 
            return false;

        }
        else
        {
            if(gameboard.rows[row+i].cells[col].style.backgroundColor == prevcolor)
            {
            counter++;
            } 
            else
            {
                counter = 0; 
            }
        }
    }
    if(counter == 4)
            {
                return true;
            }
            else
            {
                return false; 
            }

}

function upleft(row,col)
{
    for(let i = 0; i < 4; i++)
    {
        //Check if it is in bound 
        if((row-i)<0||(col-i)<0)
        {
            counter = 0; 
            return false;
        }
        else
        {
            if(gameboard.rows[row-i].cells[col-i].style.backgroundColor == prevcolor)
            {
            counter++;
            } 
            else
            {
                counter = 0; 
            }
        }
    }
    if(counter == 4)
            {
                return true;
            }
            else
            {
                return false; 
            }

}

function upright(row,col)
{
    for(let i = 0; i < 4; i++)
    {
        //Check if it is in bound 
        if((row-i)<0||(col+i)>6)
        {
            counter = 0; 
            return false;
        }
        else
        {
            if(gameboard.rows[row-i].cells[col+i].style.backgroundColor == prevcolor)
            {
            counter++;
            } 
            else
            {
                counter = 0; 
            }
        }
    }
    if(counter == 4)
            {
                return true;
            }
            else
            {
                return false; 
            }

}
function downleft(row,col)
{
    for(let i = 0; i < 4; i++)
    {
        //Check if it is in bound 
        if((row+i)>5||(col-i)<0)
        {
            counter = 0; 
            return false;
        }
        else
        {
            if(gameboard.rows[row+i].cells[col-i].style.backgroundColor == prevcolor)
            {
            counter++;
            } 
            else
            {
                counter = 0; 
            }
        }
    }
    if(counter == 4)
            {
                return true;
            }
            else
            {
                return false; 
            }

}
function downright(row,col)
{
    for(let i = 0; i < 4; i++)
    {
        //Check if it is in bound 
        if((row+i)>5||(col+i)>6)
        {
            counter = 0; 
            return false;
        }
        else
        {
            if(gameboard.rows[row+i].cells[col+i].style.backgroundColor == prevcolor)
            {
            counter++;
            } 
            else
            {
                counter = 0; 
            }
        }
    }
    if(counter == 4)
            {
                return true;
            }
            else
            {
                return false; 
            }

}


*/


//Ideas 

//Function vertical

//Function horizonal 

//Function diagonal

//Function diagonal.2 

//Function 


/*
 for (let i = totalRow -1; i > -1; i --)
            {
                if(gameboard.rows[i].cells[column].style.backgroundColor != "white")
                {
                    gameboard.rows[i].cells[column].style.backgroundColor = "red";
                }
                else
                {
                    gameboard.rows[i].cells[column].style.backgroundColor = "blue";
                }
            }
            */


/*
document.querySelectorAll('td').forEach(e => e.addEventListener("click", () => 
{
    for (let i = 0; i < gameboard.rows.length; i++) 
{
  for (let j = 0; j < gameboard.rows[i].cells.length; j++) 
{
    let gameboard = document.getElementById("gameboard");
    let row = event.target.parentNode.rowIndex;
    let column = e.target.cellIndex;
    console.log("row is "+ (row));
}
}}
));

/*

//self note: 
//let col = document.getElementsByTagName("td")[1].cellIndex;
//Gives the first index number of cell. 
//If used a for loop you can check the whole column;



/*
//Make Sure everything is loaded at the samae time 

document.addEventListener("DOMContentLoaded",function(){

    let turn = 1; 
    
    let p1Color = "red"; 
    let p2Color = "blue";
    
    document.querySelectorAll('td').forEach(e => e.addEventListener("click", () => 
    {
        let gameboard = document.getElementById("gameboard");
    
    
        for (let i = 0; i < gameboard.rows.length; i++) 
        {
          for (let j = 0; j < gameboard.rows[i].cells.length; j++) 
        {
            console.log(gameboard.rows[i].cells.length)
        }
    }
        
    }
    ));
    
    
    });
    
    
    */

    /* This literates through the whole thing 
//Make Sure everything is loaded at the samae time 

document.addEventListener("DOMContentLoaded",function(){

let turn = 1; 

let p1Color = "red"; 
let p2Color = "blue";

document.querySelectorAll('td').forEach(e => e.addEventListener("click", () => 
{
    let gameboard = document.getElementById("gameboard");
    for (let i = 0; i < gameboard.rows.length; i++) 
        {
          for (let j = 0; j < gameboard.rows[i].cells.length; j++) 
        {
    let row = event.target.parentNode.rowIndex;
    let col = gameboard.rows[i].cells[j];
    console.log(col,"row is "+ (row+1));
        }}
}
));


});


    */




    //latest versrion that works 

//Make Sure everything is loaded at the samae time 
/*
document.addEventListener("DOMContentLoaded",function(){

let turn = 1; 
let gameboard = document.getElementById("gameboard");
let p1Color = "red"; 
let p2Color = "blue";

let datacell = document.getElementsByTagName("td"); 

//Trying to log the coordinate so I can see which one i click on 
for(i = 0; i < datacell.length; i++)
{
    datacell[i].addEventListener("click",(cell) =>
    {
        let row = event.target.parentNode.rowIndex;
        let col = cell.target.cellIndex; 
        if(gameboard.rows[row].cells[col].style.backgroundColor = "white")
        {
            gameboard.rows[row].cells[col].style.backgroundColor = "blue"
        }
        else
        {
            gameboard.rows[row].cells[col].style.backgroundColor = "Red"
        }
        console.log(row,cell.target.cellIndex);

    })
}
});
*/
