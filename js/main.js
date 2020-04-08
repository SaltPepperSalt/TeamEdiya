// mini project js

// 변수를 할당해주는 과정
var menuOpen = $('.btnMenuopen');
var menuClose = $('.btnMenuClose');
var menuItem = $('.menuItem a');
var infoOpen = $('.infoButton');
var infoClose = $('.closeinfoButton');
var infoCard = $('.infoCard');

// tabindex랑 aria-hidden 속성을 추가해주는 과정
menuItem.attr('tabindex', '-1');
menuItem.attr('aria-hidden', 'true');
menuClose.attr('tabindex', '-1');
menuClose.attr('aria-hidden', 'true');
infoClose.attr('tabindex', '-1');

// 부모(navigation)에 isAct를 추가하고, menuItem에 tabindex, aria-hidden 속성값을 변경해주고 
// menuclose버튼이랑 첫 메뉴리스트에서 키를 눌렀을때 실행되는 함수 명시
menuOpen.click(function (e) {
    $(this).parent().addClass('isAct');
    menuItem.attr('tabindex', '0');
    menuItem.attr('aria-hidden', 'false');
    menuClose.attr('tabindex', '0');
    menuClose.attr('aria-hidden', 'false');
    menuClose[0].addEventListener('keydown', handleKeyDownLastLink);
    menuItem[0].addEventListener('keydown', handleKeyDownFirstLink)
});
// 메뉴닫기 버튼에서 탭키를 누르면 첫 메뉴리스트로 포커스를 이동시켜주는 함수
var handleKeyDownLastLink = function (e) {
    if (!e.shiftKey && e.keyCode === 9) {
        var firstMenuItem = menuItem[0];
        e.preventDefault();
        firstMenuItem.focus();
    }
};
// 첫 메뉴리스트에서 shift tab을 눌렀을 때 메뉴 닫기 버튼으로 포커스를 이동시켜주는 함수
var handleKeyDownFirstLink = function (e) {
    if (e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        menuClose.focus();
    }
};
// 메뉴 닫기 버튼을 눌렀을 때, 부모에게서 isAct 클래스를 뺏고
// 메뉴 아이템과 메뉴닫기 버튼으로부터 tabindex와 aria-hidden 속성을 변경시켜주는 것
menuClose.click(function (e) {
    $(this).parent().removeClass('isAct');
    menuItem.attr('tabindex', '-1');
    menuClose.attr('tabindex', '-1');
    menuItem.attr('aria-hidden', 'true');
    menuClose.attr('aria-hidden', 'true');

});
// 상세정보 열기 버튼을 누르면 infocard에 transition 속성을 변화시키고 infoOpen 클래스를 추가한 다음에 aria-hidden 속성을 바꿔주고
// 메뉴 닫기 버튼의 tabindex를 활성화해주는 것
infoOpen.click(function (e) {

    $(this).next().css('transition', 'opacity .5s linear');
    $(this).next().addClass('infoOpen');
    $(this).next().attr('aria-hidden', 'false');
    $(this).next().children('button').attr('tabindex', '0');

});

// 상세정보 닫기 버튼을 누르면 infocard에 transition 속성을 변화시키고 infoOpen 클래스를 뺏은 다음에 aria-hidden 속성을 바꿔주고
// 메뉴 닫기 버튼의 tabindex를 비활성화해주는 것
infoClose.click(function (e) {
    $(this).parent().css('transition', 'opacity .5s linear, z-index 0s .5s')
    // $(this).parent().css('transition', 'opacity .5s linear, z-index 1s')
    $(this).parent().removeClass('infoOpen');
    $(this).parent().attr('aria-hidden', 'true')
    $(this).attr('tabindex', '-1');
});
// 스크롤 업 버튼을 누르면 맨 위로 가게 해주는것
$('.scrollUp').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
});