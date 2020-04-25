//API dependencies
const express = require("express");
const passport = require("passport");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");
const Filter = require("bad-words");
const mime = require('mime-types')
const multer = require("multer");
const User = require("../models/user");
const Cyclic = require("../models/cyclic");
const Tweet = require("../models/tweet");
const Follower = require("../models/followers");
const fs = require('fs');
const router = express.Router();
const filter = new Filter();

const STORAGE_PATH = "./uploads/"

//Storage engine that includes strategies for the destination path and filename for the multer receiver.
const storageProfilePic = multer.diskStorage({
    destination: (req, file, callback) => {
        ensureExists(STORAGE_PATH + req.user._id, 0744, function (err) {
            if (err) throw err;
        });
        callback(null, STORAGE_PATH + req.user._id + "/");
    },
    filename: (req, file, callback) => {
        callback(null, "profile_pic_" + file.originalname);
    }
});

//Storage engine that includes strategies for the destination path and filename for the multer receiver.
const storageMediaTweet = multer.diskStorage({
    destination: (req, file, callback) => {
        ensureExists(STORAGE_PATH + req.user._id, 0744, function (err) {
            if (err) throw err;
        });
        callback(null, STORAGE_PATH + req.user._id + "/");
    },
    filename: (req, file, callback) => {
        callback(null, "media_" + file.originalname);
    }
});

//Function to ensure file in named path exists, if it doesn't exist then it creates it
function ensureExists(path, mask, cb) {
    if (typeof mask == 'function') { // allow the `mask` parameter to be optional
        cb = mask;
        mask = 0777;
    }
    fs.mkdir(path, mask, function (err) {
        if (err) {
            if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
            else cb(err); // something else went wrong
        } else cb(null); // successfully created folder
    });
}

//Filter for file type of multer receiver
const fileFilterProfilePic = (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb('Allowed only .png, .jpg, .jpeg', false);
    }
}

//Filter for file type of multer receiver
const fileFilterMediaTweet = (req, file, cb) => {
    if (file.mimetype == "image/gif" || file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "video/mp4" ||
        file.mimetype == "video/webm" || file.mimetype == "video/ogg" || file.mimetype == "audio/mp3" ||
        file.mimetype == "audio/wav" || file.mimetype == "audio/ogg") {
        cb(null, true);
    } else {
        cb('Allowed only .png, .jpg, .jpeg .gif .mp4 .webm .ogg .ogg .wav .mp3', false);
    }
}

//Multer receiver
const uploadProfilePic = multer({
    storage: storageProfilePic,
    limits: {
        fileSize: 1024 * 1024 * 1 // 10 MegaByte profile pic max
    },
    fileFilter: fileFilterProfilePic
});

//Multer receiver
const uploadMediaTweet = multer({
    storage: storageMediaTweet,
    limits: {
        fileSize: 1024 * 1024 * 1024 // 1 Gigabyte   profile pic max
    },
    fileFilter: fileFilterMediaTweet
});

router.get("/", function (req, res) {
    res.send("API");
});

//Register
router.post("/register", function (req, res) {
    const user = new User({ //Instanciating new User based on request
        name: req.body.name,
        googleID: req.body.google_ID,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "User"
    });

    //Adding user to the database
    User.addUser(user, function (err, user) {
        if (err) {
            res.json({ success: false, msg: "Failed to register user, " + err });
            return;
        }
        res.json({ success: true, msg: "User successfully added!" });
    });
});

//Authentication
router.post("/authenticate", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if (password == undefined || username == undefined) {
        res.json({ success: false, msg: "Username or password are empty" })
        return;
    }
    User.getUserByUsername(username, (err, user) => {
        if (err) {
            res.json({ success: false, msg: "Error retrieving username from Database" })
            return;
        }
        if (!user) {
            res.json({ success: false, msg: "Username or password is incorrect." });
            return;
        }
        User.comparePassword(password, user.password, function (err, isMatch) {
            if (err) {
                res.json({ success: false, msg: "Error comparing passwords" })
                return;
            }
            if (!isMatch) {
                res.json({ success: false, msg: "Username or password is incorrect" })
                return;
            }
            const token = jwt.sign({ data: user }, keys.JWT.secretKey, {
                expiresIn: 604800 // 1 WEEK
            });
            Follower.find({ follower: { $in: user._id } }, (err, following) => {
                var followers = [];
                var counter = 0;
                following.forEach(entry => {
                    followers[counter] = entry.followed;
                    counter++;
                });

                res.json({
                    success: true,
                    token: "JWT " + token,
                    msg: "Succesfully Authenticated, welcome!",
                    user: {
                        _id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        role: user.role,
                        following: JSON.stringify(followers)
                    }
                })
            })
        })
    });
});

router.get("/auth/google", passport.authenticate('google', {
    session: false,
    scope: ['profile',
        , 'email']
}))

router.get("/auth/google/redirect", passport.authenticate('google', { session: false, failureRedirect: keys.FrontEndURL + "login" }), (req, res) => {
    if (req.user.exists) {
        var urlContent = encodeURIComponent(req.user.content);
        res.redirect(keys.FrontEndURL + "google/" + urlContent);
    } else {
        if (req.user.associateAccount) {
            var urlContent = encodeURIComponent(req.user.content);
            res.redirect(keys.FrontEndURL + "google/" + urlContent);
        } else {
            var urlContent = encodeURIComponent(req.user.content);
            res.redirect(keys.FrontEndURL + "google_register/" + urlContent);
        }
    }
})

//Change user data
router.put("/user/:username", passport.authenticate("jwt", { session: false }), (req, res, next) => {
    var { type = null } = req.query;
    var { username = null } = req.params;
    if (!type) {
        res.json({ success: false, msg: "No Type" });
        return;
    }
    switch (type) {
        case "AVATAR":
            change_avatar(username, req, res);
            break;
        case "USER_DATA":
            change_user_data(username, req, res);
            break;
        default:
            res.json({ success: false, msg: "Invalid Type" });
            break;
    }
})

router.get("/user/from_token", passport.authenticate("jwt", { session: false }), (req, res) => {
    User.getUserById(req.user.id, (err, user) => {
        var userData = {
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            role: user.role
        }
        if (err) {
            res.json({ success: false, user: JSON.stringify(userData) });
            return;
        }
        res.json({ success: true, user: JSON.stringify(userData) });
    })
})

router.get("/user/management", passport.authenticate("jwt", { session: false }), (req, res) => {
    User.getUserById(req.user.id, (err, user) => {
        if (err) {
            res.json({ success: false, msg: "Error" });
            return;
        }
        if (user.role != "Admin" && user.role != "Moderator") {
            res.json({ success: false, msg: "Error" });
            return;
        }
        User.find({}, (err, users) => {
            if (err) {
                res.json({ success: false, msg: err });
                return;
            }
            res.json({ success: true, users: users });
        });
    })
})


router.delete("/user/:username", passport.authenticate("jwt", { session: false }), async (req, res) => {
    var { username = null } = req.params;
    if (username == null) {
        res.json({ success: false, msg: "Username is not valid" });
        return;
    }
    let destroyerUser = await getUser(req.user.id, "ID");

    if (!destroyerUser) {
        res.json({ success: false, msg: "Destroyer user not found" });
        return;
    }
    if (destroyerUser.role != "Admin" && destroyerUser.role != "Moderator") {
        res.json({ success: false, msg: "You don't have sufficient permissions" })
        return;
    }

    let user = await getUser(username, "USERNAME");

    if (!user) {
        res.json({ success: false, msg: "User not found" });
        return;
    }
    if (user._id.toString() == destroyerUser._id.toString()) {
        res.json({ success: false, msg: "You can't delete yourself" });
        return;
    }
    if (destroyerUser.role == "Moderator" && (user.role == "Moderator" || user.role == "Admin")) {
        res.json({ success: false, msg: "You don't have sufficient permissions" })
        return;
    }
    Cyclic.deleteOneById({ _id: user._id }, (err) => {
        if (err) {
            res.json({ success: false, msg: "Error deleting user" });
            return;
        }
        res.json({ success: true, msg: "Successfully deleted user" });
    })

})

//Profile
router.get("/user/:username", passport.authenticate("jwt", { session: false }), function (req, res) {
    var { username = null } = req.params;
    User.getUserByUsername(username, (err, user) => {
        if (err != null || user == null) {
            res.json({
                success: "false",
                msg: "User not found"
            })
            return;
        }
        User.getUserById(req.user._id, (err, user) => {
            if (err != null || user == null) {
                res.json({
                    success: "false",
                    msg: "Your user was not found"
                })
                return;
            }
            if (user.role == "Admin" || user.role == "Moderator") {
                res.json({
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        username: user.username,
                        role: user.role,
                        avatar: user.avatar,
                        description: user.description
                    }
                });
                return;
            }
            res.json({
                user: {
                    _id: user._id,
                    name: user.name,
                    username: user.username,
                    role: user.role,
                    avatar: user.avatar,
                    description: user.description
                }
            });
            return;
        });

    })
});


//Follow person
router.post("/follower", passport.authenticate("jwt", { session: false }), (req, res) => {
    var username = req.body.username;
    if (username == null || username.length < 1) {
        res.json({
            success: false,
            msg: "Username is not valid"
        });
        return;
    }
    Follower.addFollower(req.user._id, username, (err, data) => {
        if (err) {
            res.json({ success: false, msg: "Failed to add follower," + err });
        } else {
            res.json({ success: true, msg: "Follower succesfully added" });
        }
    });
})

//Unfollow person
router.delete("/follower", passport.authenticate("jwt", { session: false }), (req, res) => {
    var { username = null } = req.query;
    if (username == null || username.length < 1) {
        res.json({
            success: false,
            msg: "Username is not valid"
        });
        return;
    }
    Follower.deleteFollower(req.user._id, username, (err, data) => {
        if (err) {
            res.json({ success: false, msg: "Failed to delete follower," + err });
        } else {
            res.json({ success: true, msg: "Follower succesfully deleted" });
        }
    });
})


//Retrieve followers
router.get("/follower", passport.authenticate("jwt", { session: false }), (req, res) => {

    Follower.find({ follower: { $in: req.user._id } }, (err, following) => {
        if (err) {
            res.json({
                success: false,
                following: err
            })
            return;
        }
        var followers = [];
        var counter = 0;
        following.forEach(entry => {
            User.findById(entry.followed, (err, user) => {
                if (err) {
                    res.json({
                        success: false,
                        following: err
                    })
                    return;
                }
                if (user) {
                    followers[counter] = user.username;
                    counter++;
                    if (counter == following.length) {
                        res.json({
                            success: true,
                            following: JSON.stringify(followers)
                        })
                    }
                } else {
                    Follower.deleteOne({ _id: { $in: entry._id } });
                }
            })
        });
        if (following.length == 0) {
            res.json({
                success: true,
                following: JSON.stringify([])
            })
        }
    });
})

//Tweet
router.post("/tweet", passport.authenticate("jwt", { session: false }), (req, res) => {
    if (req.body.content == null) return;
    const tweet = new Tweet({
        name: filter.clean(req.user.name),
        type: 1,
        content: filter.clean(req.body.content.toString()),
        creator_ID: req.user._id,
        creator_username: req.user.username,
        date_created: new Date().valueOf()
    })

    Tweet.addTweet(tweet, true, (err, tweet) => {
        if (err) {
            res.json({ success: false, msg: "Failed to add Tweet," + err });
            return;
        }
        res.json({ success: true, msg: "Tweet succesffuly added" });
    });
})

//Delete tweet
router.delete("/tweet", passport.authenticate("jwt", { session: false }), (req, res) => {
    var { ID = null } = req.query;
    if (ID == null || ID.length != 24) {
        res.json({
            success: false,
            msg: "No valid ID provided"
        });
        return;
    }
    Tweet.getTweetByID(ID, (err, tweet) => {
        if (err || tweet == null) {
            res.json({
                success: false,
                msg: "No Tweet found with requested ID"
            })
            return;
        }
        if (req.user._id.toString().localeCompare(tweet.creator_ID) != 0) {
            res.json({
                success: false,
                msg: "This tweet does not belong to you"
            })
            return;
        }
        Tweet.deleteOne({ _id: { $in: ID } }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "No Tweet found with requested ID"
                })
                return;
            }
            res.json({
                success: true,
                msg: "Delete tweet"
            })
        })


    })
})

//Get tweets
router.get("/tweet", (req, res) => {
    var { ID = null, username = null, limit = 5 } = req.query;
    limit = parseInt(limit) || 5;
    limit = Math.min(50, Math.max(1, limit));
    if (username == null) {
        username = null;
    } else {
        username = username.split(',');
    }
    if (ID == null || ID.length != 24) {
        if (username == null || username.length <= 0) {
            var query = Tweet.find()
                .limit(limit)
                .sort({ _id: -1 });
        } else {
            var query = Tweet.find({ creator_username: { $in: username } })
                .limit(limit)
                .sort({ _id: -1 });
        }
    } else {
        if (username == null || username.length <= 0) {
            var query = Tweet.find({ _id: { $lte: ID } })
                .limit(limit)
                .sort({ _id: -1 });
        } else {
            var query = Tweet.find({ _id: { $lte: ID }, creator_username: { $in: username } })
                .limit(limit)
                .sort({ _id: -1 });
        }
    }

    query.exec(function (err, tweets) {
        if (!err) {
            var tweetMap = [];
            var counter = 0;
            tweets.forEach(tweet => {
                tweetMap[counter] = tweet;
                counter++;
            });
            res.json({ success: true, tweets: JSON.stringify(tweetMap) });
        } else
            res.json({ success: false, msg: "Error executing query" })
    });
})

//Tweet a media file
router.post("/media", passport.authenticate("jwt", { session: false }), (req, res, next) => {
    uploadMediaTweet.single("media")(req, res, (err) => {
        if (err) {
            res.json({
                success: false,
                msg: err
            })
            return;
        }
        const file = req.file;
        if (!file) {
            res.json({
                success: false,
                msg: "No file"
            })
            return;
        }
        try {
            var mimeType = null;
            if (file.mimetype.startsWith("image")) {
                mimeType = 2;
            } else if (file.mimetype.startsWith("video")) {
                mimeType = 3;
            } else {
                mimeType = 4;
            }

            const tweet = new Tweet({
                name: filter.clean(req.user.name),
                content: "./uploads/" + req.user._id + "/media_" + file.originalname,
                type: mimeType,
                creator_ID: req.user._id,
                creator_username: req.user.username,
                date_created: new Date().valueOf()
            })

            Tweet.addTweet(tweet, false, (err, tweet) => {
                if (err) {
                    res.json({ success: false, msg: "Failed to add Tweet," + err });
                    return;
                }
                res.json({ success: true, msg: "Tweet succesffuly added" });
            });
        } catch (error) {
            res.json(
                {
                    success: false,
                    msg: error
                }
            )
        }
    })
})

//Get media file
router.get('/media', function (req, res) {
    var { profile = false, username = null, ID = null, autoplay = false } = req.query;
    if (profile) {
        if (username == null) {
            res.json({
                success: false,
            })
            return;
        }
        User.getUserByUsername(username, (err, user) => {
            if (user == null) {
                res.json({
                    success: false,
                    msg: "User not found"
                })
                return;
            }
            if (user.avatar == null) {
                res.json({
                    success: false,
                    msg: "No profile picture found"
                })
                return;
            }
            fs.stat(user.avatar, function (err, stats) {
                if (err) {
                    User.changeUserProfilePic(user._id, "", (err, user) => {
                        res.json({
                            success: false,
                            msg: "No profile picture found"
                        });
                    })
                    return;
                }
                streamData(user.avatar, stats, req, res);
            });
        })

    } else if (ID != null) {
        Tweet.getTweetByID(ID, (err, tweet) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Tweet Not found"
                })
                return;
            }
            fs.stat(tweet.content, function (err, stats) {
                if (err) {
                    Tweet.deleteOne({ _id: { $in: ID } }, (err, data) => {
                        res.json({
                            success: false,
                            msg: "No Media found with requested ID,Deleting tweet.."
                        })
                    })
                    return;
                }
                streamData(tweet.content, stats, req, res);
            });
        })

    }
});

var change_user_data = (username, req, res) => {
    User.getUserByUsername(username, (err, user) => {
        if (err) {
            res.json({ success: false, msg: "Error finding user" });
            return;
        }
        if (user == null) {
            res.json({ success: false, msg: "User not found" });
            return;
        }

        var data = {
            id: req.user._id,
            target_id: user._id,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            role: req.body.role,
            description: req.body.description
        }
        
        User.changeData(data, (err) => {
            if (err) {
                res.json({
                    success: false,
                    msg: err
                })
                return;
            }
            res.json({
                success: true,
                msg: "Succesfully changed data"
            })
        })
    });

}

var change_avatar = (username, req, res) => {
    uploadProfilePic.single("image")(req, res, (err) => {
        if (err) {
            res.json({
                success: false,
                msg: err
            })
            return;
        }

        const file = req.file;
        if (!file) {
            res.json({
                success: false,
                msg: "No file"
            })
            return;
        }
        try {
            User.changeUserProfilePic(req.user._id, "./uploads/" +
                req.user._id + "/profile_pic_" + file.originalname, (err, user) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Error uploading to database"
                        })
                        return;
                    }
                    res.json({
                        success: true,
                        msg: "File Uploaded successfully"
                    });
                })
        } catch (error) {
            res.json({
                success: false,
                msg: error
            })
        }
    })
}

//Function for streaming data
var streamData = (path, stats, req, res) => {
    try {
        const fileSize = stats.size
        const range = req.headers.range
        if (range) {
            const parts = range.replace(/bytes=/, "").split("-")
            const start = parseInt(parts[0], 10)
            const end = parts[1]
                ? parseInt(parts[1], 10)
                : fileSize - 1
            const chunksize = (end - start) + 1
            const file = fs.createReadStream(path, { start, end })
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': mime.lookup(path),
            }
            res.writeHead(206, head);
            file.pipe(res);
        } else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': mime.lookup(path),
            }
            res.writeHead(200, head)
            fs.createReadStream(path).pipe(res)
        }
    } catch (error) {
        res.json({
            success: false,
            msg: error
        })
    }
}

var getUser = (user, opts) => {
    // Return a promise to the caller that will be resolved or rejected
    // in the future. Callers can use Promise then or Await for a result.
    switch (opts) {
        case "ID":
            return new Promise((resolve, reject) => {
                User.getUserById(user, (err, user) => {
                    // If there is an error, call reject, otherwise resolve
                    err ? reject(err) : resolve(user);
                });
            });
        case "USERNAME":
            return new Promise((resolve, reject) => {
                User.getUserByUsername(user, (err, user) => {
                    // If there is an error, call reject, otherwise resolve
                    err ? reject(err) : resolve(user);
                });
            });
            break;
        default:
            throw Error("Wrong opts");
    }

}



//Exporting router
module.exports = router;