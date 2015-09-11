(function ($) {
  Drupal.behaviors.rsc_attachment_formatter_dropdown = {
    attach: function (context, settings) {
      var $ul = $('ul.att-links.list');
      $ul.addClass('js');
      $('li.dl, li.drive',$ul).wrapAll("<div class='drop' />");
      var $drop = $('div.drop',$ul);
      
      $drop.hide();
      $('li.read',$ul).append("<a href='#/' class='more'>&darr;</a>");
      $('a.more',$ul).click(function(e){
        $drop.toggle(200);
        $ul.toggleClass('open');
        e.stopPropagation();
      });
      
      $("body").click(function(){
        $drop.hide(200);
      });
    }
  };
}(jQuery));
