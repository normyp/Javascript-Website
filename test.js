/**
 * Created by Paul Normington on 24/06/2015.
 */
var str = "Hello there!";

var images = [];

var printedImages = [];
var currentPic;

var j = 0;
var i = 0;

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
    printedImages.push(img);
}

function set_images()
{
	images.push('happy.jpg', 'happy1.jpg', 'happy2.jpg');
}	

function getImgs()
{
	return printedImages;
}

function delete_image()
{
	var currentPic = getImgs();
	j = currentPic.length;
	document.body.removeChild(currentPic[j-1]);
	currentPic.pop();
}

function change_image()
{
	if(i >= 2)
	{
		i = 0;
	}
	else
	{	
		i++;
	}
}

function get_images()
{
	return images;
}

function getCount()
{
	return i;
}

function print_images()
{
	console.log(images[i]);
	console.log(printedImages);
	console.log(i);
}

