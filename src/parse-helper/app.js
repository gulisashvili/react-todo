let parseInit = () => {
  Parse.initialize("yc93ke1ctCQBlrLeZdoTC1I0ekr9X61TS3scAaXY",
    "T5NULVP4u2I6Qh6WNZatx9NJHP1Q1MuoMMdsP2Fa");

    window.fbAsyncInit = function() {
      Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId      : '793408174120032', // Facebook App ID
        // status     : true,  // check Facebook Login status
        cookie     : true,  // enable cookies to allow Parse to access the session
        xfbml      : true,  // initialize Facebook social plugins on the page
        version    : 'v2.5' // point to the latest Facebook Graph API version
      })
      // Run code after the Facebook SDK is loaded.
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];

        if (d.getElementById(id)) {return;}

        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

}

export { parseInit }
