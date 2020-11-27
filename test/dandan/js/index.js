
function refuseClassification() {

    let num = Math.random() * 10;
    let classify = "";
    let mark = 0;
    let time = 100;
    $('.mark').html(
        "得分: " + mark);
    if (num < 2.5) {
        classify = "厨余";
        $('.chuyu').attr("data-target", "");
    } else if (num < 5) {
        classify = "可回收";
        $('.huishou').attr("data-target", "");
    } else if (num < 7.5) {
        classify = "有害";
        $('.youhai').attr("data-target", "");
    } else {
        classify = "其他";
        $('.qita').attr("data-target", "");
    }
    $('.chuyu').attr("data", "厨余");
    $('.huishou').attr("data", "可回收");
    $('.youhai').attr("data", "有害");
    $('.qita').attr("data", "其他");
    $('#classify').html(
        "请点击属于" + classify + "垃圾的垃圾放入垃圾车内。"
    )
    $('.chuyu,.huishou,.youhai,.qita').click(function () {
        if (this.getAttribute("data-target") == "") {
            mark += 10;
            $('.mark').html(
                "您的成绩为:" + mark);
            if ($(this).parent().index() == 2) {
                this.style.top = "26rem";
            } else if ($(this).parent().index() == 3) {
                this.style.top = "20.6rem";
            } else if ($(this).parent().index() == 4) {
                this.style.top = "15.2rem";
            }
            if ($(this).index() == 0) {
                this.style.left = "41.7%";
            } else if ($(this).index() == 1) {
                this.style.left = "25%";
            } else if ($(this).index() == 2) {
                this.style.left = "8.3%";
            } else if ($(this).index() == 3) {
                this.style.left = "-8.3%";
            } else if ($(this).index() == 4) {
                this.style.left = "-25%";
            } else if ($(this).index() == 5) {
                this.style.left = "-42%";
            }
        } else {
            $('.modal-body').html(
                "此垃圾为：" + this.getAttribute("data") + "垃圾，您的得分为：" + mark
            )
            clearInterval(timer);
        }

    })
    var timer = setInterval(() => {
        time--;
        $('.timer').html(
            "倒计时：" + time
        )
        if (time == 0) {
            $('.modal-body').html(
                "游戏结束!您的得分为: " + mark
            )
            $('.myModal').modal();
            clearInterval(timer);
        }
    }, 1000);
    $('.restart').click(function () {
        location.reload();
    })
}
refuseClassification();