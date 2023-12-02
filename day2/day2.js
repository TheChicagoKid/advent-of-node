const { open } = require('node:fs/promises');

const checkColors = (colors, rgb) => {
    tokenized_colors = colors.split(';')

    for (let token of tokenized_colors) {
        amounts = token.split(',')
        for (let amount of amounts) {
            [num, color] = amount.trim().split(' ')
            if (rgb[color] < num) {
                return false;
            }
        }
    }

    return true
}

const cubeCunundrum = async (rgb) => {
    sum = 0
    
    const file = await open('input2.txt')
    for await (let line of file.readLines()) {
        tokens = line.split(':')
        colors = tokens[1]
        points = parseInt(tokens[0].split(' ')[1])

        if (checkColors(colors, rgb)) {
            sum += points
        }
    }

    console.log(sum)
}

cubeCunundrum({
    'red': 12,
    'green': 13,
    'blue': 14
})