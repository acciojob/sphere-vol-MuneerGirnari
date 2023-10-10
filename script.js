let form = document.getElementById("MyForm");

function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
    let rad = form.radius.value;
	form.volume.value =  (4*Math.PI*rad*rad*rad)/3;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
