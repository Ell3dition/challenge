export const validateExistenceOfLetterInName = (name) => {
    const lastLetter = name.slice(-1).toLowerCase();
    const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
    return listLetters.includes(lastLetter)
}
