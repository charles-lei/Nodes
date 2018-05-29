//index.js    
//获取应用实例    
var app = getApp()
    
Page({
  data: {
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
    ],
    functions: [
      {
        "name": "我的积分",
        "pic_url": "/pages/image/icon-01.png",
        "url": "/pages/score/score"
      },
      {
        "name": "课堂签到",
        "pic_url": "/pages/image/icon-02.png",
        "url": "/pages/qiandao/qiandao"
      },
      {
        "name": "课上抽奖",
        "pic_url": "/pages/image/icon-03.png",
        "url":"/pages/bp/bp"
      },
      {
        "name": "课程评价",
        "pic_url": "/pages/image/icon-04.png",
        "url": "/pages/feedback/feedback"
      },
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }, 
  scan() {
    wx.scanCode({
      success: (res) => {
        console.log("扫码结果");
        console.log(res);
        this.setData({
          img: res.result
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })  
  },
  showok: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  formSubmit: function (e) {
  
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
    
      console.log(e.detail.value)
      e.detail.value

}
})
