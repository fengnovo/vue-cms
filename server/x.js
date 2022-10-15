require('./plugins/db')();
// const Banner = require('./models/banner');
const AdminUsers = require('./models/adminUsers');

// var banner = new Banner({
//     id: 12335,
//     title: '这是测试banner2',
//     url: 'https://www.taobao.com',
//     to: 'https://www.google.com'
// })

// banner.save((err, doc) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('添加成功');
//     Banner.find({}, (err, doc) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('查询成功');
//     })
// })

// // 修改数据
// Banner.updateOne(
//     {
//         "_id": "634a50f03ed1c50461d8661f"
//     },
//     {
//         to: 'https://email.google.com',
//     },
//     function (err, doc) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('更新成功');
//     }
// )


// // 删除数据
// AdminUsers.deleteOne(
//     {
//         _id: '634a528d24fe3404ec58967b'
//     },
//     function (err) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log('删除成功');
//     }
// );


// var adminUsers = new AdminUsers({
//     userName: 'admin',
//     passWord: '123456',
// })
// adminUsers.save((err, doc) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('添加成功');
//     AdminUsers.find({}, (err, doc) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('查询成功', doc);
//     })
// })

AdminUsers.find({}, (err, doc) => {
    if (err) {
        return console.log(err);
    }
    console.log('查询成功', doc);
})