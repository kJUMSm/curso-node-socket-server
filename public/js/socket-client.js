// REFERENCIA DEL HTML
const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const txtMensaje = document. querySelector ('#txtMensaje')
const btnEnviar  = document. querySelector ('#btnEnviar')

 //console.log('ola mundo');

const socket = io();

socket.on( 'connect', () => {

    //console.log('Conectado');

    lbOffline.style.display = ' none ';
    lbOnline.style.display = '';


});

socket.on( 'disconnect', () => {

    //console.log('Desconectado del servidor');

    lbOffline.style.display = '';
    lbOnline.style.display = 'none';

});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});

btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date()
    }
    
    socket.emit('enviar-mensaje', payload, ( id )=> {
        console.log('desde el servidor',id);
    });

})