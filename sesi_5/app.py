class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Pet(Person):
    def __init__(self, kind):
        self.kind = kind

    def printit(self):
        return f"{name} is {age} y.o has {self.kind}"

name = input('Input name: ')
age = int(input('Input age: '))
hannah = Person(name, age)

goldfish = input('Input pet: ')
pet = Pet(goldfish)
print(pet.printit())
