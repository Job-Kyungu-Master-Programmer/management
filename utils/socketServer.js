// Configuration du serveur WebSocket
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client WebSocket connecté');

    ws.on('message', (message) => {
        console.log('Message WebSocket reçu:', message);
        // Envoyer le message à tous les clients connectés
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client WebSocket déconnecté');
    });
});


module.exports = socketServer