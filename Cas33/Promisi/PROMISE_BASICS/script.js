let getSomething = () => {
    // let obj = new Promise();
    // return obj;
    return new Promise((resolve,reject) => {
        resolve("Nesto resolve...");
        // reject("Nesto reject...");
    });
}

// console.log(getSomething());

// getSomething vraca resolve ili reject
//ako vrati resolve onda se izvrsava then grana
getSomething().then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err);
});