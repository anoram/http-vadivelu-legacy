let template = (e) => {
    return `
<div class="col-lg-4 col-xs-12 py-3">
    <a href="./${e.code}" target="_blank">
            <div class="card">
                    <div class="oyh"><img src="./${e.file}" class="card-img-top img-fluid" loading="lazy"></div>
                <div class="card-body py-2">
                  <p class="card-text card-title">${e.desc} </p>
                </div>
              </div>   </a>                     
        </div>
`
}
let codes;
var settings = {
    "url": "./data.json",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    codes = response.codes;
    codes.forEach(e => {
        $("#entry").append(template(e))
    });
});



var p = 90;
let t;
//linear-gradient(90deg, #f7b733, #fc4a1a)
function timer() {
    p += .5;
    if (p > 360) {
        p = 0;
    }
    $(".btn-cta").css('background', `linear-gradient(${p}deg, #060606, #424242)`)
}
$(".btn-cta").mouseover(function () {
    t = setInterval(timer, .5);
}).mouseleave(function () {
    clearInterval(t)
    $(".btn-cta").css('background', `linear-gradient(${p}deg, #060606, #424242)`)
})