if (window.localStorage.questionAnswers == undefined)
{
    window.localStorage.setItem('questionAnswers', '[]')
}

if (window.location.pathname.includes('/test/')) {
    var questionAnswers = JSON.parse(window.localStorage.questionAnswers)
    // console.log(questionAnswers)

    console.log('this is a test')
    window.onbeforeunload = function(){
        const nodeArray = document.querySelector('form').children
        var arrayOfAnswers = []
        nodeListToArray(nodeArray).forEach(element => {
            if (element.id.startsWith('questionNumber') && !element.id.endsWith('_id')) {
                var question = element.querySelector('.questionText').innerText
                var answer = element.querySelector('.answerGiven').innerText
                arrayOfAnswers.push({'question':question, 'answer':answer})
            }
        })
        var answersObject = {'title':document.querySelector('.title').replace('Take Test: ',''), 'answers':arrayOfAnswers}
        try {
            questionAnswers.push(answersObject)
            window.localStorage.questionAnswers = JSON.stringify(questionAnswers)
        }
        catch(err) {console.error(err)}
        return 'Are you sure you want to leave?';
    };
}





function nodeListToArray(array) {
    var newArray = []
    for (let index = 0; index < array.length; index++) {
        newArray[index] = array[index];
    } 
    return newArray;
}