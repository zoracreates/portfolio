export function formatDate(date) {
    date = new Date(date)
    let month = date.getMonth()+1;
    let day = date.getDate();
    const year =  date.getFullYear();
    
    if (month < 10 ) {
      month = "0" + month
    }

    if ( day < 10 ) {
      day = "0" + day
    }

    return month + "-" + day + "-" + year;
 
  }

