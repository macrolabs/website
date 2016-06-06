$(document).ready(function(){
  var services = [{
    icon: ".product-design > i",
    info: "#product-design-content"
  }, {
    icon: ".web-apps > i",
    info: "#web-apps-content"
  }, {
    icon: ".mobile-apps > i",
    info: "#mobile-apps-content"
  }, {
    icon: ".ecommerce > i",
    info: "#ecommerce-content"
  }, {
    icon: ".branding > i",
    info: "#branding-content"
  }, {
    icon: ".strategy > .icons-wrapper",
    info: "#strategy-content"
  }, {
    icon: ".ux > img",
    info: "#ux-content"
  }];

  var showService = function(service){
    return function(){
      $(".icons > div > .animated").removeClass("active animated infinite pulse");
      $(".details > div").removeClass("active");
      $(service.icon).addClass("active animated infinite pulse");
      $(service.info).addClass("details-active");
    };
  };

  var addAnimation = function(service){
    $(service.icon).addClass("active animated infinite pulse");
    $(service.info).addClass("details-active");
  }

  var removeAnimation = function(service){
    $(service.icon).removeClass("active animated infinite pulse");
    $(service.info).removeClass("details-active");
  }

  var startServices = function(services){
    var i = 1;
    addAnimation(services[0]);
    setTimeout(function(){
      removeAnimation(services[0]);
    }, 5000);
    var interval = setInterval(function() {
      addAnimation(services[i]);
      setTimeout(function(){
        removeAnimation(services[i++]);
        if (i == services.length) i = 0;
      }, 5000);
    }, 5100); 
  };

  services.forEach(function(service){
    var $el = $(service.icon);
    $el.click(showService(service));
  });

  startServices(services);
})    