/* 로딩페이지 구현 */
const loadingPage = document.getElementById('loading-page');
const loadingBar = document.querySelector('.loading-bar');
const loadingText = document.querySelector('.loading-text');
const loadingImage = document.querySelector('.loading-image img');
let isLoading = true;

window.onload = () => {
  loadingBar.style.width = '100%';
  setTimeout(() => {
    loadingImage.style.transform = 'scale(0.6) translate(-10%, 10%)';
    loadingText.innerHTML = `포트폴리오가 도착했습니다!
    <i>본 사이트는 1920x1080 해상도에 최적화되어 있습니다.</i>`;
    setTimeout(() => {
      loadingImage.style.transform = 'scale(0.6) translate(135%, -135%)';
      setTimeout(() => {
        loadingPage.style.opacity = 0;
        setTimeout(() => {
          loadingPage.style.display = 'none';
          isLoading = false;
        }, 1200)
      }, 800)
    }, 900)
  }, 1000)

}


const sections = document.querySelectorAll('section'); // 모든 섹션 요소
let pageNumber = 0; // 현재 페이지 번호
let isScrolling = false; // 스크롤 중인지 확인

const sectionId = document.querySelectorAll('#section01, #section02, #section03, #section04, #section05');

const sectionDistances = Array.from(sectionId).map(section => ({
  d1: section.querySelector('.distance1'),
  d2: section.querySelector('.distance2'),
  d3: section.querySelector('.distance3'),
  d4: section.querySelector('.distance4'),
  d5: section.querySelector('.distance5'),
}));

const section1 = sectionId[0];
const section2 = sectionId[1];
const section3 = sectionId[2];
const section4 = sectionId[3];
const section5 = sectionId[4];

const background = document.getElementById('background');
let timer = null; // 타이머 초기화

window.addEventListener("wheel", (e) => {
  if (isLoading || isScrolling) return; // 로딩 중이거나 스크롤 중일 때 함수 작동 멈춤

  if (e.deltaY > 0) {
    // 아래로 스크롤
    if (pageNumber >= sections.length - 1) return; // 마지막 섹션일 경우 멈춤
    pageNumber++;
  } else if (e.deltaY < 0) {
    // 위로 스크롤
    if (pageNumber <= 0) return; // 첫 번째 섹션일 경우 멈춤
    pageNumber--;
  }

  // 스크롤 시작
  isScrolling = true;

  // 모든 섹션 display: none 처리 후 현재 섹션만 보이게 설정
  sections.forEach((section, index) => {
if (pageNumber === 0) { // section1 초기 설정
//section01
sectionDistances[0].d1.style.transform = 'scale(1)';
sectionDistances[0].d2.style.transform = 'scale(1)';
sectionDistances[0].d3.style.transform = 'scale(1)';
sectionDistances[0].d4.style.transform = 'scale(1)';
sectionDistances[0].d5.style.transform = 'scale(1)';

//section02
section2.style.transform = 'scale(0.4)';
section2.style.filter = 'blur(3px) grayscale(30%)';

//section03
section3.style.transform = 'scale(0.2)';
section3.style.filter = 'blur(6px) grayscale(60%)';


//section04 + section05
section4.style.transform = 'scale(0)';
section5.style.transform = 'scale(0)';

background.style.transform = 'scale(1)';
if (timer) {
  clearTimeout(timer);
}
timer = setTimeout(() => {
  section1.style.display = 'block';
  timer = setTimeout(() => {
    section1.style.opacity = 1;
    timer = null;
  }, 200);
}, 400);
} else if (pageNumber === 1) { // section2
//section1 세부 거리 설정
sectionDistances[0].d1.style.transform = 'scale(18)';
sectionDistances[0].d2.style.transform = 'scale(14)';
sectionDistances[0].d3.style.transform = 'scale(10)';
sectionDistances[0].d4.style.transform = 'scale(8)';
sectionDistances[0].d5.style.transform = 'scale(4)';
sectionDistances[1].d1.style.transform = 'scale(1)';
sectionDistances[1].d2.style.transform = 'scale(1)';
sectionDistances[1].d3.style.transform = 'scale(1)';
sectionDistances[1].d4.style.transform = 'scale(1)';
sectionDistances[1].d5.style.transform = 'scale(1)';

//section02 당기기
section2.style.transform = 'scale(1)';
section2.style.filter = 'unset';
sectionDistances[2].d3.style.transform = 'scale(1) translate(-45%, -30%) rotate(-10deg)';

//section03 당기기
section3.style.transform = 'scale(0.4)';
section3.style.filter = 'blur(3px) grayscale(30%)';

//section04 당기기
section4.style.transform = 'scale(0.2)';
section4.style.filter = 'blur(6px) grayscale(60%)';
sectionDistances[3].d3.querySelector('.work-slide').style.opacity = 0;
sectionDistances[3].d3.querySelector('.work-slide').style.backgroundColor = '#000000';

background.style.transform = 'scale(2)';
if (timer) {
  clearTimeout(timer);
}
timer = setTimeout(() => {
  //section1 없애고 section2 살리기
  section1.style.display = 'none';
  section2.style.display = 'block';
  timer = setTimeout(() => {
    section1.style.opacity = 0;
    section2.style.opacity = 1;
    timer = null;
  }, 200);
}, 400);
} else if (pageNumber === 2) { // section3
//section02 세부 설정
sectionDistances[1].d1.style.transform = 'scale(18)';
sectionDistances[1].d2.style.transform = 'scale(14)';
sectionDistances[1].d3.style.transform = 'scale(10)';
sectionDistances[1].d4.style.transform = 'scale(8)';
sectionDistances[1].d5.style.transform = 'scale(4)';
sectionDistances[2].d1.style.transform = 'scale(1)';
sectionDistances[2].d2.style.transform = 'scale(1)';
sectionDistances[2].d3.style.transform = 'scale(1)';
sectionDistances[2].d4.style.transform = 'scale(1)';
sectionDistances[2].d5.style.transform = 'scale(1)';

//section03 당기기
section3.style.transform = 'scale(1)';
section3.style.filter = 'unset';
sectionDistances[3].d3.style.transform = 'scale(1) translate(60%, -50%) rotate(20deg)';

//section04 당기기
section4.style.transform = 'scale(0.4)';
section4.style.filter = 'blur(3px) grayscale(30%)';
sectionDistances[3].d3.querySelector('.work-slide').style.opacity = 0;
sectionDistances[3].d3.querySelector('.work-slide').style.backgroundColor = '#000000';


background.style.transform = 'scale(4)';
if (timer) {
  clearTimeout(timer);
}
timer = setTimeout(() => {
    //section2 없애고 section3 살리기
  section2.style.display = 'none';
  section3.style.display = 'block';
  timer = setTimeout(() => {
    section2.style.opacity = 0;
    section3.style.opacity = 1;
    timer = null;
  }, 200);
}, 400);
} else if (pageNumber === 3) { // section4
sectionDistances[2].d1.style.transform = 'scale(18)';
sectionDistances[2].d2.style.transform = 'scale(14)';
sectionDistances[2].d3.style.transform = 'scale(10)';
sectionDistances[2].d4.style.transform = 'scale(8)';
sectionDistances[2].d5.style.transform = 'scale(4)';
sectionDistances[3].d1.style.transform = 'scale(1)';
sectionDistances[3].d2.style.transform = 'scale(1)';
sectionDistances[3].d3.style.transform = 'scale(1)';
sectionDistances[3].d4.style.transform = 'scale(1)';
sectionDistances[3].d5.style.transform = 'scale(1)';
//section04 당기기
section4.style.transform = 'scale(1)';
section4.style.filter = 'unset';
section5.style.opacity = 0;
background.style.transform = 'scale(4)';
background.style.opacity = 1;
if (timer) {
  clearTimeout(timer);
}
timer = setTimeout(() => {
  //section3 없애고 section4 살리기
  section3.style.display = 'none';
  section4.style.display = 'block';
  sectionDistances[3].d3.querySelector('.work-slide').style.opacity = 1;
  timer = setTimeout(() => {
    section3.style.opacity = 0;
    section4.style.opacity = 1;
    section5.style.transform = 'scale(0.6)';
    sectionDistances[3].d3.querySelector('.work-slide').style.backgroundColor = '#F9F9F9';
    timer = null;
  }, 200);
}, 400);
} else if(pageNumber === 4){ //section5
//section04 세부 설정
sectionDistances[3].d1.style.transform = 'scale(18)';
sectionDistances[3].d2.style.transform = 'scale(14)';
sectionDistances[3].d3.style.transform = 'scale(10)  translate(60%, -50%) rotate(20deg)';
sectionDistances[3].d4.style.transform = 'scale(8)';
sectionDistances[3].d5.style.transform = 'scale(4)';

background.style.transform = 'scale(6)';
if (timer) {
  clearTimeout(timer);
}
timer = setTimeout(() => {
  //section4 없애고 section5 살리기
  section4.style.display = 'none';
  section5.style.display = 'block';
  section5.style.transform = 'scale(1)';
  timer = setTimeout(() => {
    section4.style.opacity = 0;
    background.style.opacity = 0;
    timer = setTimeout(() => {
      section5.style.opacity = 1;
      timer = null;
    },1000)
  }, 200);
}, 400);
}});

  // 스크롤 완료 후 다시 스크롤 가능하게 설정 (2초 대기)
  setTimeout(() => {
    isScrolling = false;
  }, 1500);
});

//paper index 클릭하면 페이지 전환되는 함수
const paperIndex = document.querySelectorAll('.paper-index');
paperIndex.forEach(item => {
item.addEventListener('click', function() {
const index = item.getAttribute('data-index');
const paperItem = document.getElementById(index);
const paperItemAll = document.querySelectorAll('.paper-item');
paperItemAll.forEach((p) => {
  p.style.zIndex = '';
  p.classList.remove('active');
  
});
paperItem.classList.add('active');
paperItem.style.zIndex = 4;
});
});

//pad icon 클릭하면 active 붙는 함수

const skills = [
{id: 1, data: 'vscode', name: 'VS Code', rate: 85, desc: '대부분의 개발을 VS Code로 진행합니다.<br>주로 사용되는 기능 및 단축키 등을 능숙하게 사용할 수 있습니다.', image: 'images/icon-vscode.svg'},
{id: 2, data: 'html', name: 'HTML5', rate: 95, desc: 'CSS 및 JavaScript 구현을 염두에 둔 HTML 코드 작성에 능숙합니다. 시맨틱 태그를 사용할 수 있습니다.', image: 'images/icon-html.svg'},
{id: 3, data: 'css', name: 'CSS', rate: 90, desc: '디자인을 구현하는 데 필요한 CSS 기능을 최대로 활용할 수 있습니다. 가능한 한 이미지 삽입보다는 CSS로 최대한 구현하는 개발을 추구합니다.', image: 'images/icon-css.svg'},
{id: 4, data: 'sass', name: 'Sass / SCSS', rate: 85, desc: 'Sass, 특히 SCSS 문법으로 CSS를 작성할 수 있습니다. 팀프로젝트 작업 시 SCSS를 활용했습니다.', image: 'images/icon-sass.svg'},
{id: 5, data: 'javascript', name: 'JavaScript', rate: 80, desc: '동적 웹페이지를 제작하기 위한 대부분의 기능에 JavaScript를 사용했습니다. 공부를 위해 최대한 Vanilla JS로 제작하고자 노력했습니다.', image: 'images/icon-javascript.svg'},
{id: 6, data: 'react', name: 'React', rate: 80, desc: 'jsx 문법, Router, npm 라이브러리 등을 활용해 간단한 React 페이지를 구현할 수 있습니다. 컴포넌트를 적극적으로 활용합니다.', image: 'images/icon-react.svg'},
{id: 7, data: 'git', name: 'Git', rate: 70, desc: 'GitHub에 파일을 올리기 위해 Git Bash를 활용한 적이 있습니다. 오류를 읽고 해결 방법을 모색할 수 있습니다.', image: 'images/icon-git.svg'},
{id: 8, data: 'github', name: 'GitHub', rate: 80, desc: '리포지토리를 생성하여 파일을 업로드하고 유지 보수하는 등의 기능을 사용할 수 있습니다. GitHub로 웹페이지를 호스팅 할 수 있습니다.', image: 'images/icon-github.svg'},
{id: 9, data: 'netlify', name: 'Netlify', rate: 70, desc: 'GitHub에 파일 업로드가 완료된 리포지토리를 Netlify를 이용하여 웹 호스팅 할 수 있습니다.', image: 'images/icon-netlify.svg'},
{id: 10, data: 'notion', name: 'Notion', rate: 85, desc: '개인 일정 등을 Notion에서 관리하고, 개발 이슈 등을 Notion에 작성한 적이 있습니다. 간단한 정리가 가능합니다.', image: 'images/icon-notion.svg'},
{id: 11, data: 'figma', name: 'Figma', rate: 90, desc: '웹 페이지를 디자인하는 과정에서 Figma를 적극적으로 활용합니다. 제작한 디자인을 CSS 코드로 내보내거나, 컴포넌트 등을 활용할 수 있습니다.', image: 'images/icon-figma.svg'},
{id: 12, data: 'photoshop', name: 'Photoshop', rate: 85, desc: '배경 투명화(누끼), 색조 보정, 이미지 편집, 클리핑 레이어 등 기본적인 기능을 사용할 수 있습니다.', image: 'images/icon-photoshop.svg'},
{id: 13, data: 'illustrator', name: 'Illustrator', rate: 80, desc: 'svg, ai 파일 등에서 오브젝트를 추출하여 변형 및 편집 할 수 있습니다. 패스파인더, 오프셋 패스 등 기본적인 기능을 사용할 수 있습니다.', image: 'images/icon-illustrator.svg'},
{id: 14, data: 'premiere', name: 'Premiere', rate: 85, desc: '간단한 영상 편집, 컷 전환, 자막 삽입, 렌더링 시 포맷 변경 등 기본적인 기능을 사용할 수 있습니다.', image: 'images/icon-premiere.svg'},
{id: 15, data: 'clipstudio', name: 'Clip Studio', rate: 98, desc: '드로잉부터 3D 배치까지 거의 대부분의 기능을 자유롭게 사용할 수 있습니다. 외에도 드로잉 프로그램의 매커니즘을 이해하는 속도가 빠릅니다.', image: 'images/icon-clipstudio.svg'},
];

const padIcon = document.querySelectorAll('.pad-icon');
padIcon.forEach((icon) => {
icon.addEventListener('click', () => {
  const iconData = icon.getAttribute('data-icon');
  const skillPopup = document.querySelector('.skill-popup');
  skillPopup.innerHTML = '';
  skills.forEach((skill) => {
    if(skill.data === iconData){
      let createDiv = document.createElement('div');
      createDiv.innerHTML = `
        <div class="popup-icon">
          <img src="${skill.image}" alt="${skill.name}">
          <span>${skill.name}</span>
        </div>
        <div class="skill-rate">
          <div class="skill-rate-percent" style="width: 0%">${skill.rate}%</div>
        </div>
        <div class="skill-desc">
          <p>
            ${skill.desc}
          </p>
        </div>
        <button class="popup-close"><i class="bi bi-chevron-left"></i>뒤로</buttton>
      `
      createDiv.classList.add('popup-wrap');
      skillPopup.appendChild(createDiv);
      skillPopup.classList.add('active');
      skillPopup.addEventListener('click', function() {
        this.classList.remove('active'); //화면 누르면 꺼짐
      });

      let popupClose = document.querySelector('.popup-close');
      popupClose.addEventListener('click', () => {
        skillPopup.classList.remove('active'); //뒤로 버튼 눌러도 꺼짐
      })
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        document.querySelector('.skill-rate-percent').style.width = `${skill.rate}%`
      }, 100);
    }
  })
})
})

/* swiper */
    var swiper = new Swiper(".work-slide", {
      pagination: {
        el: ".swiper-pagination",
      },
    });


/* 텍스트 복사 함수 */

function copyText(text){
  let copiedText = document.querySelector('.copied-text');
  window.navigator.clipboard.writeText(text).then(() => {
    let timer = null;
    copiedText.style.opacity = 1;
    if (timer) {
      clearTimeout(timer);
    }
      timer = setTimeout (() => {
        copiedText.style.opacity = 0;
        timer = null;
      }, 1000);
  });
}