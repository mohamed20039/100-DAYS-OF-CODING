n = int(input("Enter Number to calculate sum: "))
sum = 0
for num in range(0,n+1,1):
    sum = sum+num
print(f"The sum of first {n} numbers is: {sum}")