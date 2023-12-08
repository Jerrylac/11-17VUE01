<template >
    <button class="vslotBtn">
        <slot/><i class="fa-solid fa-heart"></i>
    </button>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .vslotBtn{
        color: #fff;
        background: linear-gradient(#424242 25%,#647eff);
        border: none;
        padding:  5px 10px;
        margin:  5%;
        border-radius: 8px;
        cursor: pointer;
    }
</style>