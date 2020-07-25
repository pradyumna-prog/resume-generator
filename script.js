let skillId = 'T0', projectId = 'P1', strengthId = 'S0', workshopId = 'W0', achievementId = 'A0';

chooseImage = () => {
    document.getElementById("imageUpload").click();
}

replaceImage = (uploader) => {
    if(uploader.files && uploader.files[0]){
        var imageFile = uploader.files[0];
        var reader = new FileReader();    
        reader.onload = function (e) {
            //set the image data as source
            document.getElementById("profileImage").setAttribute('src', e.target.result);
        }    
        reader.readAsDataURL( imageFile );
    }
}

addTechnicalSkill = () => {
    li = document.createElement('li');
    li.setAttribute('id',skillId);

    key = document.getElementById("technicalKey").value;
    values = document.getElementById("technicalValue").value;

    document.getElementById("technicalKey").value = "";
    document.getElementById("technicalValue").value = "";

    span = document.createElement("span");
    span.innerHTML = '◾ ' + key + " : " + values;
    span.setAttribute('contenteditable', '');
    li.appendChild(span)

    btnRemove = document.createElement('button');
    btnRemove.innerHTML = 'X';
    btnRemove.setAttribute('id',skillId);
    btnRemove.setAttribute('class', 'btnRemove');
    btnRemove.addEventListener('click', btnRemoveHandler);
    li.appendChild(btnRemove);

    ul = document.querySelector("#technicalSkills");
    ul.style.marginTop = '5px';
    ul.appendChild(li);

    skillId = incrementId("technical", skillId);
}

btnRemoveHandler = event => {
    document.getElementById(event['target']['id']).remove();
}

addProject = () => {
    article = document.createElement('article');
    article.setAttribute('id', projectId);

    btnRemove = document.createElement('button');
    btnRemove.innerHTML = 'X';
    btnRemove.setAttribute('id',projectId);
    btnRemove.setAttribute('class', 'btnRemove');
    btnRemove.addEventListener('click', btnRemoveHandler);

    h2 = document.createElement('h2');
    h2.setAttribute('contenteditable','');
    h2.innerHTML = "Project Title";
    
    spanT = document.createElement('span');
    spanT.setAttribute('contenteditable','');
    spanT.innerHTML = 'add';
    spanR = document.createElement('span');
    spanR.setAttribute('contenteditable','');
    spanR.innerHTML = 'add';
    spanD = document.createElement('span');
    spanD.setAttribute('contenteditable','');
    spanD.innerHTML = 'add';

    subdetailPara = document.createElement('p');
    subdetailPara.setAttribute('class', 'subDetails');
    subdetailPara.innerHTML = "Technologies :";
    subdetailPara.appendChild(spanT);
    subdetailPara.innerHTML += " | Role :";
    subdetailPara.appendChild(spanR);
    subdetailPara.innerHTML += " | Duration :";
    subdetailPara.appendChild(spanD);

    descripton = document.createElement('p');
    descripton.setAttribute('contenteditable','');
    descripton.innerHTML = "Add description";

    article.appendChild(h2);
    article.appendChild(btnRemove);
    article.appendChild(subdetailPara);
    article.appendChild(descripton);

    document.getElementById("projectDetails").appendChild(article);

    projectId = incrementId('project', projectId);
}

addSWC = type => {
    if(type == "strengths") id = strengthId;
    else if(type == "workshops") id = workshopId;
    else if(type == "achievements") id = achievementId;

    li = document.createElement('li');
    li.setAttribute('id',id);

    inputValue = document.getElementById(type+"Value").value;
    document.getElementById(type+"Value").value = "";

    span = document.createElement("span");
    span.innerHTML = '◾ ' + inputValue;
    span.setAttribute('contenteditable', '');
    li.appendChild(span)

    btnRemove = document.createElement('button');
    btnRemove.innerHTML = 'X';
    btnRemove.setAttribute('id',id);
    btnRemove.setAttribute('class', 'btnRemove');
    btnRemove.addEventListener('click', btnRemoveHandler);
    li.appendChild(btnRemove);

    ul = document.getElementById(type);
    ul.style.marginTop = '5px';
    ul.appendChild(li);

    incrementId(type, id);
}

incrementId = (type, strId) => {
    id = parseInt(strId.slice(1, strId.length), 10);
    
    if(type == "strengths") strengthId = strId[0]+ ++id;
    else if(type == "workshops") workshopId = strId[0]+ ++id;
    else if(type == "achievements") achievementId = strId[0]+ ++id;
    else return strId[0]+ ++id ;
}

getDate = () => {
    document.getElementById("date").innerHTML = (new Date()).toLocaleDateString();
}
