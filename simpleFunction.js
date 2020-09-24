function makeDateSet(start, end) {
    let result = [];
    result.push(new Date(start).toISOString().substring(0, 10));
    let i = 1;
    
    while (i < 5) { 
        let d = new Date(start);
        let newDate = new Date(d.setDate(d.getDate() + i));
        result.push(newDate.toISOString().substring(0, 10));
        i ++;
    }
    
  return result;
}

let res = makeDateSet('2020-09-24', '2020-10-15');

console.log(res)
