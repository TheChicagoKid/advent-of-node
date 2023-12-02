line = "Game 1: 1 green, 2 blue; 13 red, 2 blue, 3 green; 4 green, 14 red"

rgb = {
    'red': 12,
    'green': 13,
    'blue': 14
}


tokens = line.split(':')
game = tokens[0]
colors = tokens[1]
points = parseInt(game.split(' ')[1])

tokenized_colors = colors.split(';')
console.log(tokenized_colors)

for (let token of tokenized_colors) {
    amounts = token.split(',')
    console.log(amounts)
    for (let amount of amounts) {
        [num, color] = amount.trim().split(' ')
        console.log(num, color)
        if (rgb[color] >= num) {
            return false;
        }
    }
}