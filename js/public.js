var Util=(function(){
    var queryString = function queryString(name) {

        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

        var regexS = "[\\?&]" + name + "=([^&#]*)";

        var regex = new RegExp(regexS);

        var results = regex.exec(window.location.search);

        if(results == null) {

            return "";

        }

        else {

            return decodeURIComponent(results[1].replace(/\+/g, " "));

        }

    };
    return {
        queryString : queryString

}
})();

Handlebars.registerHelper('ifBlank', function(value) {
    var str = value == undefined ? '' : 'c_blank';
    return new Handlebars.SafeString(str);
});

Handlebars.registerHelper('ifnone', function(value) {
    var str = value == undefined ? 'none' : '';
    return new Handlebars.SafeString(str);
});