import random


decoder = {"rock":0, "paper":1, "scissors":2}

def user_choice() -> str:
    while True:
        user_input = input("Choose rock, paper, or scissors: ").strip().lower()
        if user_input in decoder:
            return user_input
        print("Invalid choice. Please enter rock, paper, or scissors.")

def game_logic(user_input: str) -> str:
    machine_input = random.randint(0, 2)
    difference = (decoder[user_input] - machine_input) % 3
    machine_choice = next(choice for choice, value in decoder.items() if value == machine_input)

    if difference == 0:
        result = "It's a tie."
    elif difference == 1:
        result = "You win!"
    else:
        result = "Machine wins!"

    print(f"You chose {user_input}; machine chose {machine_choice}. {result}")
    return result

def main() -> None:
    choice = user_choice()
    game_logic(choice)


if __name__ == "__main__":
    main()
