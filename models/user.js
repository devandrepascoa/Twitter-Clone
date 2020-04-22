//dependencies for User class
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    googleID: {
        type: String,
        required: false
    },
    facebookID: {
        type: String,
        required: false
    },
    twitterID: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.changeUserProfilePic = function (id, filePath, callback) {
    User.updateOne({ _id: id }, { $set: { avatar: filePath } }, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    //Query for username of type username from UserSchema
    const query = { username: username }
    User.findOne(query, callback);
}

module.exports.getUserByEmail = function (email, callback) {
    //Query for username of type username from UserSchema
    const query = { email: email }
    User.findOne(query, callback);
}

//Adding user to the database 
module.exports.addUser = function (user, callback) {
    if (!nameIsValid(user.name)) {
        callback("Validation Error: name is not valid", user);
        return;
    } if (!usernameIsValid(user.username)) {
        callback("Validation Error: username is not valid", user);
        return;
    } else if (!passwordIsValid(user.password)) {
        callback("Validation Error: password is not valid", user);
        return;
    } else if (!emailIsValid(user.email)) {
        callback("Validation Error: email is not valid", user);
        return;
    }

    emailExists(user.email, function (exists) {
        if (exists) {
            callback("Registration Error: email already exists");
            return;
        }
        usernameExists(user.username, function (exists) {
            if (exists) {
                callback("Registration Error: username already exists");
                return;
            }
            bcrypt.genSalt(10, function (arr, salt) {
                bcrypt.hash(user.password, salt, function (err, hash) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    user.password = hash;
                    user.save(callback);
                })
            });
        })

    });
}

module.exports.comparePassword = function (password, hashedPassword, callback) {
    bcrypt.compare(password, hashedPassword, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports.changeData = function (data, callback) {

    hasRightsToChangeRole(data.target_id, data.id, (rightsRole) => {

        hasRightsToChangeData(data.target_id, data.id, (rightsRest) => {
            if (!rightsRest) {
                callback("You have no rights to change data");
                return;
            }
            if (data.role != null && !rightsRole) {
                callback("You have no rights to change role data")
                return;
            }


            if (data.email != null && emailIsValid(data.email)) {
                emailExists(data.email, (exists) => {
                    if (exists) {
                        callback("Email already exists");
                        return;
                    }
                    User.updateOne({ _id: data.target_id }, { $set: { email: data.email } }, (err, raw) => {
                        if (err) {
                            callback(err);
                            return;
                        }
                        callback(null);
                    })
                })
                return;
            }

            if (data.name != null && nameIsValid(data.name)) {
                User.updateOne({ _id: data.target_id }, { $set: { name: data.name } }, (err, raw) => {
                    if (err) {
                        callback(err);
                        return;
                    }
                    callback(null);
                });
                return;
            }

            if (data.username != null && usernameIsValid(data.username)) {
                usernameExists(data.username, (exists) => {
                    if (exists) {
                        callback("Username already exists");
                        return;
                    }
                    User.updateOne({ _id: data.target_id }, { $set: { username: data.username } }, (err, raw) => {
                        if (err) {
                            callback(err);
                            return;
                        }
                        callback(null);
                    });
                })
                return;
            }
            if (data.role != null && roleIsValid(data.role)) {
                User.updateOne({ _id: data.target_id }, { $set: { role: data.role } }, (err, raw) => {
                    if (err) {
                        callback(err);
                        return;
                    }
                    callback(null);
                })
                return;
            }
            if (data.description != null) {
                User.updateOne({ _id: data.id }, { $set: { description: data.description } }, (err, raw) => {
                    if (err) {
                        callback(err);
                        return;
                    }
                    callback(null);
                })
                return;
            }

        })
    })

}

var hasRightsToChangeData = (target_id, id, callback) => {
    if (target_id == id.toString()) {
        callback(true);
        return;
    }

    User.getUserById(target_id, (err, target_user) => {
        if (err || target_user == null) {
            callback(false);
            return;
        }
        var target_role = target_user.role;
        User.getUserById(id, (err, user) => {
            if (err || user == null) {
                callback(false);
                return;
            }

            var role = user.role;

            if (role == "Admin") {
                callback(true);
                return;
            }

            if (role == "Moderator" && (target_role == "Admin" || target_role == "Moderator")) {
                callback(false);
                return;
            }

            if (role == "Moderator" && (target_role == "User")) {
                callback(true);
                return;
            }
            callback(false);
            return;
        });
    });

}

var hasRightsToChangeRole = (target_id, id, callback) => {
    User.getUserById(id, (err, user) => {
        if (err || user == null) {
            callback(false);
            return;
        }
        var role = user.role;
        if (role == "Admin") {
            callback(true);
            return;
        }
        callback(false);
        return;
    });

}

var roleIsValid = (role) => {
    switch (role) {
        case "User":
            return true;
        case "Admin":
            return true;
        case "Moderator":
            return true;
        default:
            return false;
    }
}
//Check if email already exists in database
var emailExists = function (email, callback) {
    User.getUserByEmail(email, (err, email) => {
        if (err) {
            callback(false);
            return;
        }
        if (email) {
            callback(true);
            return;
        } else {
            callback(false);
            return;
        }
    });
}

//Check if email already exists in database
var usernameExists = function (username, callback) {
    User.getUserByUsername(username, (err, username) => {
        if (err) {
            callback(false);
            return;
        }
        if (username) {
            callback(true);
            return;
        } else {
            callback(false);
            return;
        }
    });
}


//Check if email is valid
var emailIsValid = function (email) {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
}

var usernameIsValid = function (username) {
    if (username == null || username.length < 3 || username.length > 15 || username.includes(" "))
        return false;
    else
        return true;
}

var nameIsValid = function (name) {
    if (name == null || name.length < 4 || name.length > 25)
        return false;
    else
        return true;
}

var passwordIsValid = function (password) {
    if (password == null || password.length < 8 || password.length > 25 || password.includes(" "))
        return false;
    else
        return true;
}