var require = {
    baseUrl: 'js/components',
    paths: {
        ko: '../knockout/knockout-latest',
        text: '../require-text/text'
    }
};
var toParams = function (object) {
    var p = [];
    var count = 0;
    for (var key in object) {
        if (count === 0) {
            p.push("?"+key + '=' + encodeURIComponent(object[key]));
        } else {
            p.push(key + '=' + encodeURIComponent(object[key]));
        }
        count++;
    }
    return p.join('&');
};
var getJSON = function (url,data,onSuccess,onError) {
    var request = new XMLHttpRequest();
    var params = toParams(data);
    var link = url + params;
   
    request.open('GET',link, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            console.log("loaded");
            onSuccess(data);
        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        onError();
    };

    request.send();
};
