import { defineStore } from "pinia";

export default defineStore("counter",{

    state(){
        return {
            location: 1,
        }
    },
    getters:{
        locationInfo(){
            return`現在位置:${this.location}`
        }
    },
    actions:{
        getLocation(){
        console.log(this.location);
    },
    setLocation(num){
        this.location=num;  
    },
    getf(){
        fetch("https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station")
    .then((response) => response.json())
    .then((data) => {
    // obj2=data
    console.log(data);
    });
    }
}
})
