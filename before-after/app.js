var css = `
.before img{
  height: 100%;
  position: relative;
  left: 0;
}
.after img{
  height: 100%;
  position: relative;
  right: 0;
  float: right;
}
.before {
  width: 50%;
  height: 100%;
  position: relative;
  left: 0;
  float: left;
  overflow: hidden;
}
.after {
  width: 50%;
  height: 100%;
  position: relative;
  right: 0;
  float: right;
  overflow: hidden;
}
.parent:hover{
  cursor: pointer;
}`;

var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);

function slider(){

	let parent = document.querySelectorAll(".parent");

	parent.forEach( (item) => {

		let limit = 0;
		let start = 50;

		if(item.getAttribute("limit"))
		{
			limit = item.getAttribute("limit");
		}

		if(item.getAttribute("start"))
		{
			start = item.getAttribute("start");
		}

		let parentWidth = item.offsetWidth;

		let before = item.querySelector(".before");
		let after = item.querySelector(".after");

		before.style.width = `${start}%`;
		after.style.width = `${100 - start}%`;

		let beforeImg = before.querySelector("img");
		let afterImg = after.querySelector("img");

		beforeImg.style.width = `${parentWidth}px`;
		afterImg.style.width = `${parentWidth}px`;


		item.addEventListener("mousemove", function(e) {

	  	var rect = e.target.getBoundingClientRect();

	  	var x = e.clientX - rect.left;
	  	var y = e.clientY - rect.top;

	  	var ratio = x / rect.width * 100;
		
		if(ratio > limit && ratio < 100 - limit)
		{
			before.style.width = `${ratio}%`;
			after.style.width = `${100 - ratio}%`;	
		}
			  
	});

	})

}