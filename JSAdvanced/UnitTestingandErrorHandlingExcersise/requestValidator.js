function test(obj) {

    let validmethods = [`GET`, `POST`, `DELETE`, `CONNECT`];
    let uripattern = /^[\w.]+$/g;
    let supportedversions = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`];
    let specialChars = [`<`, `>`, `\\`, `&`,`'`, `"`];
    if (!obj.hasOwnProperty(`method`)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (!validmethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (!obj.hasOwnProperty(`uri`) || obj.uri == "") {
        throw new Error(`Invalid request header: Invalid URI`);
        
    }
    
    if (obj.uri !== "*" && !obj.uri.match(uripattern)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (!obj.hasOwnProperty(`version`)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (!supportedversions.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (!obj.hasOwnProperty(`message`)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    for(let ch of obj.message){
        if (specialChars.includes(ch)){
            throw new Error(`Invalid request header: Invalid Message`);
        }
    }


    return obj;

}
test({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}

)