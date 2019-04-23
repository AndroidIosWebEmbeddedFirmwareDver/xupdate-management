
const versions = {
   code: 0,
   msg: "",
   data: [{
     "versionId": 10,
     "updateStatus": 2,
     "versionCode": 24,
     "versionName": "1.0.4",
     "uploadTime": "2018-07-30 09:36:39",
     "apkSize": 1697,
     "appKey": "test3",
     "modifyContent": "1、优化api接口。\\r\\n2、添加使用demo演示。\\r\\n3、新增自定义更新服务API接口。\\r\\n4、优化更新提示界面。",
     "downloadUrl": "xupdate_demo_1.0.apk",
     "apkMd5": "03B41AD67A4AD62896BB9A2781718203"
   }, {
     "versionId": 11,
     "updateStatus": 1,
     "versionCode": 34,
     "versionName": "1.23.4",
     "uploadTime": "2018-07-30 09:47:25",
     "apkSize": 1649,
     "appKey": "com.xuexiang.xupdatedemo",
     "modifyContent": "1、优化api接口。\\r\\n2、添加使用demo演示。\\r\\n3、新增自定义更新服务API接口。\\r\\n4、优化更新提示界面。",
     "downloadUrl": "xupdate_demo_1.0.2.apk",
     "apkMd5": "E4B79A36EFB9F17DF7E3BB161F9BCFD8"
   }, {
     "versionId": 12,
     "updateStatus": 1,
     "versionCode": 4,
     "versionName": "1.0.3",
     "uploadTime": "2018-07-30 10:52:53",
     "apkSize": 1649,
     "appKey": "com.xuexiang.xupdatedemo",
     "modifyContent": "1、优化api接口。\\r\\n2、添加使用demo演示。\\r\\n3、新增自定义更新服务API接口。\\r\\n4、优化更新提示界面。",
     "downloadUrl": "xupdate_demo_1.0.2.apk",
     "apkMd5": "E4B79A36EFB9F17DF7E3BB161F9BCFD8"
   }]
}

export default [
   {
     url: '/update/versions',
     type: 'get',
     response: _ => {
       return versions
     }
   }
]

