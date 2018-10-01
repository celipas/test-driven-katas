const wrap = (line, maxLen) => {
    if (!line) { return line }
    const lineInArray = line.split(' ')
    // let maxLenChar = line[maxLen]
    let result = ''

    while (result.length < maxLen) {
        for (let index = 0; index < lineInArray.length; index++) {
            result += lineInArray[index] + ' '
            console.log(result)

        }

    }


    // let firstSpace = line.indexOf(' ', maxLen)
    console.log('firstSpace: ', firstSpace)
    if (maxLen >= line.length) {
        return line
    }

}

module.exports = wrap;