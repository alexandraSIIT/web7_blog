function Article(options){
    this.title = options.title;
    this.content = options.content;
    this.id = options.id;
}

Article.prototype.update = function(){
    //this should be only on feature_1 branch
    //not now
    //Do an AJAX req to https://web-7-siitwebcluj.c9users.io/curs22-23-24/articles/update
}