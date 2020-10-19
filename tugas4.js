var a = 180
var b = 169
var c = 170

if(a>b)
{
	if(a>c)
	{
		if(c>b)
		{
			console.log(a,c,b)
		}
		else
		{
			console.log(a,b,c)
		}	
	}
	else
	{
		console.log(c,a,b)
	}
		
}
else if(b>c)
{
	if(c>a)
	{
		console.log(b,c,a)
	}
	else
	{
		console.log(b,a,c)
	}
}
else
{
	console.log(c,b,a)
}