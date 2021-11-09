import sys

try:
   f = open("Hack8_Sample_Text.txt", encoding = 'utf-8')
   print(f.read())
finally:
   f.close()

f = open("sample.txt",'w',encoding = 'utf-8')
f.write("\nHello\n")
f.write("This is a sample file\n\n")
f.write("I created it with python\n")

f = open ('sample.txt', 'r', encoding='utf-8')
print(f.read())
print(f.tell())

# x = 10
# if x > 5:
#     raise Exception('x should not exceed 5. The value of x was: {}'.format(x))

# def check_coins(coins):
#     assert (coins == 10), "Some coins fell down on the way."

# coins = 8
# try:
#     check_coins(coins)
# except:
#     raise Exception('Some coins fell in except.')
    
def os_interaction():
    assert ('win32' in sys.platform), "This code runs on Windows only."
    # assert ('linux' in sys.platform), "Function can only run on Linux systems."
    print('Doing something.')

# try:
#     os_interaction()
#     print("Try")
# except:
#     print("Except")
#     pass

# Have a look at the following example:

try:
    os_interaction()
except AssertionError as error:
    print(error)
else:
    try:
        with open('file.log') as file:
            read_data = file.read()
    except FileNotFoundError as fnf_error:
        print(fnf_error)
finally:
    print('Cleaning up, irrespective of any exceptions.')