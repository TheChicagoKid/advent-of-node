const s = 'a5sjgl'

const digits = '1234567890'

for (str of s) {
    if (digits.includes(str)) {
        console.log(str)
    }
}