

// 输出调试参数
export function errlog(error) {
  var APIurl = error.config.url
  var url = error.request.responseURL
  var data = JSON.stringify(error.config.data)
  var params = JSON.stringify(error.config.params)
  var responseData = JSON.stringify(error.data)
  var text = `\n请求接口:${APIurl},\n请求地址:${url},\nGET参数：${params},\nPOST参数：${data},\n响应JSON:${responseData}`
  console.error(error, text)
}

var invalidValueArr = ['string', 'undefined']
// 清除对象无值属性
export function cleanObject(obj, invalidValue = invalidValueArr) {
  if (typeof obj === 'object' && Object.keys(obj).length > 0) {
    var cleanData = Object.assign({}, obj)
    Object.keys(obj).forEach(function(item) {
      if (!cleanData[item] || invalidValue.includes(cleanData[item])) {
        delete cleanData[item]
      }
    })
    return cleanData
  }
  return obj
}

// 节流函数
export function throttle(func, wait) {
  let previous = 0
  return function() {
    const now = Date.now()
    const context = this
    const args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}