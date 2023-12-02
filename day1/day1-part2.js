const fs = require('fs').promises

async function calibrate() {
    const digits = '1234567890'

    const numMapper = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }

    sum = 0

    const file = await fs.open('input1.txt')
    for await (const line of file.readLines()) {
        n = line.length

        num = ''

        for (i = 0; i < n; i++) {
            if (digits.includes(line[i])) {
                num += line[i]
                break
            } else if (line[i] in numMapper) {
                nums += numMapper[line[i]]
                break
            }
        }

        for (i = n - 1; i >=0; i--) {
            if (digits.includes(line[i])) {
                num += line[i]
                break
            } else if (line[i] in numMapper) {
                nums += numMapper[line[i]]
                break
            }
        }

        console.log(num)
        sum += parseInt(num)
    }

    console.log(sum)
}

calibrate()