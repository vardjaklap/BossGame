var textIn = '';
var textarea = document.getElementById("myTextarea");
textarea.addEventListener("keyup", function(event) {
    if(event.ctrlKey && event.keyCode === 13){
        textarea.value = textarea.value + '\n';
    }else if (event.keyCode === 13) {
        event.preventDefault();
        myFunction();
    }
});
var myFunction = function(){
    textIn = textIn + '<p>' + document.getElementById("myTextarea").value + '</p>';
    document.getElementById("text").innerHTML = textIn;
    document.getElementById("myTextarea").value = '';
};

/*-----------------------------------------------------*/

var path = document.createElement('a');
path.href = "http://example.com:3000/pathname/?a=52&b=10&c=qwerty&d=100500#hash";
var values = path.search.replace(/^\?/, '').split('&');
var split;
var finished = {};
var elementsShown = '';
for( i = 0; i < values.length; i++ ) {
    split = values[i].split('=');
    finished[split[0]] = split[1];
}
for(key in finished) {
    if(finished.hasOwnProperty(key)) {
        elementsShown = elementsShown + '<p>' + key + ':' + finished[key] + '</p>';
    }
}
document.getElementById("parseComponents").innerHTML = elementsShown;
/*-----------------------------------------------------*/
var cookieValue = '';
document.cookie = JSON.stringify(finished);
var showCookie = function(){
    cookieValue = '';
    var show = document.cookie.split(';');
    var showTwo = JSON.parse(show[0]);
    console.log(showTwo);
    for(key in showTwo) {
        if(showTwo.hasOwnProperty(key)) {
            cookieValue = cookieValue + '<p>' + key + ':' + showTwo[key] + '</p>';
        }
    }
    document.getElementById("cookieComponents").innerHTML = cookieValue;
};
