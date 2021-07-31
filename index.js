$(".share-card-and-triangle").hide();

$(".share-icon").on("click", function (evt) {
  evt.stopImmediatePropagation();

  $(".share-card-and-triangle").toggle();

  $(".share-icon").toggleClass("pressed-share-background");
  $(".share-icon path").toggleClass("pressed-share-path");
});
