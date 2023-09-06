const input=document.getElementById("output");
const input1=document.getElementById("output1");
let a=input.value;
 
input.addEventListener("keyup",function(){
   console.log(this.value.charCodeAt(this.value.length-1));
 a=valid(this.value);
 
console.log(a);

   const root=this.parentNode.parentNode.parentNode;
  
   
   
	root.style.backgroundColor=`#${a}`;
	if(a!=""){
	input1.value= convert(a);

	}

})
function change(value){
	const root=value.parentNode;
	
	
	const color=generateRGBColor();
	root.style.backgroundColor=color.hex;
	
	input.value=color.hex.substring(1);
	input1.value=color.rgb;

	a=input.value;
	console.log(input.value);
    
	if(value.parentNode.parentNode.lastElementChild==document.querySelector(".toast-message")){
		
		document.querySelector(".toast-message").classList.remove("toast-message-slide-in")
		document.querySelector(".toast-message").classList.add("toast-message-slide-out")
		value.parentNode.parentNode.lastElementChild.addEventListener("animationend",function(){
          this.remove();
		})
	 }
	
}

function copy(r){
	const value=r.previousElementSibling;

	let advalue=value.value;
	// console.log(r.parentNode.parentNode.parentNode.parentNode.lastElementChild.classList.contains("toast-message"));

	if(value.id=="output"){
		
	   advalue=`#${a}`;
	}
	console.log(advalue)
	
	navigator.clipboard.writeText(advalue);
	
	
	  if(r.parentNode.parentNode.parentNode.parentNode.lastElementChild.classList.contains("toast-message")){
	 	r.parentNode.parentNode.parentNode.parentNode.lastElementChild.remove();
  }
    sidebar(advalue);
	
}
function sidebar(r){
	
	let div=document.createElement('div');
	div.innerText=r + "copy";
	div.className="toast-message toast-message-slide-in";
	 document.body.appendChild(div);
}


function generateRGBColor() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	
	function getCode(value){
		let count=value.toString(16);
		
		if(count.length<2){
         count=`0${count}`;
		

		}
		return count
		    
		
		
	}

	return {
		hex:`#${getCode(red)}${getCode(green)}${getCode(blue)}`,
		rgb:`rgb(${red}, ${green}, ${blue})`,
		
	   } ;
}
function valid(key){
	let a=key.charCodeAt(key.length-1);

	 if((a>=97&&a<=102)||(a>=48&&a<=57)){
		if(key.length==3||key.length==6){
			
		return key;
		}
	 }
	 return "";
	
   }
 console.log(a);
/** 
// 
*/
 function convert(hex){
	console.log(back(hex).k1);
     const count=back(hex);
	return `rgb(${count.k1}, ${count.k2}, ${count.k3})`;

	function back(value){
		if(value.length==6){
			return{
				k1:parseInt(value.slice(0,2),16),
				k2:parseInt(value.slice(2,4),16),
				k3:parseInt(value.slice(4,5),16),
			};
		}
		else{
			return{
				k1:parseInt(value.charAt(0),16),
				k2:parseInt(value.charAt(1),16),
				k3:parseInt(value.charAt(2),16),
			};
		}
	}
 }
