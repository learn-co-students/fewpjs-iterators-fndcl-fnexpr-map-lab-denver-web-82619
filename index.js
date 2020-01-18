const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
   return transform(tutorial)
  })
}

function transform(sentence){
  let splitSent = sentence.split(' ')
  let newSent = ''
  for(let word in splitSent){
    if(splitSent[word] === splitSent[0]){
      splitSent[word] = splitSent[word][0].toUpperCase() + splitSent[word].slice(1)
      newSent = splitSent[word]
    } else {
      splitSent[word] = splitSent[word][0].toUpperCase() + splitSent[word].slice(1)
      newSent = newSent + ' ' + splitSent[word]
    }
  }
  
    return newSent
}

transform('what is the difference between event capturing and bubbling?')
