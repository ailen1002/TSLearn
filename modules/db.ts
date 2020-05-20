var dbUrl = 'xxxx'

function getData():any[] {
    console.log('获取数据库的数据')
    return [
        {
            title: '新闻',
        },
        {
            title: '游戏',
        }
    ]
}
function save() {
    console.log('保存数据成功')
}
// export {dbUrl, getData, save}
export default getData;