<template>
    <div class="search">
        <input v-model:value="cityName" placeholder="请输入城市名字" spellcheck="false" type="text">
        <button @click="search"><img src="../assets/images/search.png"></button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Search',
        data() {
            return {
                cityName: ''
            }
        },
        methods: {
            search() {
                // 参数校验
                if (!this.cityName.trim()) return
                // 发送 AJAX 请求，根据城市的名字获取纬度和经度。
                const apiKey = '78b262ed7919f0d79a2ca50a4a6f82bf'
                // 使用ES6模板语法进行字符串拼接
                const apiUrlGetLatAndLon = `https://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&appid=${apiKey}`
                axios.get(apiUrlGetLatAndLon).then(
                    response => {
                        // 返回值校验
                        if (!response.data.length) {
                            // 触发事件，传递数据给 Weather 组件
                            const weather = {
                                // 是否展示 Weather 组件
                                isShow: false,
                                isNotFound: true
                            }
                            this.$bus.$emit('displayNotFound', weather)
                            return
                        }
                        console.log('响应数据：', response.data)
                        // 获取纬度和经度
                        const lat = response.data[0].lat;
                        const lon = response.data[0].lon;
                        console.log('纬度：', lat, '，经度：', lon)
                        // 再发送一个 AJAX 请求，调用接口，根据纬度和经度获取天气信息
                        const apiUrlGetWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
                        axios.get(apiUrlGetWeather).then(
                            response => {
                                console.log('响应数据：', response.data)
                                // 从响应的数据当中获取我们需要的信息：温度、湿度、风速、天气图标
                                // 将获取到的需要的数据封装成一个 weather 对象，传递给 Weather 组件
                                const weather = {
                                    imgPath: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                                    temp: response.data.main.temp,
                                    humidity: response.data.main.humidity,
                                    windSpeed: response.data.wind.speed,
                                    city: this.cityName,
                                    // 是否展示 Weather 组件
                                    isShow: true,
                                    isNotFound: false
                                }
                                // 触发事件，传递数据。使用全局事件总线
                                this.$bus.$emit('displayWeather', weather)
                            }, error => {
                                console.log('错误信息：', error.message)
                            }
                        )
                    }, error => {
                        console.log('错误信息：', error.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>
    /*搜索框样式*/
    .search {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .search input {
        border: 0;
        outline: 0;
        background: #ebfffc;
        color: #555;
        padding: 10px 25px;
        height: 60px;
        border-radius: 30px;
        flex: 1;
        margin-right: 16px;
        font-size: 18px;
    }

    .search button {
        border: 0;
        outline: 0;
        background: #ebfffc;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        cursor: pointer;
    }

    .search button img {
        width: 16px;
    }

</style>
