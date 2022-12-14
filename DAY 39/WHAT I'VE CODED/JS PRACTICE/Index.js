 const Frequency = (phrases) => {
   // letterFrequency('haha') 👉 {'h': 2, 'a': 2}
   console.log(phrases)
   // make a `frequency` object {}
   let frequency = {}
   for (const phrase of phrases) {
    // check if letter exists in frequency
     if (phrase in frequency) {
       // increment the value by +1
       frequency[phrase] += 1
       // otherwise, set the value to 1
     } else {
       frequency[phrase] = 1
     }
   }
   return frequency
 }

console.log(Frequency('lol, what are you doing later tonight lol, haha!'))