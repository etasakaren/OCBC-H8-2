import string


def my_generator():
    print("Inside my generator\n")
    alphabet = string.ascii_lowercase[:26]

    for i in alphabet:
        yield i


print(list(my_generator()))

# ------------------------------


def counter_generator(low, high):
    while low <= high:
        yield low
        low += 1


for i in counter_generator(0, 9):
    print(i, end=' ')

# -------------------------------


def say_hello(name):
    return f"\nHello {name}"


def greet_bob(greeter_func):
    return greeter_func("Person")


print(greet_bob(say_hello))

# ------------------------------


def parent(num):
    def first_child():
        return print("Hi, I am Emma")

    def second_child():
        return print("Call me Liam")

    if num == 1:
        return first_child
    else:
        return second_child


first = parent(1)
first()

# ------------------------------------

def simpleGeneratorFun():
    yield 1
    yield 2
    yield 3

x = simpleGeneratorFun()

print(next(x))
print(next(simpleGeneratorFun()))
print(next(x))
print(next(simpleGeneratorFun()))

# ------------------------------------

def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_whee():
    print("Whee!")

# say_whee = my_decorator(say_whee)
say_whee()

# ---------------------------------------------

import functools

def decorator(func):
    @functools.wraps(func)
    def wrapper_decorator(*args, **kwargs):
        # Do something before
        value = func(*args, **kwargs)
        # Do something after
        return value
    return wrapper_decorator

# --------------------------------

import functools
import time

def timer(func):
    """Print the runtime of the decorated function"""
    @functools.wraps(func)
    def wrapper_timer(*args, **kwargs):
        start_time = time.perf_counter()    # 1
        value = func(*args, **kwargs)
        end_time = time.perf_counter()      # 2
        run_time = end_time - start_time    # 3
        print(f"Finished {func.__name__!r} in {run_time:.4f} secs")
        return value
    return wrapper_timer

@timer
def waste_some_time(num_times):
    for _ in range(num_times):
        sum([i**2 for i in range(10000)])