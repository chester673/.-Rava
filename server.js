const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/api/status', (req, res) => res.json({ status: 'ok', message: 'RAVA server is running', hardware: { controller: 'ESP32-S3-N16R8', camera: 'OV3660', modem: 'A7670E' } }));
app.get('/', (req, res) => res.type('html').send('                    
            
           
            RAVA Server
            RAVA
            Robot server scaffold is running.
            API status: /api/status
            Hardware connectivity is not yet verified.
          
 n        '));
app.listen(port, '0.0.0.0', () => console.log(`RAVA server listening on ${port}`));
