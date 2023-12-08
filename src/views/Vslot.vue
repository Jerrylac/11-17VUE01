<template >
    <VslotBtn>
        Click Me Quick!!
    </VslotBtn>
    <VslotName>
        <template v-slot:header>
            <h1>VslotName:header</h1>
        </template>
        <p>No header</p>
    </VslotName>
    <VslotName v-for="item in arr">
        <template v-slot:[item.type]>
            <h1 class="nameDynamic">{{item.nama}}</h1>
        </template>
    </VslotName>
    <Scopedslot v-slot="slotProps">
        {{ slotProps.text }}&{{ slotProps.count }}
        <h1>TTT</h1>
    </Scopedslot>
    <Scopedslot v-slot="{text,count}">
        {{ text }}xxx{{ count }}
    </Scopedslot>
    <button type="button" @click="openModal">BTN</button>
    <VsloModal v-show="isShow" @alertMessge="openModal">

    </VsloModal>
</template>
<script>
import VslotBtn from '../components/VslotBtn.vue'
import VslotName from '../components/VslotName.vue'
import Scopedslot from '../components/Scopedslot.vue'
import VsloModal from '../components/VsloModal.vue'
export default {
    data(){
        return{
            arr:[
                {
                    type:"header",
                    name:"123"
                },
                {
                    type:"footer",
                    nama:"321"
                },
                {
                    type:"header",
                    nama:"888"
                }
            ],
            isShow:false
        }
    },
    components:{
        VslotBtn,
        VslotName,
        Scopedslot,
        VsloModal
    },
    methods:{
        openModal(){
            this.isShow= !this.isShow
        }
    },
}
</script>
<style lang="">
    
</style>