module.exports={
    google:{
        callbackURL:'/auth/google/redirect',
        clientID:'570964840609-jth3a39spl1ntil2heuft70n25lmc00c.apps.googleusercontent.com',
        clientSecret:'wZMVV285FGsbrFM7r47-g5e9'
    },
    facebook:{
        callbackURL:'/auth/facebook/redirect',
        clientID:'256172114909245',
        clientSecret:'ec9ea396add5b4ffe527b7c91a045429'
    },
    twitter:{
        callbackURL:'/auth/twitter/redirect',
        consumerKey:'4WUv1Wr1IOsbXgorOcNcvz8Ck',
        consumerSecret:'pBQS4NF8JcwX53UOyBhhriWuPK31PflntoJoDD9Omfr2ITXvVF'
    },
    mongodb:{
        locallURL:"mongodb://localhost/originalprice",
        //mongoose.connect('mongodb://host:port/database');
        productionURL:"mongodb://root:t5nRHwL78xyiG0K@178.238.228.56:27017/originalprice",
        database:null
    },
    session:{
        cookieKey:"Your secret key"
    },
    passport:{
        signUp:false
    }
}