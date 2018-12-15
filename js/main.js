
// User Experience
// Art Direction
// Intergrated Campaigns
// Print Design
// Interactive Experience
// Brand  Identity

/* 
<!--
minds
perspectives
approaches
opinions
hearts

*/

let skills = [
    'Website Design','User Experience', 'Art Direction', 'Intergrated Campaigns', 'Print Design', 'Interactive Experience', 'Brand  Identity'];

let skills2 = [
    'minds', 'perspectives', 'approaches', 'opinions', 'hearts'
];
  
  let skillCount = 0;
  
  function changeSkills() {
    renderSkills(skillCount);
    
    if(skillCount < skills.length -1 && skillCount < skills2.length -1) {
      skillCount++;
    } else {
      skillCount = 0;
    }
  
    setTimeout(() => {
      changeSkills();
    }, 800);
  
  }
  
  
  function renderSkills(n) {
    document.getElementById('skills-1').setAttribute('data-content', skills[n]);
    document.getElementById('skills-2').setAttribute('data-content', skills2[n]);
  }
  
  
  changeSkills();

// 