let blog = {
    title: 'Objekti',
    content: 'Ovo su objekti',
    author: 'Savanovic'
};

console.log(blog);
console.log(typeof blog);

// Mozemo proveriti tip svake promenljive na ovaj nacin
// let x = 5;
// console.log(typeof x);


// Pristup osobini/propertiju u objektu
console.log(blog.title, blog.author);
console.log(blog['content']);

// Izmena jedne osobine propertija u objektu
blog.content = 'Objekti su slozeni tipovi podataka';
console.log(blog.content);

blog['author'] = 'Sava Savanovic';
console.log(blog['author']);


////////////////////////////////////////////////////////////////////////

let user = {
    username: 'Zivko',
    age: 32,
    blogs: ['Minimum', 'Maksimum', 'Averege'],
    login: function () { // moze i arrow funkcija, ne mozemo koristiti anonimne funkcije
        console.log('Ulogovani ste');
    },
    logBlogs : function () {
        // console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    test: function() {
        console.log(this); // vraca sve informacija o objketu u kojem se nalazim
    }
    


};
//login je ime funkcije, preporucuje se obicna funkcija a ne arrow
user.login();
user.logBlogs();
user.test(); // daje inofrmacije o objektu u kome se nalazi
console.log(this); //






