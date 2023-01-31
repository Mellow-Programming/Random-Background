let color_container = document.querySelector(".color-container")
let color_code = document.querySelector(".color-code")

window.addEventListener("load", () => {
  let RGB_color = RandomColorGenerator()
  console.log(RGB_color)
  color_container.style.backgroundColor = RGB_color
  color_code.innerHTML = RGB_color
})


function RandomColorGenerator() {
  let red = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)

  let rgb = `rgb(${red}, ${green}, ${blue})`

  return rgb
}

