function createProjectSection(name, description)
{
	var html = [
	    '<div class="col-12 col-md-6 col-lg-4 pt-5 pb-3">',
	        '<div class="card mx-auto" style="max-width:400px">',
	        '<div class="mb-0" style="height:290px;overflow:hidden;background-color:#e5e5e5">',
	        	'<img src="assets/images/' + name + '.PNG" alt="Demo" class="img-fluid rounded-top" style="vertical-align:middle;min-height:100%"/>',
	        '</div>',
        		'<div class="card-body"',
        			'<h5 class="card-title" >' + name + '</h5>',
        			'<p class="card-text">' + description + '</p>',
        			'<div class="row">',
        				'<div class="col-6"><a class="btn btn-outline-secondary" href="https://JakeJMattson.github.io/' + name + '/">View Project</a></div>',
        				'<div class="col-6"><a class="btn btn-outline-secondary" href="https://github.com/JakeJMattson/' + name + '"><i class="fab fa-github"></i> GitHub</a></div>',
	        		'</div>',
	        	'</div>',
	        '</div>',
	    '</div>'
	].join("\n");

	document.write(html);
}