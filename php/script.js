document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    document.getElementById('displayName').innerText = name;
});
