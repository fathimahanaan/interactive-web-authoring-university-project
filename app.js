$(document).ready(function() {
    $('.image').click(function() {
        $(this).css(
            {
                'transform':'rotate(15deg) translate(10px,5px) skew(25deg,0deg)',
                'background-color':'#98AFC7',
                'border': '5px solid #87CEFA'
            }
        );
    });
});