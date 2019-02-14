// pages/profile/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    errPage: false,
    name: '名字',
    crmData: {
      show_title: 'CRM客户信息',
      crm_info:[{
        category_name:'ratingcustfield',
        'custom_field_value': [{ label: 'Numminiprogram', value: '234'}]
      }]
    },
    noteInfo: {
      show_title: '销售笔记测试',
      profile_note: {
        // note: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记'
        note: '笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记笔记'
      }
    },
    tagsInfo: {
      show_title:'我的标签（WorkWechat标签）测试',
      tags: ['标签1', '标签1', '标签1', '标签1', '标签1', '标签1', '标签1']
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})