//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    cores: [
      [
        { id: 'read',name: '借阅功能' },
        { id: 'computer',name: '机房' },
        { id: 'movie',name: '小影厅' },
        { id: 'e',name: 'e通道'},
        { id: 'discuss',name: '研讨间' },
        { id:'floor', name: '楼层介绍' },
        { id:'chair' ,name: '学期讲座'},
        { id:'advice' ,name: '意见反馈' },
        { id:'time', name: '开放时间' },
        { id:'stage', name: '座位图' }
      ],
      [
        { id:'rules', name:'规章制度'}
      ]
    ]
  }
}
)
   