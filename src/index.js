const app = require('./app')
const config = require('./config/config')
const { onConnect } = require('./config/db.js');

let server;

onConnect
    .then(() => {
        server = app.listen(config.port, () => {
            console.log(`Listening to port ${config.port}`);
        });
    }).catch(err => console.log('err', err));

// app.listen(port, () => console.log(`Listening on Port: ${port}`));