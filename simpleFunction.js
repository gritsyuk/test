function makeDateSet(start, end) {
    let result = [];
    result.push(new Date(start).toISOString().substring(0, 10));
    let i = 1;
    
    let date1 = new Date(start);
    let date2 = new Date(end);
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
   
    while (i <= diffDays) { 
        let d = new Date(start);
        let newDate = new Date(d.setDate(d.getDate() + i));
        result.push(newDate.toISOString().substring(0, 10));
        i ++;
    }
    
  return result;
}
