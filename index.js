const http = require('http');
const WebSocket = require('ws');
const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    logger.info('Client WebSocket connecté');

    ws.on('message', (message) => {
        logger.info('Message WebSocket reçu:', message);
        // Ici, vous pouvez traiter le message et envoyer une réponse au client
        // Par exemple, envoyer la publication à tous les clients connectés
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        logger.info('Client WebSocket déconnecté');
    });
});

const PORT = process.env.PORT || config.PORT;
server.listen(PORT, () => {
    logger.info(`Server running on PORT ${PORT}`);
});
