$('.card').click(function() {
		$(':first-child',this).css("transform","rotateY(180deg)");
		$(':last-child',this).css("transform","rotateY(0deg)");
	} );

var arr = new Array();
		arr[0] = new Image();
		arr[0].src = 'Img/entei.jpg';
		arr[1] = new Image();
		arr[1].src = 'Img/hooh.png';	
		arr[2] = new Image();
		arr[2].src = 'Img/lugia.png';
		arr[3] = new Image();
		arr[3].src = 'Img/char.jpg';
		arr[4] = new Image();
		arr[4].src = 'Img/darkrai.png';
		arr[5] = new Image();
		arr[5].src = 'Img/ray.jpg';
	function shuffle(arr) {
	 var currentIndex = arr.length, temporaryValue, randomIndex;
	 while (0 !== currentIndex) {
	 	randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
	temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
  }

  return arr; }

 $.each(arr, function(i,elem) {
    $(elem).addClass('front');
});

$(window).bind("load", function() {
	document.getElementsByClassName("card")[0].appendChild(arr[0]);
	document.getElementsByClassName("card")[1].appendChild(arr[1]);
	document.getElementsByClassName("card")[2].appendChild(arr[2]);
	document.getElementsByClassName("card")[3].appendChild(arr[3]);
	document.getElementsByClassName("card")[4].appendChild(arr[4]);
	document.getElementsByClassName("card")[5].appendChild(arr[5]); }
	);
	 		