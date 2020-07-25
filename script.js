let listItemId = 0;

function addTechnicalSkill(){
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
        document.getElementById("technicalKey").value = "";
        document.getElementById("technicalValue").value = "";

        span = document.createElement("span");
        span.innerHTML = '◾ ' + key + " : " + values;
        li.setAttribute('id',listItemId);
        span.setAttribute('contenteditable', '');
        li.appendChild(span)

        btnRemove = document.createElement('button');
        btnRemove.innerHTML = 'X';
        btnRemove.setAttribute('id',listItemId++);
        btnRemove.addEventListener('click', btnRemoveHandler);
        li.appendChild(btnRemove);

        ul = document.querySelector("#technicalSkills");
        ul.style.marginTop = '5px';
        ul.appendChild(li);
    }
}

function btnRemoveHandler(event){
    document.getElementById(event['target']['id']).remove();
}