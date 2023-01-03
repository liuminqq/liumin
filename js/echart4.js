let dom4 = document.getElementById("main4");
let myChart4 = echarts.init(dom4, null, {
    renderer: "canvas",
    useDirtyRect: false,
});
let option4;

option4 = {
    title: {
        text: "2021年中国在线音乐娱乐用户年龄结构占比",
        subtext: "百分比",
    },
    legend: {
        top: "bottom",
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    series: [{
        name: "Nightingale Chart",
        type: "pie",
        radius: [50, 250],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
            borderRadius: 8,
        },
        data: [
            { value: 8, name: "10后" },
            { value: 20, name: "00后" },
            { value: 32, name: "90后" },
            { value: 27, name: "80后" },
            { value: 10, name: "70后" },
            { value: 3, name: "其他" },
        ],
    }, ],
};

if (option4 && typeof option4 === "object") {
    myChart4.setOption(option4);
}

window.addEventListener("resize", myChart4.resize);