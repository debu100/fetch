// fetch with async await

const url = "./content/text.txt";

const url1 = "./json/data.json";

const url2 = "https://jsonplaceholder.typicode.com/users";

async function handlePromsie() {
  try {
    const respObj = await fetch(url); //* it's a readableStream convert it to json/text
    const textVal = await respObj.text();
    // if (textVal.status === 200) {
    console.log(textVal);
    // } else {
    //   throw new Error("Text error");
    // }
  } catch (err) {
    console.log(`${err} Some Error in text file`);
  }
}

handlePromsie()
  .then((mssg) => {
    console.log("All Set");
  })
  .catch((err) => {
    console.log("error");
  });

//? fetch(url) --> returns a promise so can't be resolved immediately needs some time for execution therefore we must use await infront of it

//? respObj.text() this thing returns a promsie as well --> so can't be resolved immediately needs some time for execution therefore we must use await infront of it

//? catch (err) { console.log(`${err} Some Error in text file`);} --> this catch block works for fetch(url), so to handle the error for the actual response we need to check whether the response.ok is true or not --> bu problem is coming when we are checking response.ok--- only error is coming even though network cal is successful you can check that on network tab---can use then() and catch() methods and add callback functions on the async function to catch errors

async function handlePromsie1() {
  try {
    const respObj2 = await fetch(url1); //* it's a readableStream convert it to json/text
    const jsonVal = await respObj2.json();
    // if (jsonVal.ok) {
    console.log(jsonVal);
    // } else {
    //   throw new Error("Text error");
    // }
  } catch (err) {
    console.log(`${err} Some Error in custom json file`);
  }
}

handlePromsie1()
  .then((mssg) => {
    console.log("All Set");
  })
  .catch((err) => {
    console.log("error");
  });

async function handlePromsie2() {
  try {
    const respObj3 = await fetch(url2); //* it's a readableStream convert it to json/text
    const jsonVal2 = await respObj3.json();
    // if (jsonVal2.ok)
    console.log(jsonVal2);
  } catch (err) {
    throw new Error("Error in json server");
    console.log(`${err} Some Error in fake json server data`);
  }
}

handlePromsie2()
  .then((mssg) => {
    console.log("All Set");
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

//? Creating a resource

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//?Updating a resource

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
