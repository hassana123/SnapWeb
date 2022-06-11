function openDropDownFeatures(){
    document.getElementById('dropDown').style.display = 'block';
    document.getElementById('down').style.display = "none";
    document.getElementById('up').style.display = "inline";
}

function openDropDownCompany(){
    document.getElementById('dropDown1').style.display = 'block';
    document.getElementById('down1').style.display = "none";
    document.getElementById('up1').style.display = "inline";
}
function closeDropDownCompany(){
    document.getElementById('dropDown1').style.display = 'none';
    document.getElementById('down1').style.display = "inline";
    document.getElementById('up1').style.display = "none";
}
function closeDropDownFeatures(){
    document.getElementById('dropDown').style.display = 'none';
    document.getElementById('down').style.display = "inline";
    document.getElementById('up').style.display = "none";
}

function openMenu(){
    document.getElementById('side-menu').style.display = 'block';
}
function closemenu(){
    document.getElementById('side-menu').style.display = 'none';
}