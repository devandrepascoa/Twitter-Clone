module.exports = {
    FrontEndURL: "http://localhost/",
    google: {
        clientSecret: "q7uJCC5-8Tsmt-eqdCg2j3MU",
        clientID: "830295944707-0brqf2khisb45b377ff2glr67cbtguuo.apps.googleusercontent.com"
    },
    facebook: {

    },
    twitter: {

    },
    JWT: {
        secretKey: process.env.secretKey || "1"
    },
    mongodb: {
        dbURI: process.env.MONGODB_URI || "mongodb://localhost:27017/test"
    },
    aws: {
        S3_BUCKET = process.env.S3_BUCKET || "1",
        AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || "1",
        AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || "1"
    }
}
