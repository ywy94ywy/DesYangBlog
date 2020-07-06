## 防抖
描述：在n秒内只执行一次，期间如果再次触发，将重新计时
#### 立即执行
```javascript
const debounce = (() => {
  let time
  return () => {
    if (time) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      // do something
    }, 1000)
  }
})()
```
#### 非立即执行
```javascript
const debounce = (() => {
  let time
  return () => {
    if (!time) {
      // do something
    } else {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      time = null
    }, 1000)
  }
})()
```

## 节流
描述：在n秒内只执行一次
#### 定时器
```javascript
const throttle = (() => {
  let time
  return () => {
    if (!time) {
      // do something
      time = setTimeout(() => {
        time = null
      }, 1000)
    }
  }
})()
```
#### 时间戳
```javascript
const throttle = (() => {
  let time = 0
  return () => {
    let now = new Date()
    if (now - time > 1000) {
      // do something
      time = now
    }
  }
})()

```