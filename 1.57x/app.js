/**
 * Overrides JS for Jenkins
 */ 
document.observe("dom:loaded", function () {
    //Changes logo for text:
    jQuery('#jenkins-home-link').html('<img id="jenkins-head-icon" alt="title" src="/static/57065818/images/headshot.png"> Jenkins');
    jQuery('#jenkins-head-icon').show();
    // Click logo, go home.
    $$('div.logo')[0].on('click', function(){ location = '/'; });
    
});
