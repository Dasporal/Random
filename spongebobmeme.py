string = list(str(input('prepare your meme : ')))
for index, i in enumerate(string):
    if index%2 == 0:
        string[index] = i
    else:
        string[index] = i.upper()
print("".join(string))
