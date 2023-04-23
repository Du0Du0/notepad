let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');
let updateBtn = document.querySelectorAll('.fa-pen-to-square');

// **추가 버튼 활성화 여부**
// 1.입력된 값이 있으면 버튼 활성화
// 2.입력된 값이 없으면 비활성화(기본상태)
input.addEventListener('keyup', () => {
    if(input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

// **추가버튼**
// 입력된 값이 있으면 새로운 할일 목록을 생성
// 새로운 div만들고 클래스 item 추가
// 새로운 할일의 목록의 HTML 추가
// appendChild로 부모 노드에 자식 노드 추가
// input 내용 초기화
addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
        <i class=" fa-solid fa-pen-to-square"></i>
        <i class=" fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else{
        alert('할일을 입력하세요');
    }
})

// **삭제버튼** 
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
} )

// **수정버튼**
// 1. 수정버튼을 한번 누르면 -> 수정 가능한 상태 변경 & 내용입력,
// 2. 수정버튼을 한번 더 누르면 -> 수정 불가능 상태 & 변경내용 저장
let count = 0;

tasks.addEventListener('click', (e) => {
  count += 1;
  if (count % 2 === 1) {
    e.target.parentElement.parentElement.contentEditable = true;
  } else {
    e.target.parentElement.parentElement.contentEditable = false;
  }
});