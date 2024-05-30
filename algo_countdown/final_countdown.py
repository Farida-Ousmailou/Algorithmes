import sys
import math
                

def final_countdown(n, message) : 
    
    if int(n)<=0: 
        return("Pas de compteur") 
    if not message:
        return "Pas de message"
    
    for i in range(int(n), 0, -1) : 
        if i>=60: 
            minutes = math.floor (i/60) 
            second = i%60 
            print(minutes, "\'",second, sep="") 
        elif i <= 10: 
            print(i, "...", sep="") 
        else: 
            print(i) 
    print(message.upper() , "!" , sep="") 

final_countdown(sys.argv[1], sys.argv[2])




