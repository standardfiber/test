let data = [
  {
    type: 'laptop',
    user: 'John Smith',
    make: 'Lenovo',
    model: 'T460s',
    os: 'Windows 10',
    ver: 1809
  },
  {
    type: 'desktop',
    user: 'Jane Doe',
    make: 'Dell',
    model: 'Optiplex 390',
    os: 'Windows 7',
    ver: '6.1.7601'
  },
  {
    type: 'laptop',
    user: 'Tim Cook',
    make: 'Apple',
    model: 'MacBook Pro',
    os: 'macOS',
    ver: 'Mojave'
  }
];

let arrNum = prompt('Which user would you like to know about?', '');

console.log(
  `${data[arrNum].user} uses a ${data[arrNum].make} ${data[arrNum].model} ${
    data[arrNum].type
  } with ${data[arrNum].os} version ${data[arrNum].ver}.`
);
