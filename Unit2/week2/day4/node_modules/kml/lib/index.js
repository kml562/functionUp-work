/*
    goal -> dom manupilation as service
*/

var parser = require("html2hscript");
var createElement = require("virtual-dom/create-element");
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var template = require("./template.tpl");
var ejs = require("ejs");
ejs.delimiter = "?";

var myInstance = new Object;
var velement, node;

myInstance.items = [1];

var compiled = ejs.compile(template, { context: myInstance, })(); //context -> templateContext

parser(compiled.trim(), function(err, hstr) {
    var h = require("virtual-dom/h");
    velement = eval(hstr); //velement -> virtualEl
    node = createElement(velement); //node -> nativeEl
    document.body.appendChild(node); //document.body -> root

    setInterval(updateDom, 500);
});

function updateDom(){
    myInstance.items.push(myInstance.items.length + 1);
    var compiled = ejs.compile(template, { context: myInstance, })();
    parser(compiled.trim(), function(err, hstr){
        var h = require("virtual-dom/h");
        var _velement = eval(hstr);
        var patches = diff(velement, _velement);
        node = patch(node, patches);
        velement = _velement;
    });
}
