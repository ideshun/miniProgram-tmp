// pages/voice-list/voice-list.js
const innerAudioContext = wx.createInnerAudioContext();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    aPlay: false,
    rotateNum: 0,
    playProgress: 0,
    currentTime: '',
  },
  clickPlay: function() {
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    let that = this;
    let play = that.data.aPlay;
    if (play) {
      // 暂停
      innerAudioContext.pause()
      // 监听暂停
      innerAudioContext.onPause(() => {
        that.setData({
          aPlay: false,
        })
        console.log('暂停播放');
        // 清空定时，取消旋转
        clearInterval(that.setTimer);
      })
    } else {
      innerAudioContext.play()
      innerAudioContext.onPlay(() => {
        that.setData({
          aPlay: true,
        })
        console.log('开始播放');
        // 清空定时
        clearInterval(that.setTimer);
        // 头像旋转
        that.setTimer = setInterval(() => {
          let rotate = that.data.rotateNum;
          let aProgress = (innerAudioContext.currentTime / innerAudioContext.duration) * 100;
          let playTime = innerAudioContext.duration - innerAudioContext.currentTime;
          let min = parseInt(playTime / 60);
          let sec = parseInt(playTime % 60);
          if(sec<=9){
            sec="0"+sec;
          }
          if (min <= 9) {
            min = "0" + min;
          }
          rotate++;
          that.setData({
            rotateNum: rotate,
            playProgress: aProgress,
            currentTime: min+":"+sec,
          })
        }, 40)
      })
    }
    // 监听正常播放结束
    innerAudioContext.onEnded(() => {
      var that = this;
      clearInterval(that.setTimer);
      that.setData({
        rotateNum: 0,
        aPlay: false,
        playProgress:0,
      })
      console.log("正常播放结束")
    })
  },
  // 长按停止
  audioStop: function() {
    innerAudioContext.stop()
    innerAudioContext.onStop(() => {
      var that = this;
      clearInterval(that.setTimer);
      that.setData({
        rotateNum: 0,
        aPlay: false,
        playProgress: 0,
      })
      console.log("停止成功")
    })
  },
  // 改变进度
  // changeProgress: function (e) {
  //   let that = this;
  //   let seek = innerAudioContext.duration;
  //   innerAudioContext.seek(innerAudioContext.duration * (e.detail.value / 100))
  //   that.setData({
  //     rotateNum: e.detail.value,
  //     playProgress: e.detail.value,
  //   })
  // },
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