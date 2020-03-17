/*jshint esversion: 6 */
function splitScroll(){
  const controller = new ScrollMagic.controller();
  new ScrollMagic.Scene({
    duration:'200%',
    triggerElement:'.baby-title',
    triggerHook:0
  })
  .setPin('.baby-title')
  .addIndicators()
  .addTo(controller);
}
 splitScroll();
