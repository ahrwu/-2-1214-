const sosu = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

const printNumberAndSosu = (num) => {
    console.log(`${num}은(는) ${sosu(num) ? '소수입니다.' : '소수가 아닙니다.'}`);
}

let number = 0;

const numberPlus = () => {
    number++;
    printNumberAndSosu(number);
}

// + 버튼 클릭 이벤트 핸들러 등록
document.getElementById('plusButton').addEventListener('click', numberPlus);