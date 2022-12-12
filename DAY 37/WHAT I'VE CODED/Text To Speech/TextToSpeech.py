import pyttsx3

engine = pyttsx3.init()

voices = engine.getProperty('voices')

voice = int(input("Do you want female voice or male voice\n 1 for Male\n 2 for female: "))

if voice == 1:
    engine.setProperty('voice', voices[0].id)
elif voice == 2:
    engine.setProperty('voice', voices[1].id)

else:
    print("There is only female or male what else are you looking for")

text = input("Soo qoro erayo loo badalo cod")

engine.setProperty('rate', 160)

engine.say(text)

engine.runAndWait()

again = input("Do you wanna hear it again Enter 'y' for yes or 'n' for no: ")

while again == 'y':
    voice = int(input("Do you want female voice or male voice\n 1 for Male\n 2 for female: "))

    if voice == 1:
        engine.setProperty('voice', voices[0].id)
    elif voice == 2:
        engine.setProperty('voice', voices[1].id)

    else:
        print("There is only female or male what else are you looking for brother huh😂😂😂😂😂")
        break

    text = input("Soo qoro erayo loo badalo cod")

    engine.say(text)

    engine.setProperty('rate', 160)
    engine.runAndWait()

    again = input("Do you wanna hear it again Enter 'y' for yes or 'n' for no: ")
