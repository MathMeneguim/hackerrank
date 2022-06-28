function birthday(s,d,m) {
    let matches = 0;

    for (let i = 0; i< s.length; i++) {
      let subArray = s.slice(i,i+m) 
      let sum = subArray.reduce((prev, curr) => prev + curr)

      if (sum == d) matches++
    }
    return matches
}