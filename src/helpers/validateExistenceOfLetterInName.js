export const validateExistenceOfLetterInName = (name) => {
    console.log(name)
    console.log(name[name.length - 1])
    const lastLetter = name.slice(-1).toLowerCase();
    const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
    return listLetters.includes(lastLetter)
}
