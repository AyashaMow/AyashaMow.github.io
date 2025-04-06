document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skill");
    
    skills.forEach(skill => {
      const level = skill.dataset.level;
      skill.style.width = `${level}%`;
      
      // Optional: Add animation
      setTimeout(() => {
        skill.classList.add("active");
      }, 1000); // Delay animation by 1 second
    });
  });
  /* ============= typing animation ===========*/
  var typed = new Typed(".typing",{
    strings:["","Web Designer", "Frontend Developer", "Backend Developer", "Client Representative"],
    typeSpeed: 100,
    BackSpeed:60,
    loop:true
  })