let vars = document.querySelectorAll('li')
let yangi = document.getElementById('paydo')
let yangi1 = document.getElementById('paydo1')
let yangi2 = document.getElementById('paydo2')
let yangi3 = document.getElementById('paydo3')


for(x of vars) {
    x.addEventListener('click', function (event) {
        if(event.target.id == 'li1'){
            yangi.style.visibility = 'visible'
        }
        else if(event.target.id == 'li2' ){
            yangi1.style.visibility = 'visible'
            yangi.style.visibility = 'hidden'
        }
        else if(event.target.id == 'li3') {
            yangi2.style.visibility = 'visible'
            yangi1.style.visibility = 'hidden'
        }
        else if(event.target.id = 'li4') {
            yangi3.style.visibility = 'visible'
            yangi2.style.visibility = 'hidden'
        }
    })
}



