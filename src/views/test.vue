<script>
export default{
    data(){
        return{
            arr:[1,2,3,4,5,6,7,8,9],
           
        }
    }
}
</script>

<template>

<div class="title"></div>
<div class="main">
    <div class="left"></div>
    <div class="right">
        <div class="top">
            <h1>Title</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aperiam exercitationem possimus, sapiente deserunt rerum velit eveniet molestiae earum quia quae. Maxime esse tempora voluptatem dignissimos maiores. Dolorem, odit dolorum.</span>
        </div>
        <div class="box">

            <div class="arrBox" v-for="item in arr">
                <p>Product name</p>
            </div>
        </div>
    </div>
</div>
<div class="fool"></div>

</template>
<style scoped lang="scss">
.title{
    width: 100vmax;
    height: 20%;
    margin-bottom: 50px;
    background-color: aqua;
}
.main{
    width: 100vmax;
    height: 75%;
    margin-bottom: 20px;
    border: 1px solid black;
    display: flex;
    .left{
        width: 20%;
        height: 100%;
        background-color: aquamarine;
    }
    .right{
        width: 79%;
        height: 100%;
        margin-left: auto;
        .top{
            margin-left: 20px;
            display: flex;
            text-align:left;
            h1{
                font-size: 40px;
            }
            span{
                margin-left: 20px;
            }
        }
        .box{
            display: flex;
            flex-wrap: wrap;
        .arrBox{
            width: 300px;
            height: 300px;
            margin-left: 50px;
            margin-top: 40px;
            background-color: #fff;
            p{
                margin-top: 100%;
            }
        }
        }
    }
}
.fool{
    width: 100vmax;
    height: 5%;
    background-color: aquamarine;
}

.cool{
    width: 200px;
    height: 200px;
    border: 1px solid black;
}
</style>