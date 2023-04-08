<!-- ---------------------------------Closures---------------------------------------------------------------->
Closures=> In JavaScript, a "closer" is short for "closure." A closure is a function that has access to variables defined outside of its own scope, including variables defined in its parent function's scope.

This means that a closure can "remember" the values of these variables even after its parent function has finished executing. This behavior is possible because a closure retains a reference to its parent function's lexical environment.

const outerfunction=()=>{
    let outervar= "i'm a outer variable in the function";
    let x=0;  /destoye
    function inner(){
        let innervar= "i'm a inner variable in the function";
        return outerval+" "+ innervar;
    }
    return inner();
}


const invokefun= outerfunction();
<!-- it will return the inner function   -->
function init() {
  var name = "Mozilla";
  <!-- name is a local variable created by init -->
  function displayName() {
      console.log(name);
    <!-- // displayName() is the inner function, that forms the closure-->
   <!-- // use variable declared in the parent function  -->
  }
  displayName();
}
init();

<!-- ---------------------------------Lexical Scope---------------------------------------------------------------->
In JavaScript, "lexical scope" refers to the scope rules of the language that determine how variables are resolved and accessed during runtime. Lexical scope is also known as "static scoping."

When JavaScript code is executed, the JavaScript engine creates a new scope for each function that is defined. Each of these scopes has access to the variables and functions defined in the outer scopes, including the global scope.