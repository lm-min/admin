$(document).ready(function(){

  // 사이드메뉴 사이즈 단축
  let toggle = true; toggle = true;

  $('.btn-toggle').on('click', function() {                
    if (toggle){
      $('.Page').addClass('on').removeClass('off');
      // $(".side-nav span").css({"display":"none"});
      $(".side-nav").addClass('active');
    }
    else{
      $('.Page').removeClass('on').addClass('off');
      $('.side-nav').removeClass('active');
    }

    toggle = !toggle;
  });

  // 메뉴
  let hdTarget = '.navbar .user-menu';
  let hdMenu = '.dropdown-menu';

  $(hdMenu).hide();
  $(hdTarget).on('click',function(){
    $(hdMenu).toggle();
    $('.dropdown-menu .user-id').text('홍길동')
  });
  $(document).mouseup(function(e){
    if($(hdTarget).has(e.target).length==0) {
      $(hdMenu).hide();
    } 
  });

  

  /* ↓ 게시글 '공지고정'으로 테이블 생성시 '.num에 icon_fixed' 클래스 붙임. text 삭제하고 img태그 추가됨 (어떤 이미지로 바뀌는지 예시)
  $('.icon_fixed').one('click',function(){
    let image = $('<img src="/img/ico-fixed.png" alt="고정"/>')
  
 
    $('.icon_fixed span').remove();
    $(this).append(image);
 
    // $('<img>', {
    //   src: '/img/ico-fixed.png',
    //   alt: '고정',
    //   class: 'ico-fixed',
    //   title:'table_fixed',
    // }).appendTo(this);
 
  });
  */

  
  // 활동이력
  $(document).on('click', '.plus', function(){
    const forms =`<div class="form">
                  <input type="text" class="inpBox inpNum" maxlength="6" placeholder="YYYY-MM" style="max-width: 150px;">
                  <input type="text" class="inpBox">
                  <div class="btn-box"> 
                  <button class="plus btn-custom">+</button>
                  <button class="minus btn-custom">-</button>`;
    $('.add-list').append(forms);
  });
  $(document).on('click', '.minus', function(){
    $('.form').eq($(this).index()).remove();
  });


  
  $('.side_menu .dep2').hide();
  $('.side_menu .dep1 > a').on('click', function(){
    let subDep1 = '.side_menu .dep1'

    if($(this).hasClass('active')){
      $(this).next().slideUp(); 
      $(this).removeClass('active');
    }else{
      $(subDep1).find('.active').next().slideUp(); 
      $(subDep1).find('.active').removeClass('active'); 
      $(this).next().slideDown(); 
      $(this).addClass('active');
    }

  });


  $('.pagination .num').on('click', function(){
    $('.pagination .num.active').removeClass('active');
    $(this).addClass('active');
  });


  // 프로필 mark
  $('.mark').on('click', function(){
    $(this).toggleClass('active');
  });
  
  // All_체크박스 (아마도 사용할일 없을지도 모름)
  $('#check_all').on('click', function(){
    $(this).parents('.table').find('input:checkbox').prop('checked', $(this).is(':checked'));
  });
  $('.chk-normal').on('click', function(){
    let is_checked = true;

    $('.chk-normal').each(function(){
      is_checked = is_checked && $(this).is(':checked');
    });
    $('#check_all').prop('checked', is_checked);
    $(this).eq($(this).index()).addClass('active')
  });



  // datepicker

  const datepickerOptions = {
    dateFormat: 'yy-mm-dd',
    showOtherMonths: true,
    showMonthAfterYear: true,
    yearSuffix: "년",
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] ,
    prevText: '전월',
    nextText: '익월',
    maxDate : new Date("2099-12-31"),
    minDate : new Date("2000-01-01"),
    showButtonPanel: true,
    showMonthAfterYear: true,
    currentText : '오늘',
    closeText: '취소',
  };

  $('.datepicker').datepicker(datepickerOptions);


   // timepicker
   $('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 5,
    minTime: '8',
    maxTime: '22:00pm',
    // defaultTime: '8',
    startTime: '08:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true,   
    zindex : 10,
  });

  /* datepicker
  const original_fn = $.datepicker._updateDatepicker;
  $.datepicker._updateDatepicker = function(inst){
    original_fn.call(this, inst);
    const buttonPane = $(this).datepicker("widget").find(".ui-datepicker-buttonpane");

    $("<button type='button' class='ui-datepicker-clean ui-state-default ui-priority-primary ui-corner-all'>삭제</button>")
      .appendTo(buttonPane)
      .click(function(e){
        $.datepicker._clearDate(inst.input);
      })
    ;
  }

  const datepickerOptions = {
    dateFormat: 'yy-mm-dd',
      showOtherMonths: true,
      showMonthAfterYear: true,
      // 달력 텍스트
      yearSuffix: "년",
      monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
      dayNamesMin: ['일','월','화','수','목','금','토'],
      dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] ,
      // 가져온거
      prevText: '전월',
      nextText: '익월',
      maxDate : new Date("2099-12-31"),
      minDate : new Date("2000-01-01"),
      showButtonPanel: true,
      showMonthAfterYear: true,
      currentText : '오늘',
      closeText: '취소',
  };

  $('.datepicker').datepicker(datepickerOptions); //datepicker에 추가적으로 이미지버튼 넣기
  $(".datepicker").on("blur change", function(){
  const $this = $(this);
  const date = $this.val();

  if(date == null || date == "" || date == undefined) return;
  if(!isDateValue(date) || !isInRangeDate(date)){
    $this.val("");
    return;
  }
  function isDateValue(value){
    const format = datepickerOptions.dateFormat;
    try{
      $.datepicker.parseDate(format, value);
      return true;
    } catch (e) {
      return false;
    }
  }
  function isInRangeDate(value){
    const max = datepickerOptions.maxDate;
    const min = datepickerOptions.minDate;
    const date = new Date(value);

    return max > date && date > min;
  }
  });
  */ 



});



// ↓ 첨부파일 다중 업로드 js
let fileNo = 0;
let filesArr = [];

/* 첨부파일 추가 */
function addFile(obj){
  var maxFileCnt = 10;   // 첨부파일 최대 개수
  var attFileCnt = $('.filebox').length;    // 기존 추가된 첨부파일 개수
  var remainFileCnt = maxFileCnt - attFileCnt;    // 추가로 첨부가능한 개수
  var curFileCnt = obj.files.length;  // 현재 선택된 첨부파일 개수

  // 첨부파일 개수 확인
  if (curFileCnt > remainFileCnt) {
      alert("첨부파일은 최대 " + maxFileCnt + "개 까지 첨부 가능합니다.");
  } else {
      for (const file of obj.files) {
        // 첨부파일 검증
        if (validation(file)) {
          // 파일 배열에 담기
          var reader = new FileReader();
          reader.onload = function () {
            filesArr.push(file);
          };
          reader.readAsDataURL(file);

          // 목록 추가
          let htmlData = '';
          htmlData += '<li id="file' + fileNo + '"class="file_box">';
          htmlData += '<span class="file_name">' + file.name + '</span>';
          htmlData += '<button type="button" class="delete" onclick="deleteFile(' + fileNo + ');"><svg xmlns="//www.w3.org/2000/svg" width="18" viewBox="0 0 32 32"><path d="M10.05 23.95a1 1 0 0 0 1.414 0L17 18.414l5.536 5.536a1 1 0 0 0 1.414-1.414L18.414 17l5.536-5.536a1 1 0 0 0-1.414-1.414L17 15.586l-5.536-5.536a1 1 0 0 0-1.414 1.414L15.586 17l-5.536 5.536a1 1 0 0 0 0 1.414z"/></svg></button>';
          htmlData += '</li>';
          $('.file-list').append(htmlData);
          fileNo++;
      } else {
          continue;
        }
      }
  }
  // 초기화
  document.querySelector(".attached input[type=file]").value = "";
}

/* 첨부파일 검증 */
function validation(obj){
  const fileTypes = ['application/zip', 'application/pdf', 'image/gif', 'image/jpeg', 'image/jpeg', 'image/png', 'image/bmp', 'image/tif', 'application/haansofthwp', 'application/x-hwp', 'audio/mp3'];
  if (obj.size > (100 * 1024 * 1024)) {
      alert("최대 파일 용량인 100MB를 초과한 파일은 제외되었습니다.");
      return false;
  } else if (obj.name.lastIndexOf('.') == -1) {
      alert("확장자가 없는 파일은 제외되었습니다.");
      return false;
  } else if (!fileTypes.includes(obj.type)) {
      alert("첨부가 불가능한 파일은 제외되었습니다.");
      return false;
  } else {
      return true;
  }
}

/* 첨부파일 삭제 */
function deleteFile(num) {
  $(".attached #file" + num).remove();
  filesArr[num].is_delete = true;
}


