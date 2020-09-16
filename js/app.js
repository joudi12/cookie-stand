'use strict';

var houers = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var Cookies = [];
var hourstotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var body = document.getElementById('list');
var table = document.createElement('table');
body.appendChild(table);
// var table = document.getElementById('Table')


function addhead() {
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    tr.appendChild(th);
    table.appendChild(tr);



    for (var i = 0; i < houers.length; i++) {
        th = document.createElement('th');
        th.textContent = houers[i];
        tr.appendChild(th);
    }
    th = document.createElement('th');
    th.textContent = 'daily location  total';
    tr.appendChild(th)
}

addhead();

function addFooter() {
    var tr = document.createElement('tr');
    //var td = document.createElement('td');

    var td = document.createElement('td');
    td.textContent = 'totals';
    tr.appendChild(td);
    table.appendChild(tr);

    for (var i = 0; i < hourstotal.length; i++) {
        td = document.createElement('td');
        td.textContent = hourstotal[i];
        tr.appendChild(td);
    }

}




function Cookie(name, minhourly, maxhourly, averagehourly) {
    this.name = name;
    this.minhourly = minhourly;
    this.maxhourly = maxhourly;
    this.averagehourly = averagehourly;
    this.cookiespairhour = [];
    this.dailytotaly = 0;
    Cookies.push(this);
}
Cookie.prototype.getrandomcustmerhourly = function () {
    var randomcustmerhourly = getRandomNumber(this.minhourly, this.maxhourly);//23-65  25
    //console.log('getrandomcustmerhourly ', randomcustmerhourly);
    return randomcustmerhourly;
};
Cookie.prototype.getcookiespurchasedhourly = function () {
    var cookiespurchasedhourly = Math.floor(this.getrandomcustmerhourly() * this.averagehourly);
    //console.log('getcookiespurchasedhourly ', cookiespurchasedhourly);
    return cookiespurchasedhourly;
};
Cookie.prototype.getcookieshourly = function () {

    for (var i = 0; i < houers.length; i++) {
        var x = this.getcookiespurchasedhourly();
        this.cookiespairhour.push(x);

        this.dailytotaly = this.dailytotaly + x;
        hourstotal[i] += x;
    }

    hourstotal[hourstotal.length - 1] += this.dailytotaly;
    return this.cookiespairhour;
};
Cookie.prototype.render = function () {

    var parentElement = document.getElementById('list');
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);

    for (var i = 0; i < houers.length; i++) {
        td = document.createElement('td');
        td.textContent = this.cookiespairhour[i];
        tr.appendChild(td);

    }
    td = document.createElement('td');
    td.textContent = this.dailytotaly;
    tr.appendChild(td);


};


var seattle = new Cookie('seattle', 23, 65, 6.3,);
var tokyo = new Cookie('tokyo', 3, 24, 1.2);
var dubai = new Cookie('dubai', 11, 38, 3.7);
var paris = new Cookie('paris', 20, 38, 2.3);
var lima = new Cookie('lima ', 2, 16, 4.6);


console.log(Cookies);




function getRandomNumber(min, max) {
    var random = Math.random();
    random = (random * (max - min + 1)) + min;
    random = Math.floor(random);
    return random;
}

var form = document.getElementById('forms');
form.addEventListener('submit', function (even) {
    even.preventDefault();

    var location = even.target.location.value;



    var minmum = parseInt(even.target.mainmumNumber.value);
    var maxmum = parseInt(even.target.maximumNumber.value);
    var avarage = parseFloat(even.target.averagehourly.value);
    var addlocation = new Cookie(location, minmum, maxmum, avarage);

   
     var rowCount = table.rows.length;
     table.deleteRow(rowCount -1);
   // working solution 
    
    addlocation.getcookiespurchasedhourly();
   addlocation.getcookieshourly();
    addlocation.render();
    // for (var y = 0; y < Cookies.length; y++) {
    //     Cookies[y].getcookiespurchasedhourly();
    //     Cookies[y].getcookieshourly();
    //     Cookies[y].render();
    // }

    addFooter();
});


for (var y = 0; y < Cookies.length; y++) {
    Cookies[y].getcookiespurchasedhourly();
    Cookies[y].getcookieshourly();
    Cookies[y].render();
}
addFooter();





    // var  = document.createElement('h2');
    // h2.textContent = this.name;
    // article.appendChild(h2);

    // var ul = document.createElement('ul');
    // article.appendChild(ul);

    // for (var j = 0; j < this.cookiespairhour.length - 1; j++) {

    //     var li = document.createElement('li');
    //     li.textContent = [this.houers[j] + ' : ' + this.cookiespairhour[j + 1] + ' cookies'];
    //     ul.appendChild(li);

    // }
    // }







    //var seattle = {
    //name: 'seattle',
    //minhourly: 23,
    //maxhourly: 65,
    //randomcustmerhourly: 0,
    //averagehourly: 6.3,
    //houers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm','Total'],
    // cookiespurchasedhourly: 1,
    //cookiespairhour :[],

    //getrandomcustmerhourly: function () {
    //var randomcustmerhourly = getRandomNumber(this.minhourly, this.maxhourly);//23-65  25
    //console.log('getrandomcustmerhourly ', randomcustmerhourly);
    //return randomcustmerhourly;
    //},
    //getcookiespurchasedhourly: function () {
    //var cookiespurchasedhourly = Math.floor(this.getrandomcustmerhourly() * this.averagehourly);
    //console.log('getcookiespurchasedhourly ', cookiespurchasedhourly);
    //return cookiespurchasedhourly;
    //},
    //getcookieshourly: function () {
    //var tot=0;
    //for (var i = 0; i < this.houers.length; i++) {
    //var x = this.getcookiespurchasedhourly() ;
    // this.cookiespairhour.push(x);
    // tot+= x;


    //}
    //console.log(tot);
    //this.cookiespairhour.push(tot);
    // console.log(this.cookiespairhour[this.cookiespairhour.length-1]);
    //console.log('getcookieshourly ', this.cookiespairhour);

    //return this.cookiespairhour;
    //},
    //render : function (){
    //var parentElement = document.getElementById('list');

    //var article = document.createElement('article');
    //parentElement.appendChild(article);

    //var h2 = document.createElement('h2');
    //h2.textContent = this.name;
    //article.appendChild(h2);

    //var ul = document.createElement('ul');
    //article.appendChild(ul);

    //for( var j = 0; j< this.cookiespairhour.length-1; j++){

    //var li = document.createElement('li');
    // li.textContent = [this.houers[j] +' : '+ this.cookiespairhour[j+1] +' cookies'];
    //ul.appendChild(li);

    //}
    //}


    //}


    // seattle.getrandomcustmerhourly();
    //seattle.getcookiespurchasedhourly();
    //seattle.getcookieshourly();
    //seattle.render();
    //console.log(seattle);










    // var tokyo = {
    //     name: 'tokyo',
    //     minhourly: 3,
    //     maxhourly: 24,
    //     //randomcustmerhourly: 0,
    //     averagehourly:1.2,
    //     houers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
    //     // cookiespurchasedhourly: 1,
    //     cookiespairhour :[],

    //     getrandomcustmerhourly: function () {
    //         var randomcustmerhourly = getRandomNumber(this.minhourly, this.maxhourly);//23-65  25
    //         //console.log('getrandomcustmerhourly ', randomcustmerhourly);
    //         return randomcustmerhourly;
    //     },
    //     getcookiespurchasedhourly: function () {
    //         var cookiespurchasedhourly = Math.floor(this.getrandomcustmerhourly() * this.averagehourly);
    //         //console.log('getcookiespurchasedhourly ', cookiespurchasedhourly);
    //         return cookiespurchasedhourly;
    //     },
    //     getcookieshourly: function () {
    //         var tot=0;
    //         for (var i = 0; i < this.houers.length; i++) {
    //            var x = this.getcookiespurchasedhourly() ;
    //             this.cookiespairhour.push(x);
    //             tot+= x;


    //         }
    //         console.log(tot);
    //         this.cookiespairhour.push(tot);
    //         //console.log('getcookieshourly ', this.cookiespairhour);

    //         return this.cookiespairhour;
    //     },
    //     render : function (){
    //         var parentElement = document.getElementById('list');

    //         var article = document.createElement('article');
    //         parentElement.appendChild(article);

    //         var h2 = document.createElement('h2');
    //         h2.textContent = this.name;
    //         article.appendChild(h2);

    //         var ul = document.createElement('ul');
    //         article.appendChild(ul);

    //         for( var j = 0; j< this.cookiespairhour.length-1; j++){

    //             var li = document.createElement('li');
    //             li.textContent = [this.houers[j] +' : '+ this.cookiespairhour[j+1] +' cookies'];
    //            ul.appendChild(li);

    //         }
    //     }


    // }


    // // seattle.getrandomcustmerhourly();
    // tokyo.getcookiespurchasedhourly();
    // tokyo.getcookieshourly();
    // tokyo.render();
    // //tokyo.log(tokyo);

    // var dubai = {
    //     name: 'dubai',
    //     minhourly: 11,
    //     maxhourly: 38,
    //     //randomcustmerhourly: 0,
    //     averagehourly: 3.7,
    //     houers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
    //     // cookiespurchasedhourly: 1,
    //     cookiespairhour: [],

    //     getrandomcustmerhourly: function () {
    //         var randomcustmerhourly = getRandomNumber(this.minhourly, this.maxhourly);//23-65  25
    //         //console.log('getrandomcustmerhourly ', randomcustmerhourly);
    //         return randomcustmerhourly;
    //     },
    //     getcookiespurchasedhourly: function () {
    //         var cookiespurchasedhourly = Math.floor(this.getrandomcustmerhourly() * this.averagehourly);
    //         //console.log('getcookiespurchasedhourly ', cookiespurchasedhourly);
    //         return cookiespurchasedhourly;
    //     },
    //     getcookieshourly: function () {
    //         var tot = 0;
    //         for (var i = 0; i < this.houers.length; i++) {
    //             var x = this.getcookiespurchasedhourly();
    //             this.cookiespairhour.push(x);
    //             tot += x;


    //         }
    //         console.log(tot);
    //         this.cookiespairhour.push(tot);
    //         //console.log('getcookieshourly ', this.cookiespairhour);

    //         return this.cookiespairhour;
    //     },
    //     render: function () {
    //         var parentElement = document.getElementById('list');

    //         var article = document.createElement('article');
    //         parentElement.appendChild(article);

    //         var h2 = document.createElement('h2');
    //         h2.textContent = this.name;
    //         article.appendChild(h2);

    //         var ul = document.createElement('ul');
    //         article.appendChild(ul);

    //         for (var j = 0; j < this.cookiespairhour.length - 1; j++) {

    //             var li = document.createElement('li');
    //             li.textContent = [this.houers[j] + ' : ' + this.cookiespairhour[j + 1] + ' cookies'];
    //             ul.appendChild(li);

    //         }
    //     }


    // }


    // // seattle.getrandomcustmerhourly();
    // dubai.getcookiespurchasedhourly();
    // dubai.getcookieshourly();
    // dubai.render();
    // //dubai.log(tokyo);

    // var paris = {
    //     name: 'paris',
    //     minhourly: 20,
    //     maxhourly: 38,
    //     //randomcustmerhourly: 0,
    //     averagehourly: 2.3,
    //     houers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
    //     // cookiespurchasedhourly: 1,
    //     cookiespairhour: [],

    //     getrandomcustmerhourly: function () {
    //         var randomcustmerhourly = getRandomNumber(this.minhourly, this.maxhourly);//23-65  25
    //         //console.log('getrandomcustmerhourly ', randomcustmerhourly);
    //         return randomcustmerhourly;
    //     },
    //     getcookiespurchasedhourly: function () {
    //         var cookiespurchasedhourly = Math.floor(this.getrandomcustmerhourly() * this.averagehourly);
    //         //console.log('getcookiespurchasedhourly ', cookiespurchasedhourly);
    //         return cookiespurchasedhourly;
    //     },
    //     getcookieshourly: function () {
    //         var tot = 0;
    //         for (var i = 0; i < this.houers.length; i++) {
    //             var x = this.getcookiespurchasedhourly();
    //             this.cookiespairhour.push(x);
    //             tot += x;


    //         }
    //         console.log(tot);
    //         this.cookiespairhour.push(tot);
    //         //console.log('getcookieshourly ', this.cookiespairhour);

    //         return this.cookiespairhour;
    //     },
    //     render: function () {
    //         var parentElement = document.getElementById('list');

    //         var article = document.createElement('article');
    //         parentElement.appendChild(article);

    //         var h2 = document.createElement('h2');
    //         h2.textContent = this.name;
    //         article.appendChild(h2);

    //         var ul = document.createElement('ul');
    //         article.appendChild(ul);

    //         for (var j = 0; j < this.cookiespairhour.length - 1; j++) {

    //             var li = document.createElement('li');
    //             li.textContent = [this.houers[j] + ' : ' + this.cookiespairhour[j + 1] + ' cookies'];
    //             ul.appendChild(li);

    //         }
    //     }


    // }


    // // seattle.getrandomcustmerhourly();
    // paris.getcookiespurchasedhourly();
    // paris.getcookieshourly();
    // paris.render();

    // var lima = {
    //     name: 'lima',
    //     minhourly: 2,
    //     maxhourly: 16,
    //     //randomcustmerhourly: 0,
    //     averagehourly: 4.6,
    //     houers: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
    //     // cookiespurchasedhourly: 1,
    //     cookiespairhour: [],

    //     getrandomcustmerhourly: function () {
    //         var randomcustmerhourly = getRandomNumber(this.minhourly, this.maxhourly);//23-65  25
    //         //console.log('getrandomcustmerhourly ', randomcustmerhourly);
    //         return randomcustmerhourly;
    //     },
    //     getcookiespurchasedhourly: function () {
    //         var cookiespurchasedhourly = Math.floor(this.getrandomcustmerhourly() * this.averagehourly);
    //         //console.log('getcookiespurchasedhourly ', cookiespurchasedhourly);
    //         return cookiespurchasedhourly;
    //     },
    //     getcookieshourly: function () {
    //         var tot = 0;
    //         for (var i = 0; i < this.houers.length; i++) {
    //             var x = this.getcookiespurchasedhourly();
    //             this.cookiespairhour.push(x);
    //             tot += x;


    //         }
    //         console.log(tot);
    //         this.cookiespairhour.push(tot);
    //         //console.log('getcookieshourly ', this.cookiespairhour);

    //         return this.cookiespairhour;
    //     },
    //     render: function () {
    //         var parentElement = document.getElementById('list');

    //         var article = document.createElement('article');
    //         parentElement.appendChild(article);

    //         var h2 = document.createElement('h2');
    //         h2.textContent = this.name;
    //         article.appendChild(h2);

    //         var ul = document.createElement('ul');
    //         article.appendChild(ul);

    //         for (var j = 0; j < this.cookiespairhour.length - 1; j++) {

    //             var li = document.createElement('li');
    //             li.textContent = [this.houers[j] + ' : ' + this.cookiespairhour[j + 1] + ' cookies'];
    //             ul.appendChild(li);

    //         }
    //     }


    // }


    // // seattle.getrandomcustmerhourly();
    // lima.getcookiespurchasedhourly();
    // lima.getcookieshourly();
    // lima.render();








