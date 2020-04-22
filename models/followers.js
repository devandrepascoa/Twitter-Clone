//dependencies for User class
const mongoose = require("mongoose");
const User = require("../models/user");

//User Schema
const FollowersSchema = mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    followed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Follower = module.exports = mongoose.model("Followers", FollowersSchema);

module.exports.findFollowerByIDs = (followerID, followedID, callback) => {
    Follower.findOne({ follower: { $in: followerID }, followed: { $in: followedID } }, callback);
}

module.exports.addFollower = (followerID, followedUsername, callback) => {
    User.getUserByUsername(followedUsername, (err, user) => {
        if (!err) {
            if (user != null) {
                if (followerID.toString() == user._id.toString()) {
                    callback("You can't follow yourself", null);
                } else {
                    Follower.findFollowerByIDs(followerID, user._id, (err, data) => {
                        console.log(err);
                        if (err) {
                            callback("Follower ID error", null);
                        } else {
                            if (data == null) {
                                var document = new Follower({
                                    follower: followerID,
                                    followed: user._id
                                })
                                document.save(callback);
                            } else {
                                callback("Follower already added", null);
                            }
                        }
                    })
                }
            } else {
                callback("User not found", null);
            }
        } else {
            callback("Followed username is incorrect", null);
        }
    })
}

module.exports.deleteFollower = (followerID, followedUsername, callback) => {
    User.getUserByUsername(followedUsername, (err, user) => {
        if (!err) {
            if (user != null) {
                Follower.findFollowerByIDs(followerID, user._id, (err, data) => {
                    console.log(err);
                    if (err) {
                        callback("Follower ID error", null);
                    } else {
                        if (data == null) {
                            callback("User not followed", null);
                        } else {
                            Follower.deleteOne({
                                follower: followerID,
                                followed: user._id
                            },callback);
                        }
                    }
                })
            } else {
                callback("User not found", null);
            }
        } else {
            callback("Followed username is incorrect", null);
        }
    })
}