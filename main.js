var Mydate=[];
var divs='';
var row =document.querySelector('.gy-5');
var list = document.getElementById('list');
var NAV =document.getElementById('NAV');
var navbar=document.querySelector('.navbar');
var searchByWord=document.getElementById('ByWord');
var ALLsearch=document.getElementById('ALLsearch');
var contact=document.querySelector('.a6');
var contactdiv=document.querySelector('.hed');
var NowPlaying=document.querySelector('.a1');
var popular=document.querySelector('.a2');
var TopRated=document.querySelector('.a3');
var Trending=document.querySelector('.a4');
var Upcoming=document.querySelector('.a5');
var col=document.getElementById('col');


/* vartiical navbar */

list.addEventListener('click',function()
{
    var x=list.getAttribute('src');
    if(x=='list.png')
    {
    NAV.style.transform="translateX(200px)";
    list.setAttribute('src','close.PNG');
    navbar.style.display='block';
    }
    else
    {
        list.setAttribute('src','list.png');
        NAV.style.transform="translateX(0px)";
        navbar.style.display='none';
    }
})

/** main funcation */


async function nowPlaying()
{
    var x=await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var myDate=await x.json();
    Mydate=myDate.results;
    for(var i=0;i<Mydate.length;i++)
    {
        if(Mydate[i].original_title== undefined)
        {
            var posterName= Mydate[i].original_name;
        }
        else{posterName=Mydate[i].original_title;}
        if(Mydate[i].release_date== undefined)
        {
            var date= Mydate[i].first_air_date;
        }
        else{date=Mydate[i].release_date;}
        divs+=`
        <div class="col-lg-4" id="col">
            <div class="movie">
              <img src="https://image.tmdb.org/t/p/w500${Mydate[i].poster_path}"/>
              <div class="innerphoto text-center fs-5">
                            <h3 class="m-5">${posterName}</h3>
                            <p>${Mydate[i].overview}</p>
                            </p>${Mydate[i].vote_average}</p>
                            <p>${date}</p>
                        </div>
             </div>
        </div>`;
    }
    row.innerHTML= divs; 
}

async function Popular()
{
    alert('hhhhh');
    var x=await fetch('https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var myDate=await x.json();
    Mydate=myDate.results;
    for(var i=0;i<Mydate.length;i++)
    {
        if(Mydate[i].original_title== undefined)
        {
            var posterName= Mydate[i].original_name;
        }
        else{posterName=Mydate[i].original_title;}
        if(Mydate[i].release_date== undefined)
        {
            var date= Mydate[i].first_air_date;
        }
        else{date=Mydate[i].release_date;}
        divs+=`
        <div class="col-lg-4" id="col">
            <div class="movie">
              <img src="https://image.tmdb.org/t/p/w500${Mydate[i].poster_path}"/>
              <div class="innerphoto text-center fs-5">
                            <h3 class="m-5">${posterName}</h3>
                            <p>${Mydate[i].overview}</p>
                            </p>${Mydate[i].vote_average}</p>
                            <p>${date}</p>
                        </div>
             </div>
        </div>`;
    }
    row.innerHTML= divs; 
}

function delet()
{
    alert('nnnnnn');
    $(col).remove();
}

NowPlaying.addEventListener('click',nowPlaying)

popular.addEventListener('click',Popular)

async function toprated()
{
    var x=await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var myDate=await x.json();
    Mydate=myDate.results;
    for(var i=0;i<Mydate.length;i++)
    {
        if(Mydate[i].original_title== undefined)
        {
            var posterName= Mydate[i].original_name;
        }
        else{posterName=Mydate[i].original_title;}
        if(Mydate[i].release_date== undefined)
        {
            var date= Mydate[i].first_air_date;
        }
        else{date=Mydate[i].release_date;}
        divs+=`
        <div class="col-lg-4" id="col">
            <div class="movie">
              <img src="https://image.tmdb.org/t/p/w500${Mydate[i].poster_path}"/>
              <div class="innerphoto text-center fs-5">
                            <h3 class="m-5">${posterName}</h3>
                            <p>${Mydate[i].overview}</p>
                            </p>${Mydate[i].vote_average}</p>
                            <p>${date}</p>
                        </div>
             </div>
        </div>`;
    }
    row.innerHTML= divs; 
}

TopRated.addEventListener('click',toprated);

async function trending()
{
    var x=await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var myDate=await x.json();
    Mydate=myDate.results;
    for(var i=0;i<Mydate.length;i++)
    {
        if(Mydate[i].original_title== undefined)
        {
            var posterName= Mydate[i].original_name;
        }
        else{posterName=Mydate[i].original_title;}
        if(Mydate[i].release_date== undefined)
        {
            var date= Mydate[i].first_air_date;
        }
        else{date=Mydate[i].release_date;}
        divs+=`
        <div class="col-lg-4" id="col">
            <div class="movie">
              <img src="https://image.tmdb.org/t/p/w500${Mydate[i].poster_path}"/>
              <div class="innerphoto text-center fs-5">
                            <h3 class="m-5">${posterName}</h3>
                            <p>${Mydate[i].overview}</p>
                            </p>${Mydate[i].vote_average}</p>
                            <p>${date}</p>
                        </div>
             </div>
        </div>`;
    }
    row.innerHTML= divs; 
}

Trending.addEventListener('click',trending);

async function upcoming()
{
    var x=await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var myDate=await x.json();
    Mydate=myDate.results;
    for(var i=0;i<Mydate.length;i++)
    {
        if(Mydate[i].original_title== undefined)
        {
            var posterName= Mydate[i].original_name;
        }
        else{posterName=Mydate[i].original_title;}
        if(Mydate[i].release_date== undefined)
        {
            var date= Mydate[i].first_air_date;
        }
        else{date=Mydate[i].release_date;}
        divs+=`
        <div class="col-lg-4" id="col">
            <div class="movie">
              <img src="https://image.tmdb.org/t/p/w500${Mydate[i].poster_path}"/>
              <div class="innerphoto text-center fs-5">
                            <h3 class="m-5">${posterName}</h3>
                            <p>${Mydate[i].overview}</p>
                            </p>${Mydate[i].vote_average}</p>
                            <p>${date}</p>
                        </div>
             </div>
        </div>`;
    }
    row.innerHTML= divs; 
}

Upcoming.addEventListener('click',upcoming);

searchByWord.addEventListener("keyup", function()
{
    console.log(searchByWord.value);
});

ALLsearch.addEventListener("keyup", function()
{
    console.log(ALLsearch.value);
});

contact.addEventListener('click',function()
{
    
})

nowPlaying()