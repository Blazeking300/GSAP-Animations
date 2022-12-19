gsap.from(".div1",{
  x: 100,
  y: 200,
  delay: 2
})
gsap.from(".div2",{
  x: 700,
  y: 500,
  delay: 3
})
gsap.from(".div3",{
  x: -300,
  y: 600,
  delay: 4
})
gsap.from(".div4",{
  x: 100,
  y: 100,
  delay: 5
})
gsap.from(".div5",{
  x: -700,
  y: 200,
  delay: 6
})


gsap.fromTo(".drum",{
  x: -100,
  y: -100,
},{
	x: 1900,
  y: -100,
  delay: 8,
  duration: 13,
})

gsap.fromTo(".item5",{
  x: -200,
  y: -280,
},{
	x: 1500,
  y: -280,
  delay: 8,
  duration: 10,
})

gsap.fromTo(".item4",{
  x: -300,
  y: -250,
},{
	x: 1100,
  y: -250,
  delay: 8,
  duration: 9,
})

gsap.fromTo(".item3",{
  x: -400,
  y: -210,
},{
	x: 700,
  y: -210,
  delay: 8,
  duration: 8,
})

gsap.fromTo(".item2",{
  x: -500,
  y: -185,
},{
	x: 300,
  y: -185,
  delay: 8,
  duration: 7,
})

gsap.fromTo(".item1",{
  x: -600,
  y: -120,
},{
	x: -140,
  y: -120,
  delay: 8,
  duration: 6,
})