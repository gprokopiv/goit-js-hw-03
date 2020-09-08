
// const temps = [12, 4, 343, 34, 3, 54, 65];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));


// const lastWeekTemps = [1, 3, 5];
// const currentTemps = [3, 7, 9, 34];
// const nextWeekTemps = [7, 9, 4];


// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);


// const a = {x: 7, y: 6,};
// const b = {x:0, z:9,};
// const c = {...a, ...b};
// // const c = Object.assign({}, a, b);
// console.log(c);

// const playlist = {
//     name: 'ree',
//     rating: 5, 
//     treck: 7,
//     // treckCount: 666,   
// };
// const {name, rating, treck, treckCount: numberOfTreck = 0, author = 'blah',} = playlist;
// console.log(name, rating, treck);
// console.log(author);
// console.log(numberOfTreck);

// const profile = {
//     name: 'hhhh',
//     tag: 'kjhgfd',
//     location: 'ferry',
//     stats : {
//         followers:6666,
//         views: 99989,
//     },
// };
// const {name, tag, location, ...restProps} = profile;
// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);


// const {name, tag, location, stats : {
//     followers, views,}} = profile;
// // const { followers, views} = stats;
// console.log(name, tag, location, followers, views);

// const authors = {
//     kiwi: 8,
//     ajax: 6,
//     mangk:2,

// };
// const entries = Object.entries(authors);
// console.log(entries);


// for (const [name, rating] of entries) {
//     console.log(name, rating);
// }

const showProfileInfo = function ({
            name, 
            tag,
            location,
            stats : {
                followers,
                views},
            }) {
        
        console.log(name, tag,  location, followers, views);
    };


const profile = {
    name: 'hhhh',
    tag: 'kjhgfd',
    location: 'ferry',
    stats : {
        followers:6666,
        views: 99989,
    },
};


showProfileInfo(profile);
















