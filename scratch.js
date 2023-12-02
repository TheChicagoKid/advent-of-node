words = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
];

function check(str, nums) {

  for (num of nums) {
    if (num.startsWith(str)) {
      return true
    }
  }

  return false
}

const digits = "1234567890";

for (word of words) {
  nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  left = 0
  right = 0

  for (s of word) {

    slice = s.slice(left, right)

    while (check(slice, nums)) {
      if (nums.includes(slice)) {
        console.log(slice)
        contiune
      }
      right++
    }
    l
  }
}
