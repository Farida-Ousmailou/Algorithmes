"""This program allows you to bubble sort a table in ascending order"""


def permutation(array, index) :
    A = array[index]
    array[index] = array[index+1]
    array[index+1] = A
