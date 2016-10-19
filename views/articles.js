$(window).ready(function(){
    /*This needs to be added on every page that should be accesed only by admin users*/
     function checkSession(){
        $.ajax({
            url:"https://web-7-siitwebcluj.c9users.io/curs22-23-24/session",
            type:"GET",
            success:function(resp) {
                resp = JSON.parse(resp);
                if (resp.logged ===  false){
                    window.location.href = "https://web-7-siitwebcluj.c9users.io/curs27-blog-start-up/"
                } else {
                    console.log("user is admin");
                }
            }
        })
    }
    
    checkSession();
    /**********************************************************************************/
    var articlesContainer = $(".js-articles");
    var articles = new Articles();
    
    var articlesDef = articles.getArticles();
    articlesDef.done(listComments);
    
    
    function listComments(){
        var articleModels = articles.models;
        for (var i=0; i<articleModels.length; i++){
            var articleHtml = "<li data-article-id="+articleModels[i].id+"><h3>"+articleModels[i].title+"</h3>"+
                "<div>"+articleModels[i].content+"</div>"+
                "<div class='js-article-comments'></div>"+
                "<textarea class='comment-text'></textarea>"+
                "<button class=js-add-comment>Add Comment</button>"
                "</li>";
            articlesContainer.append(articleHtml);
        }
    }
    
});