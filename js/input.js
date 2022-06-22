// input - radio

$(document).ready(function(){

  const emphasizeText = '★메일 확인 필수★';

  // 필수문구
 $('[name=isEmphasize]').on('change', function (e) {
   if ($(this).val() === 'Yes') {
     $('.cont-emphasize').empty().text(emphasizeText);
   } else {
     $('.cont-emphasize').empty();
   }
 });

});



