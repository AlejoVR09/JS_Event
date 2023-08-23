let subjectObject = {
    "Front-end": {
        "HTML": ["Links", "Images", "Tables", "Lists"],
        "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
        "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
    },
    "Back-end": {
        "PHP": ["Variables", "Strings", "Arrays"],
        "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
}

let subject=document.querySelector('#subject')
let topic=document.querySelector('#topic')
let chapter=document.querySelector('#chapter')
for (const key in subjectObject) {
    let option=document.createElement('option')
    option.value=key
    option.textContent=key
    subject.appendChild(option)
}

subject.addEventListener('change', function(){
    let selectedSubject=subject.value
    let selectedTopic=subjectObject[selectedSubject]

    topic.innerHTML = '<option value="" selected="selected">Select a topic</option>';
    chapter.innerHTML = '<option value="" selected="selected">Select a chapter</option>';

    for (const key in selectedTopic) {
        let option=document.createElement('option')
        option.value=key
        option.textContent=key
        topic.appendChild(option)
    } 
})

topic.addEventListener('change', function(){
    let selectedTopicIn=topic.value
    let selectedChapter=subjectObject[subject.value][selectedTopicIn]
    alert(subjectObject[subject.value][selectedTopicIn])
    console.log(selectedChapter)
    chapter.innerHTML = '<option value="" selected="selected">Select a chapter</option>';

    selectedChapter.forEach(data => {
        let option=document.createElement('option')
        option.value=data
        option.textContent=data
        chapter.appendChild(option)
    });
})


