window.onload = function() {
    var progres_line = document.getElementById('progres_line'),
        body = document.body,
        html = document.documentElement,
        viewpourHeight = window.innerHeight;
    var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var scrollTopvalue = function() {
        return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }

    window.addEventListener('scroll', function() {
        var scroll = scrollTopvalue();
        var progres = (scroll / (documentHeight - viewpourHeight)) * 100;
        //  console.log(progres);
        progres_line.style.width = progres + '%';
    });

    addEventListener('resize', function() {
        documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    });
};
