function fade_out(elem)
{
	elem.style.opacity = 0;
	setTimeout(function(){elem.parentNode.removeChild(elem);}, 1000);
}

window.onload = function()
{
	fade_out(document.getElementById("loader"));
}
