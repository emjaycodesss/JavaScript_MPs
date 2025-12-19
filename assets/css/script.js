function searchWord() {
    const sentence = document.getElementById('sentence').value.trim();
    const word = document.getElementById('word').value.trim();
    const resultDiv = document.getElementById('searchResult');

    if (!sentence || !word) {
        resultDiv.textContent = '';
        resultDiv.className = 'result';
        return;
    }

    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    const wordIndex = lowerSentence.indexOf(lowerWord);
    
    if (wordIndex === -1) {
        resultDiv.textContent = 'Not Found';
        resultDiv.className = 'result show';
    } else {
        resultDiv.textContent = 'Found';
        resultDiv.className = 'result show';
    }
}

function countCharacters() {
    const text = document.getElementById('text').value.trim();
    const resultDiv = document.getElementById('countResult');

    if (!text) {
        resultDiv.textContent = '';
        resultDiv.className = 'result';
        return;
    }

    const totalCharacters = text.length;
    resultDiv.textContent = totalCharacters;
    resultDiv.className = 'result show';
}

/* 
Author: Myca Joanne M. Faeldonia
Description: This is a demo JavaScript file for FA3.
Date: December 2025
*/
