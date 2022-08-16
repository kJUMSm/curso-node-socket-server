const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');


class Server {


    constructor(){
        this.app = express();
        this.PORT= process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.Path = {}

        
        //Middlewares
        this.middlewares();

        //Rutas de aplicacion
        this.routes();

        //Sockets
        this.sockets();
    }

    
    middlewares() {

        //CORS
        this.app.use( cors() );

        //Directorio publico
        this.app.use(express.static('public'));

    }

    routes() {

        //this.app.use(this.Path.auth, require('../routes/auth'));

    }

    sockets(){

        this.io.on("connection", socketController);
    }

    listen() {
        this.server.listen(this.PORT, () =>{
            console.log('Servidor corriendo en puerto', this.PORT)
        });
    }


}




module.exports = Server;