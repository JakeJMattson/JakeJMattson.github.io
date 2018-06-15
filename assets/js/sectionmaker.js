function createProject(name)
{
	//Opening tag
	document.write("<div>");
	
	//Create a button linking to the GitHub Pages site
	var site = "https://mattson543.github.io/" + name;
	document.write("<a href=" + site + " class=\"button\">" + name + "</a>");
	
	//Display the repository's star count
	var starImg = "https://img.shields.io/github/stars/mattson543/" + name + ".svg?style=social&amp";
	var starCount = "https://GitHub.com/mattson543/" + name + "/stargazers/";
	document.write("<a href= " + starCount + "><img src = " + starImg + "alt=\"GitHub stars\"></a>");
	
	//Closing tag
	document.write("</div>");
}

function createIcon(href, name, extension = ".png")
{
	//Construct arguments
	var title = " title = " + addQuotes(name);
	var alt = " alt = " + addQuotes(name);
	var src = " src = \"./assets/images/" + name + extension + "\"";
	
	//Write arguments
	document.write("<a href = " + addQuotes(href) + "><img " + title + alt + src + "/></a>");
}

function addQuotes(string)
{
	return "\"" + string + "\"";
}