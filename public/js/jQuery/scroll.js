/*
 * varoious animations for the scrolling buttons
 */

jQuery(document).ready(function()
{
    jQuery('.aboutscroll').click(function(event) {
        $(window).scrollTo('#about', {duration:'slow', offsetTop : '50'});
    })
    jQuery('.blogscroll').click(function(event) {
        $(window).scrollTo('#blog', {duration:'slow', offsetTop : '50'});
    })
    jQuery('.projectscroll').click(function(event) {
        $(window).scrollTo('#projects', {duration:'slow', offsetTop : '50'});
    })
    jQuery('.contactscroll').click(function(event) {
        $(window).scrollTo($(document).height());
    })
});