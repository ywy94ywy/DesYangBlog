export const getDictionarys = ({ code } = {}) => {
  return {
    url: '/dictionary/get',
    method: 'post',
    data: {
      code,
    },
  }
}

export const addDictionary = ({ code, name, value } = {}) => {
  return {
    url: '/dictionary/add',
    method: 'post',
    data: {
      code,
      name,
      value,
    },
  }
}

export const delDictionary = ({ id } = {}) => {
  return {
    url: '/dictionary/del',
    method: 'post',
    data: {
      id,
    },
  }
}
