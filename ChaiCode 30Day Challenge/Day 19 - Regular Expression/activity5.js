const password = "Password@123";
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (regex.test(password)) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}

const url = "https://www.example.com/path/to/resource";
const regex1 = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/[a-zA-Z0-9._%+-]*)*\/?$/;

if (regex1.test(url)) {
  console.log("URL is valid.");
} else {
  console.log("URL is invalid.");
}

