$("#accordion button").click(function(){
    $("#accordion p").stop().slideUp()
    $(this).next().stop().slideToggle()
})
$("#tabMenu button").click(function(){
    $("#tabMenu button").css("background","goldenrod")
    $(this).css("background","#333")
    const btnInd= $(this).index()
    $("#tabMenu p").stop().slideUp()
    $("#tabMenu p").eq(btnInd).stop().slideDown()

})
// $("#slider").flipping_gallery({
//     direction: "forward", // This is will set the flipping direction when the gallery is clicked. Options available are "forward", or "backward". The default value is forward.
//     selector: "> a", // This will let you change the default selector which by default, will look for <a> tag and generate the gallery from it. This option accepts normal CSS selectors.
//     spacing: 10, // You can set the spacing between each photo in the gallery here. The number represents the pixels between each photos. The default value is 10.
//     showMaximum: 15, // This will let you limit the number of photos that will be in the viewport. In case you have a gazillion photos, this is perfect to hide all those photos and limit only a few in the viewport.
//     enableScroll: true, // Set this to false if you don't want the plugin to override your scrolling behavior. The default value is true.
//     flipDirection: "bottom", // You can now set which direction the picture will flip to. Available options are "left", "right", "top", and "bottom". The default value is bottom.
//     autoplay: false // You can set the gallery to autoplay by defining the interval here. This option accepts value in milliseconds. The default value is false.

// })
$(".nav-ico").on("click",function(){
    $(this).find("#ico-rem").toggle()
    $(this).find("#ico-bar").toggle()

    $(".mobile-down-menu").toggleClass(500)
})
$(".menu-mobile .mobile-down-menu .set a").click(function(){
    // $(".set i").removeClass("fas fa-chevron-down");
    // $(this).find("i").toggleClass("fas fa-chevron-up");

    $(".set .content").stop().slideUp(300)
    $(this).next().stop().slideToggle(300)
})
setTimeout(() => {
    $("#slider1 .slider-img").addClass("slide-active")
    $("#slider1 .slide-img2").delay(1000).fadeIn()

}, 500);
$('.sld').textillate({
    // the default selector to use when detecting multiple texts to animate
    selector: '.texts',
  
    // enable looping
    loop: false,
  
    // sets the minimum display time for each text before it is replaced
    minDisplayTime: 2000,
  
    // sets the initial delay before starting the animation
    // (note that depending on the in effect you may need to manually apply
    // visibility: hidden to the element before running this plugin)
    initialDelay: 0,
  
    // set whether or not to automatically start animating
    autoStart: true,
  
    // custom set of 'in' effects. This effects whether or not the
    // character is shown/hidden before or after an animation
    inEffects: [],
  
    // custom set of 'out' effects
    outEffects: [ 'hinge' ],
  
    // in animation settings
    in: {
        // set the effect name
      effect: 'fadeInLeftBig',
  
      // set the delay factor applied to each consecutive character
      delayScale: 1.5,
  
      // set the delay between each character
      delay: 50,
  
      // set to true to animate all the characters at the same time
      sync: false,
  
      // randomize the character sequence
      // (note that shuffle doesn't make sense with sync = true)
      shuffle: false,
  
      // reverse the character sequence
      // (note that reverse doesn't make sense with sync = true)
      reverse: false,
  
      // callback that executes once the animation has finished
      callback: function () {}
    },
  
    // out animation settings.
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () {}
    },
  
    // callback that executes once textillate has finished
    callback: function () {},
  
    // set the type of token to animate (available types: 'char' and 'word')
    type: 'char'
  });