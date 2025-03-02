function addSubmitter() {
    const submittersList = document.getElementById('submittersList');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'submitter';
    input.className = 'submitter';
    input.required = true;
    submittersList.appendChild(input);
    input.style.margin = '5px 0';
}

function generatePreview() {
    document.getElementById('displaySubmissionType').innerText = document.getElementById('submissionType').value;
    document.getElementById('displayTopic').innerText = document.getElementById('topicName').value;
    document.getElementById('displayDescription').innerText = document.getElementById('topicDes').value;
    document.getElementById('displaySubjectName').innerText = `${document.getElementById('subjectName').value} (${document.getElementById('subjectCode').value})`;
    
    const submitters = Array.from(document.querySelectorAll('.submitter'))
    .map(input => input.value)
    .join('<br>');

    document.getElementById('displaySubmitters').innerHTML = `<br>${submitters}`;

    document.getElementById('displayFacultyName').innerText = document.getElementById('facultyName').value;
    document.getElementById('displayFacultyDesignation').innerText = document.getElementById('facultyDesignation').value;
    document.getElementById('displayBranch').innerText = `Department of ${document.getElementById('branch').value}`;
    document.getElementById('displayStartYear').innerText = document.getElementById('startYear').value;
    document.getElementById('displayEndYear').innerText = document.getElementById('endYear').value;
    document.getElementById('preview').style.display = 'block';
}

function downloadContainer() {
    const container = document.getElementById('preview');

    html2canvas(container).then(canvas => {
        let link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'container.png';
        link.click();
    });
}