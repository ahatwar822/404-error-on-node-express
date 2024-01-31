express = require('express')
path = require('path')

app = express();
port = 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});

app.get('/', function(req,res)  {
    res.sendFile(path.join(__dirname,"index.html"))
})
// for index.html we can use this also
// app.get ('/',(req,res) => {
//     res.sendFile(path.join(__dirname,'index.html'))
// })