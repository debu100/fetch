// fetch with then methods

const url = "./content/text.txt";

const url1 = "./json/data.json";

const url2 = "https://jsonplaceholder.typicode.com/users";

//? with text file
fetch(url)
  .then((resp) => {
    console.log(resp);
    //* error handling of the responseObject
    if (resp.ok) {
      return resp.text(); //as the requested file is a text file use text()
    } else {
      throw new Error("Mistake with text file");
    }
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`${err} Something went wrong`);
  });

//? with custom json file
fetch(url1)
  .then((resp) => {
    //* error handling of the responseObject
    if (resp.ok) {
      console.log(resp);
      // return resp.text();---in case of json file we can use text() as well
      return resp.json(); //as the requested file is a json file use json()
    } else {
      throw new Error("Mistakes happen");
    }
  })
  .then((result) => {
    console.log(result);
    const placeName = result.map((el) => {
      return el.place;
    });
    const pinVal = result.filter((el) => {
      return el.pincode < 666777;
    });
    const mappedPinVal = pinVal.map((el) => {
      return el.pincode;
    });
    console.log(placeName);
    console.log(pinVal);
    console.log(mappedPinVal);
  })
  .catch((err) => {
    console.log(`${err}Something went wrong`);
  });

//? with fake json server data
fetch(url2)
  .then((resp) => {
    //* error handling of the responseObject
    if (resp.ok) {
      console.log(resp);
      return resp.json();
    } else {
      throw new Error("Mistakes happen with fake server data");
    }
  })
  .then((result) => {
    console.log(result);
    const longitude = result.filter((el) => {
      return el?.address?.geo.lng < -50;
      //   return el?.addres?.geo.lng < -50; []--empty array
    });
    console.log(longitude);
  })
  .catch((err) => {
    console.log(`${err}Something went wrong`);
  });

//? fetch(url)--> returns a promsie which when resolved will give a responseObject which has abody which is a readableStream --> convert it into text() or json()  --> resp.json() --> returns a promsie which when resolved will give the actual result of the network call so, use another then() method to get the actual result
