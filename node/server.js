const app = require('express')();
const routes = require('./routes');
const { PORT } = require('./config/config')
var cors = require("cors");

require('./config/mongoose');
require('./config/express')(app);

app.use(cors())

app.use(routes);
app.listen(PORT, console.log(`Server is running on port ${PORT}...`));

