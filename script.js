let form = document.getElementById("MyForm");

function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
    let rad = form.radius.value;
	let vol = (4*Math.PI*rad*rad*rad)/3;
	form.volume.value =  vol.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
