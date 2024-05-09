

function find_one (number) {
    if (number > 0){
        const number = number.split("")
        console.log(number)
        for(let i = 0; i < number.length; i++){
            if(number[i]==1){
                console.log(number[i])
                return number[i]
            } else {
                console.log("Ce nombre ne contient pas de chiffre de 1")
                
            }
        }
    } else {
        console.log(number,"est négatif")
    }
    
}

