var w = false
var s = false
var a = false
var d = false
var ArrowUp = false
var ArrowRight = false
var ArrowLeft = false
var ArrowDown = false
var space = false

document.addEventListener("keydown", press)
document.addEventListener("keyup", release)

function press(e)
{
	if(e.keyCode == 65)
	{
		a = true
	}
	if(e.keyCode == 68)
	{
		d = true
	}
	if(e.keyCode == 87)
	{
		w = true
	}
	if(e.keyCode == 83)
	{
		s = true
	}
	if (e.keyCode ==32)
	{
		space = true 
	}
	if(e.keyCode == 38)
	{
		 ArrowUp= true
	}
	if(e.keyCode == 40)
	{
		 ArrowDown= true
	}
	if(e.keyCode == 39)
	{
		 ArrowRight= true
	}
	if(e.keyCode == 37)
	{
		 ArrowLeft= true
	}
}

function release(e)
{
	if(e.keyCode == 65)
{
		a = false
	}
	if(e.keyCode == 68)
	{
		d = false
	}
	if(e.keyCode == 87)
	{
		w = false
	}
	if(e.keyCode == 83)
	{
		s = false
	}
	if (e.keyCode ==32)
	{
		space = false
	}
	if(e.keyCode == 38)
	{
		ArrowUp = false
	}
	if(e.keyCode == 40)
	{
		 ArrowDown= false
	}
	if(e.keyCode == 39)
	{
		 ArrowRight= false
	}
	if(e.keyCode == 37)
	{
		 ArrowLeft= false
	}
}