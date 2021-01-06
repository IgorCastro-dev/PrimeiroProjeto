var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function(){
    if(this.value.length>=1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}
var html = document.getElementById("html")
counth = 0
    html.addEventListener("click",function(){
      if (counth == 0){
          counth = 1
          html.style.width = "100%"
          html.innerHTML +=  '<div><img src="htmlsite.jpg"></div>'
        }else{
          counth = 0
          html.innerHTML = '<p>HTML5<p>'
          html.style.width = "100%"
        }
    })
var css = document.getElementById("css")
countc = 0
    css.addEventListener("click",function(){
      if (countc == 0){
          countc = 1
          css.style.width = "100%"
          css.innerHTML +=  '<img src="imgcss.jpg">'
        }else{
          countc = 0
          css.innerHTML = '<p>CSS<p>'
          css.style.width = "200px"
        }
      })
      
var js = document.getElementById("javascript")
countj = 0
js.addEventListener("click",function(){
  if (countj == 0){
    countj = 1
    js.style.width = "100%"
    js.innerHTML +=  '<img src="imgjs.jpg">'
  }else{
    countj = 0
    js.innerHTML = '<p>JAVASCRIPT<p>'
    js.style.width = "500px"
  }
})
var py = document.getElementById("Python")
countp = 0
py.addEventListener("click",function(){
  if (countp == 0){
    countp = 1
    py.style.width = "100%"
    py.innerHTML +=  '<img src="python.jpg">'
  }else{
    countp = 0
    py.innerHTML = '<p>Python<p>'
    py.style.width = "500px"
  }
})
var C = document.getElementById("C")
countp = 0
C.addEventListener("click",function(){
  if (countc == 0){
    countc = 1
    C.style.width = "100%"
    C.innerHTML +=  '<img src="c.png">'
  }else{
    countc = 0
    C.innerHTML = '<p>C<p>'
    C.style.width = "500px"
  }
})
var sql = document.getElementById("SQL")
counts = 0
sql.addEventListener("click",function(){
  if (counts == 0){
    counts = 1
    sql.style.width = "100%"
    sql.innerHTML +=  '<img src="imagesql.png">'
  }else{
    counts = 0
    sql.innerHTML = '<p>SQL<p>'
    sql.style.width = "500px"
  }
})
