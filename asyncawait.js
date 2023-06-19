console.log("person1: show ticket");
console.log("person2: show ticket");

const preMovie = async () => {
  const wifeBringTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    resolve(`popcorn`);
  });
  const getButter = new Promise((resolve, reject) => {
    resolve(`butter`);
  });

  const getColdDrinks = new Promise((resolve, reject) => {
    resolve(`cold drinks`);
  });

  let ticket = await wifeBringTicks;

  console.log("wife:There are the tickets");
  console.log("husband: we should go");
  console.log("wife:hungry!!!");
  let popcorn = await getPopcorn;

  console.log(`husband: Take these ${popcorn} and Now we should go`);
  console.log("wife: I want butter");

  let butter = await getButter;

  console.log(
    `husband: Now u have ${butter}. Lets go or we will miss the starting`
  );
  console.log("wife: I want cold drink also");

  let coldDrinks = await getColdDrinks;
  console.log(`Husband:Bought ${coldDrinks}. Anythin else?`);
  console.log("wife: Now lets watch movie");
  return ticket;
};

preMovie().then((m) => console.log(`person 3: shows ${m}`));

console.log("person4: show ticket");
console.log("person5: show ticket");
