const inputs = document.querySelectorAll(".controls input");

function changeinput(){
    const sufix = this.dataset.sizing || " ";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sufix)
    console.log(this.value)
}

inputs.forEach(input=> input.addEventListener("change", changeinput));
inputs.forEach(input => input.addEventListener('mousemove', changeinput));