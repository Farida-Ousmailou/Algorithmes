import sys
import math

"""
    Effectue un compte à rebours depuis un nombre donné jusqu'à zéro, puis affiche un message.

    Args:
        n (int): Le nombre de départ pour le compte à rebours. Doit être supérieur à 0.
        message (str): Le message à afficher à la fin du compte à rebours.

    Returns:
        str: Retourne "Pas de compteur" si n est inférieur ou égal à 0.
             Retourne "Pas de message" si le message est vide.

    Comportement:
        - Si n est supérieur ou égal à 60, affiche le temps restant en minutes et secondes.
        - Si n est compris entre 1 et 10, affiche le temps restant suivi de "...".
        - Sinon, affiche simplement le nombre restant.
        - À la fin du compte à rebours, affiche le message en majuscules suivi d'un point d'exclamation.
"""

                

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




