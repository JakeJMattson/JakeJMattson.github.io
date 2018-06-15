function makeSection(name)
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