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
    } else {
      try {
        this.errorMessage = err.errors[0].message
      } catch (error) {
        console.log(err, error)
        this.errorMessage = '未知错误！'
      }
    }
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
}
