
// 	for(var key in file){
// 		html = html+ '<'+key+'>';

// 		if(Object.keys(file[key]).length){
// 			for(var key1 in file[key]){
// 				console.log(file[key][key1]);
// 				html = html+ '<'+key1+'>';

// 				html = html+'</'+key1+'>'
// 			}
// 		}
// 		html = html+file['body']['content'];
// 		html = html+'</'+key+'>';
// 	}
// 	console.log(html);	

var html = require('./data.json');

var render = "";


function print(key){
	console.log(key);
	return key;
}

function open(key){
	return "<"+key+">"
}
function close(key){
	return "</"+key+">"
}

function attributes(){
	for(i=0;i<attributes.length;i++){
		attributes[i] in html[key]? print(attributes[i]): print(html[key][key1]); 
	}
}


var attributes = ["class", "id", "style","head","title"];

for(key in html){
	render += open(key);

	for(key1 in html[key]){
		render += open(key1);
		
		render += close(key1);
	}

	render += close(key);
}

print(render)

