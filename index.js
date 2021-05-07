const express = require('express');

const server = express();
const router = express.Router();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Application working' })
});

router.get('/users', (req, res) => {
  const users = [
    {
      name: 'Bo',
      email: 'bo@bo.com',
    },
    {
      name: 'Liz',
      email: 'liz@abeth.com',
    },
  ];
  res.status(200).json({ users });
});

server.use('/', router);


server.listen(3000, () => {
  console.log('Server started on port 3000');
});



