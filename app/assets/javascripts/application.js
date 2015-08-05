// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(homepage);
$(document).on("page:load", homepage);

function homepage () {

	console.log("homepage is loaded")
	$("#about-me").click(function(){
	
		$(".hello-box").toggle("fast");
		$(".about-me").toggle("fast");
	});

	$("#contact-me").click(function(){
		$(".hello-box").toggle("fast");
		$(".contact-me").toggle("fast");
	})

	$(".work-one").hover(function() {
		
		$(".work-one").toggleClass("work-one_hover");
		$(".no-border-one").toggle("slow");
	});

	$(".work-two").hover(function() {
		
		$(".work-two").toggleClass("work-two_hover");
		$(".no-border-two").toggle("slow");
	});

	$(".work-three").hover(function(){
		$(".work-three").toggleClass("work-three_hover");
		$(".no-border-three").toggle("slow");
	});

	$(".work-one").click(function(){
		$(".hello-box").toggle("fast");
		$(".tic-tac-toe").toggle("fast");
		$(".work-two").toggle("fast");
		$(".work-three").toggle("fast");
	})

	$(".work-two").click(function(){
		$(".hello-box").toggle("fast");
		$(".feedyoself").toggle("fast");
		$(".work-one").toggle("fast");
		$(".work-three").toggle("fast");
	})

	$(".work-three").click(function(){
		$(".hello-box").toggle("fast");
		$(".meet-me-at").toggle("fast");
		$(".work-one").toggle("fast");
		$(".work-two").toggle("fast");
	})

	$(".close-box").click(function(){
		$(".about-me").toggle("fast");
		$(".hello-box").toggle("fast");
	})

}
