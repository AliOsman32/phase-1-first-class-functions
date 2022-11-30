function receivesAFunction(spy){
    return spy()
}
receivesAFunction();
function returnsANamedFunction(){
    return function Ali(){
    }
    return returnsANamedFunction
}
function returnsAnAnonymousFunction(){
    return()=>{
    }
}
returnsAnAnonymousFunction()