/**
 * Overrides JS for Jenkins
 */ 
document.observe("dom:loaded", function () {
    // Click logo, go home.
    $$('div.logo')[0].on('click', function(){ location = '/'; });
});
