//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    shareList: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    touristList: [],
    currentPage: 1,
    maxPage: '',
    imgUrls: [
      '/image/recommend/recommend01.jpeg',
      '/image/recommend/recommend02.jpeg',
      '/image/recommend/recommend03.jpeg'
    ],
    icon: [{
      'collection': '/image/collection.svg',
      'goto': '/image/goto.svg'
    }, {
        'collection': '/image/collection-r.svg',
        'goto': '/image/goto-r.svg'
      }],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    activeIndex: true,
    themeList:[]
  },
  //事件处理函数
  onShow: function () {
  },
  onLoad: function (query) {
    this.getList();
    this.getTheme();
  },
  getList(){
    let _this = this
    wx.request({
      url: 'http://www.4bbbb.cn/queryTourist',
      data: {
        page: this.data.currentPage
      },
      method: "GET",
      success: function (res) {
        _this.setData({ [`touristList[${_this.data.currentPage - 1}]`] : res.data.items })
        console.log(_this.data.touristList)
        _this.setData({ maxPage: res.data.totalPage})
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  jump(event){
    let id = event.currentTarget.dataset.id
    console.log(event)
    wx.navigateTo({
      url: "/pages/index/detailPage/detailPage?id=" +id
    })
  },
  onReachBottom(){
    console.log("触底了")
    if (this.data.currentPage < this.data.maxPage) {
      this.setData({
        currentPage: ++this.data.currentPage
      })
      this.getList();
    }

  },
  testResponseStatus(){
    wx.request({
      url: 'http://localhost/testResponseStatus2?id=1',
      method: 'GET',
      success: function(res){
        console.log(res)
      }
    })
  },
  changActive (event) {
    console.log(event)
    if (event.currentTarget.dataset.index === "1") {
      this.setData({
        activeIndex: true
      })
    } else {
      if (event.currentTarget.dataset.index === "2" && !this.data.activeIndex) {
        this.setData({
          activeIndex: true
        })
      } else {
        this.setData({
          activeIndex: false
        })
      }
    }
  },
  getTheme(){
    let _this = this
    wx.request({
      url: 'http://www.4bbbb.cn/queryTheme',
      method: 'GET',
      success:function(res){
        _this.setData({
          themeList: res.data
        })
        console.log(res)
      }
    })
  }
})
