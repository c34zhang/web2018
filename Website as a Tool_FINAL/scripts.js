document.addEventListener('contextmenu', event => event.preventDefault());

var text = [
	"inside",
    "this wicked code",
    "I will",
    "create reality",
	"a spellbound",
    "program",
    "so amazing",
	"it even",
    "baffles",
    "us artificial intelligences inside",
    "though artificial but genuine",
    "though not a human",
    "but has a brain",
    "though no emotions",
    "but teaches how to emote",
    "we are agents",
	"in",
    "a make believe world",
	"a world",
    "which",
	"you",
    "might",
    "even",
	"call",
	"god",
	"...."
];


var	colors = [
	"#948E8E"
];

	
var	effects = [
	"blind",
    "slide",
	"bounce",
	"fold",
    "clip",
    "fade",
	"puff",
	"pulsate"
];

var	fonts = [
	"'Inconsolata', monospace",
	"IM Fell English SC', serif",
	"Special Elite, cursive",
	"'Lucida Console', monospace"
    
];


$(document).ready(function(){
	
	var	line_count = 0;	
	var	text_effect = null;
	var	text_color = "white";
	var	r_font = null;

	function showText() {
		if (text_effect === null)
			text_effect = effects[Math.floor(Math.random() * effects.length)];
		else {

			var	new_effect = text_effect;
			while (new_effect === text_effect)
				new_effect = effects[Math.floor(Math.random() * effects.length)];
			text_effect = new_effect;
		}

		$("#text").toggle(text_effect, {}, "slow");
		
		if (line_count >= text.length) {
			setTimeout(function() {
				$("#text").toggle(effects[Math.floor(Math.random() * effects.length)], {times: 3}, "slow");
				$("#continue-el").animate({
					"opacity": "0.01"
				}, 500, "linear");
			}, 2000);
		}
	}
	
	
	function randomiseTextPos() {		
		var	r_width = (Math.floor(Math.random() * 25) + 25);

		var	text_width = (window.innerWidth / 100) * r_width;
		var	text_height = parseInt($("#text").css("height").replace('px', ''));
			
		var	y_pos = Math.floor(Math.random() * (((window.innerHeight / 4) * 2) - text_height));
		var	x_pos = Math.floor(Math.random() * (window.innerWidth - (text_width + 48)));
	
		if (r_font === null)
			r_font = fonts[Math.floor(Math.random() * fonts.length)];
		else {
			var	new_font = r_font;
			while (new_font === r_font)
				new_font = fonts[Math.floor(Math.random() * fonts.length)];
			r_font = new_font;
		}
		
		if (Math.floor(Math.random() * 2))
			var	weight = "normal";
		else 
			var	weight = "bold";
	
		if (Math.floor(Math.random() * 2))
			var	style = "italic";
		else
			var	style = "normal";
		
		$("#text-el").css({
			"margin": 0,
			"font-weight": weight,
			"font-style": style,
			"font-family": r_font,
			"width": r_width.toString() + "%",
			"height": "auto",
			"top": y_pos.toString() + "px",
			"left": x_pos.toString() + "px"
		});
	
		showText();
	}
	
	function hideText() {
		$("#text").toggle(text_effect, function() {
			$("#text").html(text[line_count++]);
			
			randomiseTextPos();
		});
	}
	
	$("body").on("click", function() {
		if (line_count < text.length)
			hideText();
	});
	
	$("#text").html("");
	$("#text").toggle("blind", function() {
		$("#text").html("WELCOME TO THE SIMULATION");
		
		showText();
	});
});

