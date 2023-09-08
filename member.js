function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
    var skillsMemberTextValue = skillsMemberText + " " + skillsMemberValue;
    var skillsMemberTextValueLength = skillsMemberTextValue.length;
    var skillsMemberTextValueLengthMax = 50;
    var skillsMemberTextValueLengthRemaining = skillsMemberTextValueLengthMax - skillsMemberTextValueLength;
    if (skillsMemberTextValueLengthRemaining < 0) {
        skillsMemberTextValue = skillsMemberTextValue.substring(0, 50);
        skillsMemberTextValueLengthRemaining = 0;
    }
    skills.value = skillsMemberTextValue;
    document.getElementById("skillsMemberTextValueLengthRemaining").innerHTML = skillsMemberTextValueLengthRemaining;
}