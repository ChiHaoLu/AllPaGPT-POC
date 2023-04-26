import PDFJS from 'pdfjs-dist/legacy/build/pdf.js'

export async function loadPDFContext(path) {
    const loadingTask = PDFJS.getDocument(path)
    const pdfDocument = await loadingTask.promise
    // console.log(pdfDocument, 'pdf')
    let pdfText = []
    for (var i = 1; i <= pdfDocument.numPages; i++){
        const pageText = await getPageText(i, pdfDocument)
        pdfText.push(pageText)
        // console.log(pageText, "\n")
    }
    return pdfText
}

/**
 * Retrieves the text of a specif page within a PDF Document obtained through pdf.js
 *
 * @param {Integer} pageNum Specifies the number of the page
 * @param {PDFDocument} PDFDocumentInstance The PDF document obtained
 **/
function getPageText(pageNum, PDFDocumentInstance) {
    // Return a Promise that is solved once the text of the page is retrieven
    return new Promise(function (resolve, reject) {
        PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
            // The main trick to obtain the text of the PDF page, use the getTextContent method
            pdfPage.getTextContent().then(function (textContent) {
                var textItems = textContent.items;
                var finalString = '';

                // Concatenate the string of the item to the final string
                for (var i = 0; i < textItems.length; i++) {
                    var item = textItems[i];

                    finalString += item.str + ' ';
                }

                // Solve promise with the text retrieven from the page
                resolve(finalString);
            });
        });
    });
}
