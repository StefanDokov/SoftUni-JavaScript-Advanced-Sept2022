function getArticleGenerator(articles) {
   
    
    return function(){
    let divo = document.getElementById(`content`);
   if (articles.length > 0){
     let artig = document.createElement(`article`);
     let p = document.createElement(`p`);
     p.textContent = articles.shift();
     artig.appendChild(p);
     divo.appendChild(artig);
   } 
}
}
