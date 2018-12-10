// pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [{
        img: 'image/mi.jpg',
        dzzs: '22',
        collected: 1,
        id: 1
      },
      {
        img: 'image/mi.jpg',
        dzzs: '33',
        collected: 0,
        id: 2
      },
      {
        img: 'image/mi.jpg',
        dzzs: '44',
        collected: 1,
        id: 3
      },
      {
        img: 'image/mi.jpg',
        dzzs: '555',
        collected: 1,
        id: 4
      },
      {
        img: 'image/mi.jpg',
        dzzs: '666',
        collected: 0,
        id: 5
      },
      {
        img: 'image/mi.jpg',
        dzzs: '777',
        collected: 0,
        id: 6
      }
    ],
  },

  // 更改点赞状态
  onCollectionTap: function(event) {
    // 获取当前点击下标
    var index = event.currentTarget.dataset.index;
    // data中获取列表
    var message = this.data.goodsList;
    for (let i in message) { //遍历列表数据
      if (i == index) { //根据下标找到目标
        var collectStatus = false
        if (message[i].collected == 0) { //如果是没点赞+1
          collectStatus = true
          message[i].collected = parseInt(message[i].collected) + 1
        } else {
          collectStatus = false
          message[i].collected = parseInt(message[i].collected) - 1
        }
        wx.showToast({
          title: collectStatus ? '收藏成功' : '取消收藏',
        })
      }
    }
    this.setData({
      goodsList: message
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})