console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
console.log( '1. a. My example for requested console.log is shown below:');
console.log( 'Count from 0 to 5');
for (let i=0; i<=5; i++)

//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
console.log( 'show work below:')
for (let i=0; i<=5; i++) {
  console.log(i);
}
console.log( 'changes needed to make happen are shown below');
console.log('show work: for (let i=0; i<=5 or i<6; i++)');

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
console.log( '1. b. My example for requested console.log is shown below:')
for (let i=3; i<=5; i++) {
  console.log(i);
}

//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

console.log( 'changes needed to make happen are shown below:');
console.log( 'for (let i=3; i<=5 or i<6; i++);')

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10

for (let i=2; i<=10; i+=2) {
  console.log(i)
}

let evenNumbers = [];
for (let i=2; i<=10; i+=2)[
  evenNumbers.push(i)
]
console.log(evenNumbers);

//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');


console.log( 'changes needed to make happen are shown below with result:');
console.log( 'for (let i=2; i<=10; i+=2) {');
console.log( 'console.log(1)  }');
for (let i=2; i<=10; i+=2){
  console.log(i)
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let mops=5; mops>=0; mops--){
  console.log('Mops remaining:', mops)
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars using for of:');

for ( each of stars ){
  console.log(each)
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

console.log( '3.a. Answer Below')

let i=0;
while (i<1)
{
  console.log(stars);
  i++;
}

console.log( stars[0]);

while(stars<stars.length)
{
  console.log(stars)
  stars++
}



// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

console.log( '3.b. Answer Below')

let x=0;
while(x<=5)
{
  console.log(x);
  x++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

console.log( '3.c. Answer Below')
let u=10;
while(u>=5)
{
  console.log(u);
  u--
};
