<template>
    <div class="contaner">
        <div class="modal">
            <i class="fa-solid fa-xmark" @click="$emit(alertMessge)"></i>
        </div>
        <slot>

        </slot>
        <div class="bg"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .contaner{
        position: fixed;
        top: 0px;
        // left: -100px;
        width: 150vmin;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    .modal{
        width: 100vmin;
        height: 100vmin;
        background-color: #fff;
        border-radius: 20px;
        position: fixed;
        flex-direction: column;
        align-items: center;
        .fa-xmark{
            position: absolute;
            top:10;
            right: 10px;
            cursor: pointer;
        }
    }
    .bg{
        position: absolute;
        top:0px;
        left: -100px;
        width: inherit;
        height: inherit;
        background: rgb(0,0,0,0.25);
        backdrop-filter: blur(2px);
    }
</style>