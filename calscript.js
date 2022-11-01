//display number

function displayNum(num)
{
    console.log(num);
    i1.value+=num; //i1 is input box id
}

//clear using AC
function clearBox()
{
    i1.value="";
}

//exp evaluate

function evaluateExpression()
    {
        expression=i1.value;
        console.log(expression);
        output=eval(expression);
        i1.value=output;
    }

//clear each digit
function remove()
{
    current=i1.value;
    i1.value=current.slice(0,-1);//
}