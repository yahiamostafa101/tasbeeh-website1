let counter = 0;
const counterValue = document.getElementById("counterValue");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");
const audio = document.getElementById("audio");

// عند النقر على زر "نقر للتسبيح"
incrementButton.addEventListener("click", function() {
    counter++;
    counterValue.textContent = counter;

    // إذا وصل العداد إلى 33
    if (counter >= 33) {
        counter = 0; // إعادة تعيين العداد إلى 0
        counterValue.textContent = counter;
        audio.play(); // تشغيل الصوت
    }
});

// عند النقر على زر "إعادة تعيين"
resetButton.addEventListener("click", function() {
    counter = 0;
    counterValue.textContent = counter;
});
