function secretPassword(message) {
	const secret = []
  if (message.length === 9 && message === message.toLowerCase() && !/[^a-zA-Z]/.test(message)) {
    const splitMessage = message.split('')
    const first = splitMessage.slice(0,3)
    const firstNum = first.join('').charCodeAt((0)) - 96
    const ThirdNum = first.join('').charCodeAt((2)) - 96
    first.splice(0,1,firstNum)
    first.splice(2,1,ThirdNum)

    const second = splitMessage.slice(3,6)
    second.reverse()
    const third = splitMessage.slice(6)
    secret.push(second,convertMessage(third), first)
    return secret.flat().join('')
	}

  return "BANG! BANG! BANG!"
  
  function convertMessage(shortMessage) {
    const newMessage = []
    for (let i = 0; i < shortMessage.length; i++) {
      if (String.fromCharCode(shortMessage.join('').charCodeAt((i))) === 'z') {
        newMessage.push('a')
      } else {
        newMessage.push(String.fromCharCode(shortMessage.join('').charCodeAt((i)) + 1))
      }
    } 
    return newMessage
  }
}