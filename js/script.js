let childs = document.querySelectorAll(".childs")
console.log(childs)
let plus = document.querySelectorAll(".plus")
console.log(plus)
let minus = document.querySelectorAll(".minus")
console.log(minus)
let quant = document.querySelectorAll(".quantity-input")
console.log(quant)
let price = document.querySelectorAll(".price-child")
console.log(price)
let like = document.querySelectorAll(".like")
console.log(like)
let likeImg = document.querySelectorAll(".like img")
console.log(likeImg)
let del = document.querySelectorAll("#delete")
console.log(del)
let tot = document.querySelector(".total")
console.log(tot)
let likeBut = document.querySelectorAll("#likebut")
console.log(likeBut)
let prixUnit = document.querySelectorAll(".prix-unit")
console.log(prixUnit[2])



//update total
function updateTotal(a){
let to = 0
for (let i=0;i<quant.length ; i++){
    to += parseInt(quant[i].value) * parseInt(prixUnit[i].value)
}
tot.textContent = "Total:  " +to + "DA"
}
//update total of one line
function updateTotaLine(a){
price[a].textContent = parseInt(quant[a].value) * parseInt(prixUnit[a].value)
}
//increment
for (let i=0;i<plus.length;i++ ){
    plus[i].addEventListener("click", pluss )
    function pluss(){ 
quant[i].value = parseInt(quant[i].value) + 1  
updateTotaLine(i)
updateTotal(i)
    }
}
//decrement
for (let i=0;i<minus.length;i++ ){
    minus[i].addEventListener("click", minuss )
    function minuss(){ 
        if(quant[i].value>0){ 
quant[i].value = parseInt(quant[i].value) - 1  
updateTotaLine(i)
updateTotal(i)
        }
    }
}

//delete
for (let i=0;i<del.length;i++ ){
    del[i].addEventListener("click", dele )
    function dele(){ 
childs[i].remove()
prixUnit[i].value = 0
updateTotal(i)
    }
}

//like
for (let i=0;i<likeBut.length;i++){
    likeBut[i].addEventListener("click", likee)
    function likee(){
        if (likeBut[i].style.color == ("red")){ 
      likeBut[i].style.color = "#E1E8EE"  
    }else {
        likeBut[i].style.color = "red" 
    }
}
}