const editeImgNumber = (num) => {
    if (num < 10) {
        return `0${num}`;
    }
    return `0${num}`
}

export const  getIconUrl = (iconNum) => {
    return `https://developer.accuweather.com/sites/default/files/${editeImgNumber(iconNum)}-s.png`
}

