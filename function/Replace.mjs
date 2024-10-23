const Replace = (str, ...replaces) => {
    for (let i of replaces) {
      str = str.replace(i[0], i[1] ?? '')
    }
    return str
}
export default Replace