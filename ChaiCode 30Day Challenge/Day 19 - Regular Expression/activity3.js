const phone = "(123) 456-7890";
const regex = /\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/;
const match = phone.match(regex);
if (match) {
    const areaCode = match[1];
    const centralOfficeCode = match[2];
    const lineNumber = match[3];
  
    console.log(`Area Code: ${areaCode}`);
    console.log(`Central Office Code: ${centralOfficeCode}`);
    console.log(`Line Number: ${lineNumber}`);
  }


  const email = "username@example.com";
  const regex1 = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const match1 = email.match(regex1);
  
  if (match1) {
    const username = match[1];
    const domain = match[2];
  
    console.log(`Username: ${username}`);
    console.log(`Domain: ${domain}`);
  }
  