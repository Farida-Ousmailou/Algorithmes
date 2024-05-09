
/*
Ce programme permet de verifier si dans une suite de nombre la vision du choffree la vision minimale.
Pour chaque chiffre sa vision est définie comme la somme des nombres situés de part et d'autre de lui-même, 
avec une limite établie par sa propre valeur. 
Plus concrètement, pour un chiffre x sa vision c'est la somme des x chiffres de part et d'autre de du chiffre x.
*/


function find_digit_one (number) {
    if (number > 0){

        number_str = number.toString()

        for(let i = 0; i < number_str.length; i++){
            if(parseInt(number_str[i])==1){
                return parseInt(number_str[i])

            } 
        }
    } 
    
}



function get_vision (index, current_digit, number_str){

    const start_index = (index - current_digit) > 0 ? index - current_digit : 0
    const end_index = (index + current_digit) < number_str.length ? index + current_digit : (number_str.length-1)

    let vision = 0
    for(let i = start_index; i <= end_index; i++){
        if(i != index ) {
           
            vision += parseInt(number_str[i])
        } 
    }
    return vision
}



function main (number){
    number_str = number.toString()

    const contains_digit_one = find_digit_one(number)

    if (contains_digit_one){
        let array_vision = []

        for(let i = 0; i < number_str.length; i++){
            current_digit = parseInt(number_str[i])
            vision = get_vision(i, current_digit, number_str)
            array_vision.push(vision)

            for(let j = 0; j < array_vision.length; j++) {
                let min = array_vision[0]

               if (min => array_vision[j] && number_str[i]==1){
                    min = array_vision[j]
                    return console.log(true)
               }
                
            }

        } 

    } else {
        console.log(number,"est négatif")
    }

}

main(211311)
main(211)
main(34315)




