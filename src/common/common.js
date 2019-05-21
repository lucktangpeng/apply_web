const course_url = "http://192.168.10.105:8000/api/course/"
const phone_post_url = "http://192.168.10.105:8000/api/phone/"
const sum_url = "http://192.168.10.105:8000/api/sum/"
const  record_url="http://192.168.10.105:8000/api/record/"

export default{
    course_url,
    phone_post_url,
    sum_url,
    record_url,
    toblus() {
        var currentPosition, timer;
        var speed = 1;//页面滚动距离
        timer = setInterval(function () {
            currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            currentPosition -= speed;
            window.scrollTo(0, currentPosition);//页面向上滚动
            currentPosition += speed; //speed变量
            window.scrollTo(0, currentPosition);//页面向下滚动
            clearInterval(timer);
        }, 1);
    }
}