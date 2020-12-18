
// tracking user's state
 auth.onAuthStateChanged(function(user){
     if(user){
         setupui(user);
         // fetch data from firebase
// db.collection('guidez').get().then(function(snapshot){
//     setlist(snapshot.docs);
//      });
     }
     else{
         setupui(user);
        //  setlist([]);
     }
 })



var signinBtn = document.querySelector('#signin');
signinBtn.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector('.sign-in-form').style.display = 'block';
    document.querySelector('.log-in-form').style.display = 'none';
    document.querySelector('.collectionsection').style.display = 'none';
});
// sign user in
var getsigninForm = document.querySelector('#sign-in');
getsigninForm.addEventListener('submit',function(e){
    e.preventDefault();
    var email = getsigninForm['email'].value;
    var password = getsigninForm['password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(function(cred){
        console.log(cred);
        console.log("user signed in");
        document.querySelector('.sign-in-form').style.display = 'none';
        document.querySelector('.log-in-form').style.display = 'none';
        getsigninForm.reset();

    })
})
//logout the usre
var logoutBtn = document.querySelector('#logout');
logoutBtn.addEventListener('click',function(e){
    e.preventDefault();
    auth.signOut().then(function(){
        console.log("the user is logedout");
    })
})
//loging in the user
// var loginBtn = document.querySelector('#login');
// loginBtn.addEventListener('click',function(e){
//     e.preventDefault();
//     document.querySelector('.sign-in-form').style.display = 'none';
//     document.querySelector('.log-in-form').style.display = 'block';
//     document.querySelector('.logout-msg').style.display = 'none';
// });
var getloginForm = document.querySelector('#log-in');
getloginForm.addEventListener('submit',function(e){
    e.preventDefault();
    // get the user info
    var email = getloginForm['logemail'].value;
    var password = getloginForm['logpass'].value;
    // login the user
    auth.signInWithEmailAndPassword(email, password).then(function(cred){
        console.log(cred.user);
        console.log("user logged in");
        document.querySelector('.sign-in-form').style.display = 'none';
        document.querySelector('.log-in-form').style.display = 'none';
        getloginForm.reset();
    }).catch(function(err){
        console.log(err.message);
    })
})
