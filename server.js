var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles={
    'article-one':{
    title:'Article One|Hemraj',
    heading:'Article',
    date:'Aug 9,2017',
    content:  `<p>
                    This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
                </p>
                <p>
                    This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
                </p>
                <p>
                    This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.This is the content of article one.
                </p>`
    
},
    'article-two': { 
    title:'Article Two|Hemraj',
    heading:'Article Two',
    date:'Aug 9,2017',
    content:  `<p>
                    This is the content of article two.
                    </p>`
                    },
    'article-three': { 
    title:'Article Three|Hemraj',
    heading:'Article Three',
    date:'Aug 9,2017',
    content:  `<p>
                    This is the content of article three.
        </p>`
    }
};

  
function  createTemplate(data) {
    title=data.title;
    heading=data.heading;
    date=data.date;
    content=data.content;
             
var htmlTemplate=`<html>
    <head>
        <title>
          ${title}
          
    </title>
    <meta name="viewport" content='width=device-width ,initial-scale=1'/>
          <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
            <div>
            <a href="/">Home</a>
            </div>
            <hr/>
            <div>
                <h1>
                    ${heading}
                </h1>
                
            </div>
            <div>
                ${date}
                </div>
            <div>
                ${content}
                </div>    
            </div>
        </body>
</html>
`;
 return htmlTemplate;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res) {
    var articleName=req.parans.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
