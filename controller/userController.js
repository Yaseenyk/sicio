module.exports.profile = function(req, res){
    res.render('users',{
        title:'Hello'
    })
}

module.exports.signup = function(req, res){
    res.render('user_signup',{
        title:'Hello'
    })
}

module.exports.signin = function(req, res){
    res.render('user_signin',{
        title:'Hello'
    })
}

module.exports.create = function(req,res){

}

module.exports.createSession=function(req,res){
    
}