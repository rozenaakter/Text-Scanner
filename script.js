const  extractText = () =>{
    const fileInput = document.getElementById('imageInput');
    const outputDiv = document.getElementById('output');

    const imagesFile = fileInput.files[0];

    if(!imagesFile){
        outputDiv.textContent = 'Please enter a file..!'
        return;
    }


    Tesseract.recognize(
        imagesFile,
        'ben'
    ).then(({data}) => {
        outputDiv.textContent = data.text;
    }).catch( (error) => {
        console.error('Error', error);
        outputDiv.textContent = 'Error'
    })
}