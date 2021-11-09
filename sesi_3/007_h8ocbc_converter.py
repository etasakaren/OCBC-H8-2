degree_sign = u"\N{Degree Sign}"
text = int(input('Input temperature: '))

def kelvin_celcius(degrees):
    print('Kelvin to Celcius and Celcius to Kelvin Method: ')
    
    ''' Kelvin to Celcius '''
    print(degrees,degree_sign, "Kelvin is", degrees - 273,degree_sign,"Celcius") 
    ''' Celcius to Kelvin '''
    print(degrees,degree_sign,"Celcius is", degrees + 273,degree_sign,"Kelvin")

def to_fahrenheit(degrees,temperature):    
    if(temperature=='Kelvin'):
        print('Kelvin to Fahrenheit Method:')
        ''' Kelvin to Fahrenheit '''
        print(degrees,degree_sign,"Kelvin is", (1.8 * (degrees - 273)) + 32,degree_sign,"Fahrenheit")
    elif(temperature=='Celcius'):
        print('Celcius to Fahrenheit Method: ')
        ''' Celcius to Fahrenheit '''
        print(degrees,degree_sign,"Celcius is", (1.8 * degrees) + 32,degree_sign,"Fahrenheit")
    else:
        print('Invalid input')

def from_fahrenheit(degrees):
    print('Fahrenheit to Kelvin and Fahrenheit to Celcius Method: ')

    ''' Fahrenheit to Kelvin '''
    print(degrees,degree_sign,"Fahrenheit is", (degrees+459.67)*(5/9),degree_sign,"Kelvin")
    ''' Fahrenheit to Celcius '''
    print(degrees,degree_sign,"Fahrenheit is", (5/9)*(degrees-32),degree_sign,"Celcius")

# Calling functions
print('\n')
kelvin_celcius(text)
print('\n')
text2 = input('Convert [Kelvin/Celcius] to Fahrenheit: ')
to_fahrenheit(text,text2)
print('\n')
from_fahrenheit(text)
