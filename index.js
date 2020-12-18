// collection initiative

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
  // floating btn initialization
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems,{
        hoverEnabled: false
    });
  });
  // conditional links changing
  const logout = document.querySelectorAll('.loggedout');
  const login = document.querySelectorAll('.loggedin');
function setupui(user){
    if(user){
       logout.forEach(function(anchor){
           anchor.style.display = 'none';
       })
       login.forEach(function(anchor){
           anchor.style.display = 'block';
       })
       document.querySelector('.cardssection').style.display = ' block';
    }
    else{
        logout.forEach(function(anchor){
            anchor.style.display = 'block';
        })
        login.forEach(function(anchor){
            anchor.style.display = 'none';
        })
        document.querySelector('.cardssection').style.display = 'none';
        document.querySelector('.log-in-form').style.display = 'block';
          
    }
}


// firestore data cycling
const mainlist = document.querySelector('.collapsible');

// function setlist(data){
//     if(data.length){
//         mainlist.style.display = 'block';
//         document.querySelector('.log-in-form').style.display = 'none';
//     var html = '';
//     data.forEach(function(docs){
//         const guides = docs.data();
//         const li = ` <li>
//         <div class="collapsible-header purple darken-4 grey-text text-lighten-2">${guides.title}</div>
//         <div class="collapsible-body purple lighten-2 grey-text text-lighten-2"><span>${guides.content}</span></div>
//       </li>`;
//       html += li;
//     });
//    mainlist.innerHTML = html;
// }
// else{
//     document.querySelector('.log-in-form').style.display = 'block';
//     mainlist.style.display = 'none';
// //     mainlistcontainer.style.padding = '20px';
// //     mainlistcontainer.style.border = '1px solid white'; mainlistcontainer.style.height = '50%';
// //     mainlistcontainer.innerHTML = `<h4 class="center-align grey-text text-lighten-2 ">please sign to get the full out of this app</h4>`;
// //    mainlist.style.display = 'none';
// }
// }
