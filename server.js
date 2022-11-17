const http = require('http');

function responderPeticion(request,response){
  response.end("Primer servidor");
}

let server = http.createServer(responderPeticion);

server.listen(3000);
