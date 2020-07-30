const isId = (id) => {
  if (/^\d+$/.test(id)) {
    return Number.parseInt(id, 10)
  }
  throw new Error(`id参数无效!`)
}

module.exports = {
  isId,
}
