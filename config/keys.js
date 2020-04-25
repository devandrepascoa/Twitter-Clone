module.exports = {
    FrontEndURL: "http://localhost:4200/",
    google: {
        clientSecret: "q7uJCC5-8Tsmt-eqdCg2j3MU",
        clientID: "830295944707-0brqf2khisb45b377ff2glr67cbtguuo.apps.googleusercontent.com"
    },
    facebook: {

    },
    twitter: {

    },
    JWT: {
        secretKey: "Oh yes baby wtf are you doing baby yeah"
    },
    mongodb: {
        dbURI: process.env.MONGODB_URI || "mongodb://localhost:27017/test"
    }
}
