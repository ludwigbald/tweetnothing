var threshold = -1;//if sync.get fails, we use -1 as a default.


//deal with newly loaded tweets
function DOMModificationHandler(){
    $(this).unbind('DOMSubtreeModified.event1');
    setTimeout(function(){
        modify();
        $('#timeline').bind('DOMSubtreeModified.event1',DOMModificationHandler);
    },10);
}
$('#timeline').bind('DOMSubtreeModified.event1',DOMModificationHandler);

function modify(){
  //find and modify tall tweets
  $('.tweet-text').each(function(index){
    if(!$(this).hasClass("squished")){
      $(this).addClass("squished");
      $(this).html(` `);
    }
  });
  $('.card2').each(function(index){
    if(!$(this).hasClass("squished")){
      $(this).addClass("squished");
      $(this).html(` `);
    }
  });
  $('.AdaptiveMediaOuterContainer').each(function(index){
    if(!$(this).hasClass("squished")){
      $(this).addClass("squished");
      $(this).html(` `);
    }
  });
}
