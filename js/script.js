$(function() {
    newQuote();
});

function changeColor() {
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

    var color = Math.floor(Math.random() * colors.length);
    $('body').css("background-color", colors[color]);
    $('#next').css("color", colors[color]);
    $('#quotebox').css("color", colors[color]);
}

function newQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25&callback=", function(a) {
        var num = Math.floor(Math.random() * a.length);
        $("#quotebox").html(a[num].content + "<p>— " + a[num].title + "</p>");
        content = encodeURIComponent(a[num].content.replace('<p>', "").replace('</p>', '')).replace(/'/g, '%27');
        $('#twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + content + "  —" + a[num].title);
        changeColor();
    });
}
