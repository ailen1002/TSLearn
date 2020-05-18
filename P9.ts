interface Config {
    type:string;
    url:any;
    data?:string;
    dataType:string;
}

//原生JS封装ajax
function ajax(config:Config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    xhr.send(config.data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState ==4 && xhr.status == 200) {
            console.log('成功');
            if(config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }else {
                console.log(xhr.responseText)
            }
        }
    }
}
ajax({
    type:'get',
    // data:'name=张三',  //可选属性
    url:'http://a.itying.com/api/productlist',  //api
    dataType:'json'
})