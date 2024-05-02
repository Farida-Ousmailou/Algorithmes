"""This program allows you to bubble sort a table in ascending order"""


def permutation(liste, index) :
    A = liste[index]
    liste[index] = liste[index+1]
    liste[index+1] = A


def sort(liste):
    print("le table non ordoné : ", liste)
    n = len(liste)
    for i in range(n):
      for j in range(0, n-i-1):
        if liste[j] > liste[j+1]:
            permutation(liste, j)
        
    return print("le table ordoné : ",liste)


sort([23,40,2,6,98,97,500,0,5])
