let title= document.querySelector('.title');
let turn= "x";
let squares =[]
function fuck ( num1,num2,num3)
{
    title.innerHTML = `${ squares[num1]} winnner`;
    document.getElementById('i'+num1).style.background ='#000';
    document.getElementById('i'+num2).style.background ='#000';
    document.getElementById('i'+num3).style.background ='#000';
    setInterval(function(){ title.innerHTML += '.'},1500)
    setTimeout(function(){location.reload()},5000)
}
function winnner()
{
    for ( let i=1; i<10; i++) 
    {
    squares [i] = document.getElementById('i' +i).innerHTML;
    }
    if (squares[1]== squares[2] && squares[2] == squares[3] && squares[1] !='')
    {
      
    }
    else if (squares[4]== squares[5] && squares[5] == squares[6] && squares[4] !='')
    {
        fuck ( 4,5,6)   
    }
    if (squares[7]== squares[8] && squares[8] == squares[9] && squares[8] !='')
    {
        fuck ( 7,8,9)  
    }


    if (squares[1]== squares[4] && squares[4] == squares[7] && squares[1] !='')
    {
        fuck ( 1,4,7)
    }

    if (squares[2]== squares[5] && squares[5] == squares[8] && squares[5] !='')
    {
        fuck ( 2,5,8)
    }

    if (squares[3]== squares[6] && squares[6] == squares[9] && squares[9] !='')
    {
        fuck ( 3,6,9)
    }

    if (squares[1]== squares[5] && squares[5] == squares[9] && squares[1] !='')
    {
        fuck ( 1,5,9)   
    }

    if (squares[3]== squares[5] && squares[5] == squares[7] && squares[7] !='')
    {
        fuck ( 3,5,7)
    }
}
function game(id)
{
  let element = document.getElementById(id);
  if( turn==="x" && element.innerHTML == '')
  {
    element.innerHTML = "X";
     turn = "o";
    title.innerHTML = "O";
  }
else if (turn==='o' && element.innerHTML == ''){
    element.innerHTML = "0";  
    turn = "x";
    title.innerHTML = "X";
}
winnner();
}