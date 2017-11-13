console.log('js');

var generateButtonClickCount = 0;
var backgroundColor='red';

$(document).ready(readyNow);

function readyNow (){
    $("#generateButton").on('click', generateButtonClick);
    $(document).on('click','#swapButton', swapButtonClick);
    $(document).on('click','#deleteButton', deleteButtonClick);
};//end readyNow function

function generateButtonClick(){
    generateButtonClickCount+=1;
    appendItem='';
    appendItem+='<div>';
    appendItem+='<p>'+generateButtonClickCount;
    appendItem+='<button id="swapButton">Swap</button>';
    appendItem+='<button id="deleteButton">Delete</button>';
    appendItem+='</p>';
    $('body').append(appendItem);
};

function  swapButtonClick () {
    console.log(swapButtonClick);

    if (backgroundColor=='red'){
        $(this).closest('div').css('background-color','yellow');
        backgroundColor = 'yellow'
    }else if (backgroundColor=='yellow'){
        $(this).closest('div').css('background-color','red');
        backgroundColor= 'red';
    };//end if
};//end swapButtonClick

function deleteButtonClick () {
    $(this).closest('div').remove()
}