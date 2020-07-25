function addTechnicalSkill(listItemId){
    li = document.createElement('li');
    key = document.getElementById("technicalKey").value;
    values = document.getElementById("technicalValue").value;
    if(key == ''){
        alert('Plese fill key');
    }
    else if(values == ''){
        alert('Plese fill values');
    }
    else{
        li.innerHTML = '◾ ' + key + " : " + values;

        btnRemove = document.createElement('button');
        btnRemove.innerHTML = 'X';
        btnRemove.addEventListener('click', btnRemoveHandler);

        ul = document.querySelector("#technicalSkills");
        ul.style.marginTop = '5px';
        ul.appendChild(li);
    }
}

function btnRemoveHandler(){
    
}