// Задайте дату Нового Року
const newYearDate = new Date("2023-12-31T23:59:59");

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = newYearDate - currentDate;

    if (timeDifference <= 0) {
        // Новий Рік вже настав
        document.getElementById("countdown").innerHTML = "Новий Рік настав!";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}д ${hours}г ${minutes}хв ${seconds}с`;
    }
}

setInterval(updateCountdown, 1000); // Оновлюємо відлік кожну секунду
updateCountdown(); // Оновлення відліку при завантаженні сторінки
