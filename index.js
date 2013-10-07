var express = require('express');
var dot = require('dot').template;
var fs = require('fs');

var app = express();

var posts = [
	{ avatar: 'av1.gif', author: 'Jane Doe', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar vehicula enim ut convallis. Aliquam condimentum imperdiet tortor, at fermentum augue cursus vitae. Quisque libero nulla, mattis semper aliquet ac, rhoncus eget dolor. Aliquam commodo eros id justo vehicula mattis.' },
	{ avatar: 'av2.png', author: 'John Doe', text: 'Nam interdum dolor sapien. Proin nulla nisl, tempus condimentum consectetur sed, mollis a nisi. Cras id nibh pretium velit ornare rutrum. Morbi euismod leo sit amet libero sodales tempor. Integer eu tincidunt lacus. Etiam imperdiet urna pulvinar odio laoreet rhoncus. Proin id pharetra sem.' },
	{ avatar: 'av3.jpg', author: 'Jeffrey Doe', text: 'Ineger at orci vel dui tincidunt hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin et bibendum est. Fusce bibendum vestibulum dui ac aliquam. Suspendisse sodales elementum dignissim. Sed sem sapien, bibendum vel eros eu, euismod lobortis magna. Sed dictum tortor felis.' }
];

app.use(express.static('./static'));
app.use(express.bodyParser());

var postTemplate = dot(fs.readFileSync('./post.dot'));

app.get('/getpost', function (req, res) {
	res.end(postTemplate(posts[Math.floor(Math.random() * 3)]));
});

app.listen(8080);