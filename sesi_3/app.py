def operation(num1, num2):
    print(num1 * num2)


operation(2, 2)


def get_personal_info(name, age):
    print('My name is', name, 'and I am', age, "y. o.")


get_personal_info('Ella', 18)
get_personal_info('Aeta', 21)


def personal_info(name, age=18):
    print('My name is', name, 'and I am', age, "y. o.")


personal_info(name='Uyi')

def buy(customer, *items):
    print(customer, *items)

buy('Helen', 'Eggs', 'Flour', 'Sugar')

# Function definition is here
def changeme( mylist ):
   mylist = mylist+[1,2,3,4]
   print("\nValues inside the function : ", mylist)
   return mylist

# Now you can call changeme function
mylist = [10,20,30]
print("\nValues outside the function - before : ", mylist)
mylist = changeme( mylist )
print("\nValues outside the function - after  : ", mylist)

def changeme( mylist ):
   '''This changes a passed list into this function'''
   mylist = [1, 2, 3, 4] # This would assign new reference in mylist
   print("Values inside the function  : ", mylist)

# Now you can call changeme function
mylist = [10, 20, 30]
changeme( mylist )
print("Values outside the function : ", mylist)

# Function definition is here
def printinfo( arg1, *vartuple ):
# def printinfo(arg1, arg2, arg3, arg4):
   '''This prints a variable passed arguments'''
   print('arg1     : ', arg1)
   print('vartuple : ', vartuple)
   print('')
   
   for var in vartuple:
      print('isi vartuple : ', var) 

# Now you can call printinfo function
printinfo( 10 )
printinfo( 70, 60, 50, "a" )

def person_car(total_data, **kwargs):
  '''Create a function to print who owns what car'''
  print('Total Data : ', total_data)
  for key, value in kwargs.items():
    print('Person : ', key)
    print('Car    : ', value)
    print('')

person_car(3, jimmy='chevrolet', frank='ford', tina='honda')
person_car(3)

# Function definition is here
sum = lambda arg1, arg2: arg1 + arg2

# That lambda function will be equal to :
# def sum(arg1, arg2):
#     return arg1+arg2

# Now you can call sum as a function
print("Value of total : ", sum( 10, 20 ))
print("Value of total : ", sum( 20, 20 ))

import person
print(person.name)