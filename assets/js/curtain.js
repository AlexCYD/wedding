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

const savedLang = localStorage.getItem('lang');
const lang = navigator.language || navigator.userLanguage;

// If user already chose a language, respect it first
if (savedLang) {
  window.location.replace("{{ '/' | relative_url }}" + savedLang + "/");
} else {
  if (lang.startsWith('uz-cyrl')) {
    wwindow.location.replace("{{ '/uz-cyrl/' | relative_url }}");
  } else if (lang.startsWith('uz')) {
    window.location.replace("{{ '/uz/' | relative_url }}");
  } else if (lang.startsWith('de')) {
    window.location.replace("{{ '/de/' | relative_url }}");
  } else if (lang.startsWith('zh')) {
    window.location.replace("{{ '/zh/' | relative_url }}");
  } else if (lang.startsWith('ru')) {
    window.location.replace("{{ '/ru/' | relative_url }}");
  } else {
    window.location.replace("{{ '/en/' | relative_url }}");
  }
}
  },3000);

  });