class SuccessModel {
  constructor(data = '') {
    this.success = true
    this.data = data
  }
}

class ErrorModel {
  constructor(errorCode = '500', err) {
    this.success = false
    this.data = null
    this.errorCode = errorCode

    if (typeof err === 'string') {
      this.errorMessage = err
    } else if (
      !(err.errors instanceof Array) &&
      typeof err.message === 'string'
    ) {
      this.errorMessage = err.message
    } else {
      try {
        this.errorMessage = err.errors[0].message
      } catch (error) {
        this.errorMessage = '未知错误！'
      }
    }
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
}
