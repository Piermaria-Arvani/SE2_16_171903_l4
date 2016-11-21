//general lib
var express = require('express');
//parse URL
var url = require('url');
//inspect variables
var util = require('util');
//instantiate express
var app = express(); 
//templates
var bind = require('bind');
//gestione dei dati
var data = require('./dataManager.js');


function getEmployee(request){
    console.log("qui");
	var url_parts = url.parse(request.url, true);
	var getVar = url_parts.query;
	var id;
    var name;
    var surname;
    var level;
    var salary;
    
    id = getVar.id;
	if(getVar.id === 'undefined' || getVar.id ===''){
		id = parseInt(data.maxID()) + 1;
    }
   
    name = getVar.name;
    surname = getVar.surname;
    level = getVar.level;
    salary = getVar.salary;
    
    return new data.Employee(id, name, surname, level, salary);
}


//set port
app.set('port', (process.env.PORT || 1337));

//download scripts
app.use('/scripts', express.static(__dirname+'/scripts/'));

app.use('/', function(request, response){
	var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //accetta richieste sia da node.js che da javascript
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    headers["Content-Type"] = "text/html";
    
    var url_parts = url.parse(request.url, true);
    var getVar = url_parts.query; //aggancio un nuovo attributo
    var e = null;
    
    if(getVar.submit == "Insert Employee"){
        e = data.insertEmployee(getEmployee(request));
    }
    if(getVar.submit == "Search"){
        var id = getVar.input;
        e = data.getEmployee(id);
    }
    if(getVar.submit == "Delete"){
        var id = getVar.input;
        data.deleteEmployee(id);
    }

	
	console.log(e);
	//bind to template
	bind.toFile('tpl/home.tpl', e, 
		function(d){
			response.writeHead(200, headers);
			response.end(d);
		}
	);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});