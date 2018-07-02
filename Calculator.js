function addnum(num)
{
	var mydiv=document.getElementById("result");
	var value=mydiv.innerHTML;
	if(value[value.length-1]==' ')
	{
		mydiv.innerHTML=num;
	}
	else {
		mydiv.innerHTML=mydiv.innerHTML+num;
	}
}
function calc(op)
{
	var mydiv=document.getElementById("result");
	var value=mydiv.innerHTML;
	var element=0,first="",second="",operation="";
	var check=false;
	for(var i=0;i<value.length;i++)
	{
		if(value[i]=='+'||value[i]=='-'||value[i]=='*'||value[i]=='/'||value[i]=='=')
		{
			check=true;
			element=i;
			operation=value[i];
		}
	}
	if(check==true)
	{
	for(var i=0;i<element;i++)
	{
		first=first+value[i];
	}
	if(element!=value.length-1)
	{
		
	for(i=1+element;i<value.length;i++)
	{
		second=second+value[i];
	}
	
	switch(operation)
	{
		case '+':
		{
			first=first*1;
			second=second*1;
			var result=first+second;
			break;
		}
		case '-':
		{
			first=first*1;
			second=second*1;
			var result=first-second;
			break;	
		}
		
		case '*':
		{
			var result=first*second;
			break;	
		}
		
		case '/':
		{
		if(second!=0){
			var result=first/second;
		}
		else
		{
			alert('Errooooor');
			result=" ";
		}
			break;	
		}
		default:
		{
			alert('Errooooor');
		}
	}
	}
	else {
	alert("Errooooooooor");
	result=" ";
	}
	if(result!=" "&&op!='=')
	{
	mydiv.innerHTML=result+op;
	}
else
{
	mydiv.innerHTML=result;
}
	}
	else
	{
		mydiv.innerHTML=value+op;	
	}
}


function DelAndClr(op)
{
	var mydiv=document.getElementById("result");
	switch(op)
	{
		case 'D':
		{
			mydiv.innerHTML=" ";
			break;
		}
		case 'C':
		{
			var value=mydiv.innerHTML;
			var result="";
			for(var i=0;i<value.length-1;i++){
			result=result+value[i];
			}
			mydiv.innerHTML=result;
		}
	}
}