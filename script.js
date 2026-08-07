const contactButton = document.querySelector('#contact-button');
const closeButton = document.querySelector('#close-button');
const title = document.querySelector('h1');
const modal = document.querySelector('#modal');

function openModal() {
    title.textContent = '반갑습니다!!';
    modal.classList.add('is-open');
}

function closeModal() {
    modal.classList.remove('is-open');
}

// 연락처 버튼 → 모달 열기
contactButton.addEventListener('click', openModal);

// 닫기 버튼 → 모달 닫기
closeButton.addEventListener('click', closeModal);

// 배경(오버레이) 클릭 시 닫기 — 안쪽 박스는 제외
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Esc 키로 닫기
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
    }
});
