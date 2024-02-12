const copyToClipboard = document.getElementById('copyToClipboard');
copyToClipboard.addEventListener('click', function(){
    const textToCopy = document.getElementById('textToCopy');
    const textValue = textToCopy.value;
    if (textValue.length < 1) {
        alert('Please enter text to copy!')
    } else {
        textToCopy.select();
    document.execCommand('copy');
    alert('Text copied to clipboard: '  + textToCopy.value);

    }
})

   