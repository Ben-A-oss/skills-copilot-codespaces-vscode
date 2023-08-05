function skillsMember() {
    var skills = document.getElementById("skills");
    var skill = document.getElementById("skill");
    var skillValue = skill.value;
    var skillText = document.createTextNode(skillValue);
    var skillElement = document.createElement("li");
    skillElement.appendChild(skillText);
    skills.appendChild(skillElement);
    skill.value = "";
}
