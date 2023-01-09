num = int(input())

for i in range(num):

    testCase = input()
    score = 0
    sum = 0

    for j in testCase:
        if j == 'O':
            score += 1
            sum += score
        else:
            score = 0
    print(sum)
