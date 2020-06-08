let template = (e) => {
    return `
<div class="col-lg-4 col-xs-12 py-3">
    <a href="./${e.type[0]}/${e.code}" target="_blank">
            <div class="card">
                    <div class="oyh"><img src="./${e.type[0]}/${e.file}.${e.type[0]}" class="card-img-top img-fluid" loading="lazy"></div>
                <div class="card-body py-2">
                  <p class="card-text card-title">${e.desc}  <span class="supported-formats">${e.type} </span> </p>
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
        $("#avaiableCodes").append(` <span>${e.code}</span> `)
        $("#entry").append(template(e))
    });
});
