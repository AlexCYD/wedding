---
---
window.addEventListener("load",()=>{
  const left=document.querySelector(".left");
  const right=document.querySelector(".right");
  const light=document.querySelector(".light");
  const content=document.getElementById("content");

  /********************/

  light.animate([
    {
      width:"0",
      opacity:0
    },
    {
      width:"180px",
      opacity:1,
      offset:.25
    },
    {
      width:"800px",
      opacity:0
    }],
    {
      duration:3600,
      easing:"ease-out",
      fill:"forwards"
    }
  );

  /********************/

  left.animate([
    {
      transform:"translateX(0)"
    },
    {
      transform:"translateX(-102%)"
    }],
    {
      duration:3600,
      fill:"forwards",
      easing:"cubic-bezier(.75,.02,.15,1)"
    }
  );

  /********************/

  right.animate([
    {
      transform:"translateX(0)"
    },
    {
      transform:"translateX(102%)"
    }],
    {
      duration:3600,
      fill:"forwards",
      easing:"cubic-bezier(.75,.02,.15,1)"
    }
  );

  /********************/

  setTimeout(()=>{

  window.location.replace("{{ '/en/' | relative_url }}");

  },3000);

  });