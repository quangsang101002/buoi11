
var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('.process span')

function processeds(processed){
   process.style.width = `${processed}% `
   value.innerText = `${processed}% `
}

range.addEventListener('mousemove', function(e){
     var rangeWidth = e.pageX - this.offsetLeft
     var processed = rangeWidth / this.offsetWidth * 100
     processed = Math.round(processed)
     processeds(processed)

})