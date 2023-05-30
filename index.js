require('dotenv').config()
const  express=require('express');//express module-->
const port=process.env.PORT;//server port-->
cookieParser = require('cookie-parser')//cookies used storing id of each project-->
const path=require('path');

//mongoose module-->
const db=require('./config/mongoos');

//initialize express app--->
const app=express();

app.set('view engine', 'ejs');//template engine-->
app.set('views', path.join(__dirname, 'views')); // set views path-->


//middleware-->
app.use(express.static('assets'));//access the static assets.
app.use(express.urlencoded());//it parse the incoming request with urlencoded payload
app.use(cookieParser())
app.use('/',require('./routes'));//it routes






//listen server on port-->
app.listen(port,function(err,res){
    if(err){
        console.log("Error"+err);
        return ;
    }
   console.log("App listening on port "+port);
})