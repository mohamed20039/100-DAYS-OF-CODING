from random import randint



randVal=randint(0,100)

while(True):
	guess=int(input("Geli number ka qiyaastada 0 ilaa 100"))
	if guess==randVal:
		break
	elif guess<randVal:
		print("Qiyaastada Wey Hooseysaa")
	else:
		print("Qiyaastada way badantahay")
print("Waad ku guuleystay qiyaastada")