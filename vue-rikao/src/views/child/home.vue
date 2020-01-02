<template>
    <div>
        <div class="top">
            <input type="text" v-model="user" >
            <button @click="btnEvent">点击搜索</button>
        </div>
        <div class="bottom">
            <div class="div" v-for="(item,index) in list" :key="index">
                <h3>{{item.name}}</h3>
                <p>{{item.child}}</p>
                <b>{{item.number}}</b>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:'',
            list:[
                {
                    name:"我的同桌",
                    child:'哈哈哈哈哈哈哈哈',
                    number:6666
                },
                {
                    name:"我的同桌",
                    child:'敖德萨所大',
                    number:777
                },
                {
                    name:"我的同桌",
                    child:"阿萨达完全二群翁",
                    number:8888
                },
                {
                    name:"我的同桌",
                    child:'奥术大师大将拷贝吧',
                    number:5555
                },
                {
                    name:"我的同桌",
                    child:'囧架架偶极矩偶家',
                    number:3333
                }
            ],
            newList:[]
        }
    },
    computed:{
        
    },
    methods:{
        btnEvent(){
            console.log(this.user)
            if(this.user == ''){
                return this.list
            }else{
                let res = this.list.filter(item=>item.child.includes(this.user))
                this.list = res
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.div{
    width: 100%;
    height: 100px;
    background: #eee;
    margin-top: 5px;
}
</style>
