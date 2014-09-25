/**
* redirect.js 
*
* Retrieve the url hidden behind and HTML4 history hash glitch
*
* @author Ludovic Decampy <ludovic.decampy@gmail.com>
* @copyright 2014 Ludovic Decampy <ludovic.decampy@gmail.com>
* @license MIT License <http://creativecommons.org/licenses/MIT/>
*/

(function(){
    if(window.location.hash !== ''){
        var a = window.location.href; 
        //Replace root path 
        var b = a.replace(/^(http:\/\/[^\/]*\/)[^\#]*\#\/(.*)$/,'$1$2');
        //Replace relative path 
        b = b.replace(/^(http:\/\/[^\/]*\/[^\#]*\/)[^\#]*\#(\.\/)?(.*)$/,'$1$3');
        if(b !== a){
            // Do whatever during the redirection ...
            window.location = b;
        }
    }
})();