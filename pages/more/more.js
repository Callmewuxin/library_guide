// pages/more/more.js
Page({

  data: {
    logs: []
  },
  onLoad: function () {
    this.getdata();
  },
getdata: function () {//定义函数名称
    var that = this;   // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    console.log('here in more.js')
    wx.request({
      url: 'https://hotpot.club/pos/api/v0/how-are-you',//请求地址

      method: "GET",//get为默认方法/POST
      success: function (res) {
        console.log(res.data);//res.data相当于ajax里面的data,为后台返回的数据

      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  }
})