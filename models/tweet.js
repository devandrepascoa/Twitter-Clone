//dependencies for User class
const mongoose = require("mongoose");

//User Schema
const TweetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    }, content: {
        type: String,
        required: true
    },
    date_created: {
        type: Number,
        required: true
    },
    creator_username: {
        type: String,
        required: true
    },
    creator_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Tweet = module.exports = mongoose.model("Tweet", TweetSchema);

module.exports.getTweetByID = function (id, callback) {
    Tweet.findById(id, callback);
}

module.exports.getTweetByName = function (name, callback) {
    //Query for username of type username from UserSchema
    const query = { name: name }
    User.find(query, callback);
}


//Adding user to the database 
module.exports.addTweet = function (tweet, validate, callback) {
    if (validate) {
        if (!tweetIsValid(tweet)) {
            callback("Validation Error: tweet is not valid", tweet);
        } else {
            tweet.save(callback);
        }
    } else {
        tweet.save(callback);
    }
}

module.exports.getTweets = (callback) => {
    Tweet.find({}, callback);
};

function tweetIsValid(tweet) {
    if (tweet.content != null && tweet.name != null) {
        return (tweet.content.length > 140) ? false : true;
    } else
        return false;
}

