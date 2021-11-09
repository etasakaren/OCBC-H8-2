def kelvin_celcius(degrees):
    print('Kelvin to Celcius and Celcius to Kelvin Method: ')
    
    # Kelvin to Celcius
    print(degrees, "Kelvin is", degrees - 273, "Celcius") 
    # Celcius to Kelvin
    print(degrees, "Celcius is", degrees + 273, "Kelvin")

def to_fahrenheit(degrees):
    # Calling previous function
    kelvin_celcius(degrees)
    
    print('Kelvin to Fahrenheit and Celcius to Fahrenheit Method: ')
    
    # Kelvin to Fahrenheit
    print(degrees, "Kelvin is", (1.8 * (degrees - 273)) + 32, "Fahrenheit")
    # Celcius to Fahrenheit
    print(degrees, "Celcius is", (1.8 * degrees) + 32, "Fahrenheit")

def from_fahrenheit(degrees):
    print('Fahrenheit to Kelvin and Fahrenheit to Celcius Method: ')

    # Fahrenheit to Kelvin
    print(degrees, "Fahrenheit is", (degrees+459.67)*(5/9), "Kelvin")
    # Fahrenheit to Celcius
    print(degrees, "Fahrenheit is", (5/9)*(degrees-32), "Celcius")

# Calling functions
kelvin_celcius(60)
to_fahrenheit(60)
from_fahrenheit(60)