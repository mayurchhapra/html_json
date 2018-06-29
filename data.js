var html = require('./data.json');
var render = "";

function print(key){
	console.log(key);
	return key;
}

function lt(key){
	return "<"+key
}
function gt(){
	return ">";
}
function close(key){
	return "</"+key+">"
}

function attributes(){
	for(i=0;i<attributes.length;i++){
		attributes[i] in html[key]? print(attributes[i]): print(html[key][key1]); 
	}
}

function add_class(class_value){
	return " class='"+class_value+"'";
}
function add_id(id){
	return " id='"+id+"'";
}


var attributes = ["class", "id"];

for(key in html){
	render += lt(key);
	"class" in html[key]? render += add_class(html[key]['class']): '';
	"id" in html[key]? render += add_id(html[key]['id']): '';
	render += gt();

	
	render += close(key);
}

print(render)

