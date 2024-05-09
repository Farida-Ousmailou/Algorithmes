

function find_digit_one (number) {
    if (number > 0){
        number_str = number.toString()
        console.log(number)

        for(let i = 0; i < number_str.length; i++){
            if(parseInt(number_str[i])==1){
                console.log((parseInt(number_str[i])))
                return parseInt(number_str[i])

            } else {
                console.log("Ce nombre ne contient pas de chiffre de 1")    
            }
        }
    } else {
        console.log(number,"est négatif")
    }
    
}

// find_digit_one(231456)


function get_vision (index, current_digit, number){
    number_str = number.toString()
    const start_index = (index - current_digit) > 0 ? index - current_digit : 0
    const end_index = (index + current_digit) > 0 ? index + current_digit : 0

    let vision = 0
    for(let i = start_index; i <= end_index; i++){
        if(i != index ) {
            vision += parseInt(number_str[i])
        }
        
    }
    console.log(start_index)
    console.log(end_index)
    console.log(vision)
    return vision
}

// get_vision(1, 3, 231456)