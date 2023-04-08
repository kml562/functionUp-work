function parent(){
    let name="kamal";
    function child(){
        console.log(name);
    }
    return child;
};

let callfun= parent()
console.log(callfun())