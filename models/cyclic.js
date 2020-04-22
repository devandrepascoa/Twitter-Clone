const Tweet = require("./tweet");
const User = require("./user");
const Follower = require("./followers");

module.exports.deleteOneById = function (id, callback) {
    User.getUserById(id,(err,user)=>{
        if(err){
            callback(true);
        }else{
            User.deleteOne({ _id: id }, (err, user) => {
                console.log(err);
            });
            Tweet.deleteMany({ creator_username: user.username }, (err, tweets) => {
                console.log(err);
            });
            Follower.deleteMany({ $or: [{ follower: id }, { followed: id }] }, (err, followers) => {
                console.log(err);
            });
            callback(false);
        }
    })

}

module.exports.deleteOneByUsername = function (username, callback) {
    User.getUserByUsername(username, (err, user) => {
        if (err) {
            callback(true, null);
        } else {
            var id = user._id;

            User.deleteOne({ _id: id }, (err, user) => {
                console.log(err);
            });
            Tweet.deleteMany({ _id: id }, (err, tweets) => {
                console.log(err);
            });
            Follower.deleteMany({ $or: [{ follower: id }, { followed: id }] }, (err, followers) => {
                console.log(err);
            });

            callback(false);
        }
    })
}

