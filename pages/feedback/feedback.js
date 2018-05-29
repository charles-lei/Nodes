//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stars: '0',
    imageUrl1: "/pages/image/icon-star0.png",
    imageUrl2: "/pages/image/icon-star0.png",
    imageUrl3: "/pages/image/icon-star0.png",
    imageUrl4: "/pages/image/icon-star0.png",
    imageUrl5: "/pages/image/icon-star0.png",
    functions: [
      {
        "name": "我的积分",
        "pic_url": "/pages/image/icon_bp.png",
      },
      {
        "name": "课堂签到",
        "pic_url": "/pages/image/icon_register.png",
      }
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
  modalcnt: function () {
    wx.showModal({
      title: '提示',
      content: '提交成功！！',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  downLoadImage1: function (event) {
    console.log(event)
    var that = this;
    this.setData({
      imageUrl1: "/pages/image/icon_star1.png",
      stars: '1'
    })
  },
  downLoadImage2: function (event) {
    console.log(event)
    var that = this;
    this.setData({
      imageUrl1: "/pages/image/icon_star1.png",
      imageUrl2: "/pages/image/icon_star1.png",
      stars: '2'
    })
  },
  downLoadImage3: function (event) {
    console.log(event)
    var that = this;
    this.setData({
      imageUrl1: "/pages/image/icon_star1.png",
      imageUrl2: "/pages/image/icon_star1.png",
      imageUrl3: "/pages/image/icon_star1.png",
      stars: '3'
    })
  },
  downLoadImage4: function (event) {
    console.log(event)
    var that = this;
    this.setData({
      imageUrl1: "/pages/image/icon_star1.png",
      imageUrl2: "/pages/image/icon_star1.png",
      imageUrl3: "/pages/image/icon_star1.png",
      imageUrl4: "/pages/image/icon_star1.png",
      stars: '4'
    })
  },
  downLoadImage5: function (event) {
    console.log(event)
    var that = this;
    this.setData({
      imageUrl1: "/pages/image/icon_star1.png",
      imageUrl2: "/pages/image/icon_star1.png",
      imageUrl3: "/pages/image/icon_star1.png",
      imageUrl4: "/pages/image/icon_star1.png",
      imageUrl5: "/pages/image/icon_star1.png",
      stars: '5'
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
