const app = require("./app");
const cors = require( "cors" );

const port = process.env.PORT || 3000;

app.use( cors( { origin: `http://localhost:${ port }` } ) );

app.listen(port, () => console.log(`Server running on port ${port}`));