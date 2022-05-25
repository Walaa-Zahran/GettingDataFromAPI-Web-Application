$.getJSON('https://api.unsplash.com/photos/?client_id=Va44LENmcpA_Y9_1qAEblGXJwX7URIMIfnVGtBdVXNE',function(data){
    $.each(data,function(index,value){
        var name=value.user.name;
        var bio=value.user.bio;
        var imageUrl=value.urls.regular;
        // $('.name').text(name);
        // $('.bio').text(bio);
        // $('.image img').attr("src",imageUrl);
        $(".output").append('<h1 class="name">'+name+'</h1><h2 class="bio">'+bio+'</h2><div class="image"><img src="' + imageUrl + '" alt=""></div>' );
    });
});
