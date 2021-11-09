degree_sign = u"\N{Degree Sign}"

def kelvin_celcius(degrees):
    print('Kelvin to Celcius and Celcius to Kelvin Method: ')
    
    ''' Kelvin to Celcius '''
    print(degrees,degree_sign, "Kelvin is", degrees - 273,degree_sign,"Celcius") 
    ''' Celcius to Kelvin '''
    print(degrees,degree_sign,"Celcius is", degrees + 273,degree_sign,"Kelvin")

def to_fahrenheit(degrees):
    ''' Calling previous function '''
    kelvin_celcius(degrees)
    
    print('Kelvin to Fahrenheit and Celcius to Fahrenheit Method: ')
    
    ''' Kelvin to Fahrenheit '''
    print(degrees,degree_sign,"Kelvin is", (1.8 * (degrees - 273)) + 32,degree_sign,"Fahrenheit")
    ''' Celcius to Fahrenheit '''
    print(degrees,degree_sign,"Celcius is", (1.8 * degrees) + 32,degree_sign,"Fahrenheit")

def from_fahrenheit(degrees):
    print('Fahrenheit to Kelvin and Fahrenheit to Celcius Method: ')

    ''' Fahrenheit to Kelvin '''
    print(degrees,degree_sign,"Fahrenheit is", (degrees+459.67)*(5/9),degree_sign,"Kelvin")
    ''' Fahrenheit to Celcius '''
    print(degrees,degree_sign,"Fahrenheit is", (5/9)*(degrees-32),degree_sign,"Celcius")

# Calling functions
print('\n')
kelvin_celcius(60)
print('\n')
to_fahrenheit(60)
print('\n')
from_fahrenheit(60)

# Print doc
print('\n')
print(kelvin_celcius.__doc__)
print(to_fahrenheit.__doc__)
print(from_fahrenheit.__doc__)