function mailCount(emailData) {
  let parsedEmails = parseEmails(emailData);
  let emailCount = parsedEmails.length;
  let dates = getDates(parsedEmails);
  let dateRange = range(dates);

  console.log(`Count of Email: ${emailCount}`);
  console.log(`Date Range: ${dateRange}`);
}

function parseEmails(emailData) {
  let emails = emailData.split('##||##\n\n');
  let parsedEmails = emails.map(email => {
    let parser = {};
    email.split('#\/#\n').forEach((section, index) => {
      let parsed = section.split(': ');
      if (index < 4) {
        parser[parsed[0]] = parsed[1];
      } else {
        parser.Body = section;
      }
    });
    return parser;
  });

  return parsedEmails;
}

function getDates(emailData) {
  return emailData.map(email => {
    let dateData = email.Date.split('-');
    let day = parseInt(dateData[1], 10)
    let month = parseInt(dateData[0], 10) - 1
    let year = parseInt(dateData[2], 10)

    return new Date(year, month, day);
  });
}

function range(dates) {
  dates.sort((a, b) => a.valueOf() - b.valueOf());
  return dates[0].toDateString() + ' - ' + dates[dates.length - 1].toDateString();
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
