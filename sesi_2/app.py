n = 5
while n > 0:
    n -= 1
    if n == 2:
        break
    # Break Statement
    print(n)
print('Loop ended.')

n = 5
while n > 0:
    n -= 1
    if n == 2:
        continue
    print(n)
print('Loop ended.')

a = ['foo', 'bar']
while len(a):
    print(a.pop(0))
    b = ['baz', 'qux']
    while len(b):
        print('>', b.pop(0))

n = 5
while n > 0:
    n -= 1
    print(n)

a = ['foo', 'bar', 'baz']
for i in a:
    print(i)

x = range(5)
for n in x:
    print(n)

for i in ['foo', 'bar', 'baz', 'qux']:
    if 'b' in i:
        break
    print(i)

for i in ['foo', 'bar', 'baz', 'qux']:
    if 'b' in i:
        continue
    print(i)
