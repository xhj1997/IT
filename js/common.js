function my$(id){
    return document.getElementById(id);
}

function my$byTagName(tagname){
    return document.getElementsByTagName(tagname);
}

function setInnerText(element,text){
    //判断element.textContent属性是否存在，如果不存在，说明我们的浏览器不是ie8,我们就使用innerText属性
    if(element.textContent == "undefined") {
        element.innerText = text;
    }
    //如果element.textContent存在，说明是ie8，就用textContent属性
    else{
        element.textContent = text;
    }
}

function getInnerText(element){
    //判断element.textContent属性是否存在，如果不存在，说明我们的浏览器不是ie8，我们就使用innerText属性
    if(element.textContent == "undefined") {
        return element.innerText;
    }
    //如果element.textContent存在，说明是ie8，就用textContent属性
    else{
        return element.textContent;
    }
}

//获取样式的兼容性的写法
function getStyle(obj,attr){
    //IE
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    //谷歌火狐
    else{
        return getComputedStyle(obj,false)[attr];
    }
}

//设置样式
function css(obj,attr,value){
    if(arguments.length == 2){
        return getStyle(obj,attr);
    }
    else if(arguments.length == 3){
        obj.style[attr] = value;
    }
}
