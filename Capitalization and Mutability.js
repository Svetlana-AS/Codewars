// Функция для преобразования первой буквы слова в верхний регистр (заглавную)
function capitalizeWord(word) {
    // Проверяем, является ли входное слово пустой строкой
    if (word.length === 0) {
        return ""; // Возвращаем пустую строку, если слово пустое
    }

    // Преобразуем первую букву слова в верхний регистр
    // и объединяем с оставшейся частью слова без изменений
    return word[0].toUpperCase() + word.slice(1);
}
