let str = "Holden, BMW, AUDI";
document.getElementById("brand").innerHTML ="Make: " + str.slice(7,11); 

let model="M4";
document.getElementById("model").innerHTML = "Model: " + model;

let badge="Competition";
document.getElementById("badge").innerHTML = "Badge: " + badge;

let price = 159900;
document.getElementById("price").innerHTML = "Originial Price: $" + 
   price.toString();

const body = ["Coupe", "Convertible"];
document.getElementById("body").innerHTML = "Body: " + body[0];

var d = new Date();document.getElementById("year").innerHTML = "Year: " + d.getFullYear();

const date = new Date();
document.getElementById("date").innerHTML ="Visited time: " + d;

const goButton = document.querySelector('#clickme');
goButton.onclick = writeRandom;
function writeRandom(){
    let num = Math.floor(Math.random() * 50000)+100000;
    document.querySelector("#theNumber").textContent="$"+num;
}


window.onload=function(){
	var pics=document.getElementById('pic').getElementsByTagName('li');
	var ans=document.getElementById('an').getElementsByTagName('li');
	ans[0].style.background='#0653b6';
	var c=0;

	function h_slide(){
		c++;
		if(c==pics.length){c=0;}
		for(var i=0; i<pics.length; i++){
			pics[i].style.display='none';
			ans[i].style.background='black';
		}
		pics[c].style.display='block';
		ans[c].style.background='#0653b6';	
	}

	var timer=setInterval(h_slide,4000);

	for(var j=0; j<pics.length; j++){
		ans[j].index=j;
		ans[j].onmouseover=function(){
			index=this.index;
			clearInterval(timer);
			for(var k=0; k<ans.length; k++){
				pics[k].style.display='none';
				ans[k].style.background='black';
			}
			pics[index].style.display='block';
			ans[index].style.background='#0653b6';
		}

		ans[j].onmouseout=function(){
			timer=setInterval(h_slide,3000);
		}
    }
}
