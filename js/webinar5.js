
// const username = "mango";
// const email = 'mango@mail.com';

// const signupData = {
// // username,
// // email,


// [username]: 'mango@mail.com',

// };
// console.log(signupData);


// const playlist = {
//     name: "rere",
//     rating: 5,
//     trachs: ['track-1'],
// };

// playlist.qwe = 5;
// playlist.rating = 10;
//  console.log(playlist);

// const a = [1, 2, 3];
// a.hello = 'ghghg';
// console.log(a);

// const fn = function (){
//     console.log('helooooo');
// };

// fn.helooooo = 'hjhjhj';

// console.dir(fn.helooooo);


// const playlist = {
//     name: "rere",
//     trachs: ['track-1'],
//     rating: function () {
//         console.log('this is ratinf')
//     },

// };

// playlist.rating();


// const playlist = {
//         name: "rere",
//         tracks: ['track-1'],
//         rating: 7,
//         // rating (e) {
            
//         //     console.log('hjhjh', this);
//         //     this.rating('this is ratinf');
//         // },
//         changeName(newName) {
//             this.name = 'name';
//         },
//         addTrack(track){
//             this.tracks.push('track-2');
//         },
//     updateRating(newRating){
//         this.rating = 7777;
//     }
//     };
    

//     playlist.changeName('newName');
//     playlist.addTrack('trackkk');
//     playlist.updateRating(444);

//     console.log(playlist);



// const feedback = {
//     good:10,
//     neutral: 5,
//     bad: 3,
// };
// let totalFeedback = 0;
//  const keys = Object.keys(feedback);
//  console.log(keys);
 
// //  for (const key of keys) {
// //      console.log(keys);
// //      console.log(feedback[key]);
// //  }

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     console.log(value);
//     totalFeedback+= value;
// }
// console.log('totalFeedback:', totalFeedback);

// const friends = [
//     {name: 'gggg', online: true},
//     {name: 'ffff', online: false},

// ];
// console.log(friends);


// for (const friend of friends) {
    //     console.log(friend);
    //     friend.newprop = 888;
    // }
    // console.log(friends);

// const findFriendByName = function(allFriend, friendName) {
// for (const friend of allFriends){
//     console.log(friend);
//     // console.log(friend.name=== name);
//     if (friend.name === friendName) {        
//         return "yes!!!";

// }
// }
// return 'no';
// };
// const name = [];
// const getAllNames = function(allNames) {
//     for (const friend of friends) {
//         console.log(friend.name);
//         name.push(friend.name)
//     }
// };
// console.log(getAllNames(friends));


// const getOnlineFriends = function(allFriends) {
//     const onlineFriends =[];
//     for (const friend of friends) {
//         console.log(friend);
//         console.log(friend.online);

//          if(friend.online) {
//              onlineFriends.push(friend);
//          }
//     }
//     return onlineFriends;
// };

// console.log(getOnlineFriends(friends));




// const getfriendsBynlineStatus = function(allFriends) {
// const friendsByStatus = {
//     online: [],
//     offline: [],
// };
// for (const friend of allFriends) {
//     if (friend.online) {
//         friendsByStatus.online.push(friend);
//     } else {
//         friendsByStatus.offline.push(friend);
//     } 
// } return friendsByStatus;
// };
// console.log(getfriendsBynlineStatus(friends));


