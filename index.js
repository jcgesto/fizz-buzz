function fizzBuzz (number) {
  for (var i = 1; i <= number; i++) {
    const isMutipleOf3 = i % 3 === 0
    const isMutipleOf5 = i % 5 === 0
    let text = ''
    if (isMutipleOf3 || isMutipleOf5) {
      if (isMutipleOf3) {
        text = 'fizz'
      }
      if (isMutipleOf5) {
        text += 'buzz'
      }
    } else {
      text = i.toString()
    }
    console.log(`${text}\n`)
  }  
}

function fizzBuzzV2 (number) {
  for (var i = 1; i <= number; i++) {
    const isMutipleOf3 = i % 3 === 0
    const isMutipleOf5 = i % 5 === 0
    let text = ''
    if (isMutipleOf3 && isMutipleOf5) {
      text = 'fizzbuzz'
    } else if (isMutipleOf3) {
      text = 'fizz'
    } else if (isMutipleOf5) {
      text = 'buzz'
    } else {
      text = i.toString()
    }
    console.log(`${text}\n`)
  }  
}

fizzBuzz(process.argv[2])