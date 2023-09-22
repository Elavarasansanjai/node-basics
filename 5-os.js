const os = require('os');

//info about curent user
const user = os.userInfo();
console.log(user);

// method returns to the system uptime in seconds
console.log(`The System uptine is ${os.uptime()} seconds`);

const curentOs = {
  name: os.type(),
  release: os.release(),
  totaMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(curentOs);
