const tl = gsap.timeline();

gsap.set(".left", { opacity: 0 ,x:200});
gsap.set(".right", { opacity: 0,x:-200 });
gsap.set("nav", { opacity: 0 });

tl.to("nav", {
  delay: 1,
  opacity: 1,
})
  .to(".right", {
    opacity: 1,
    x:0,
  })
  .to(".left", {
    opacity: 1,
    x:0,
  })

