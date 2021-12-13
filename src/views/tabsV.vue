<template>
    <v-card>
      <v-card-text class="text-center">
        <v-btn
            :disabled="items.length===0"
            text
            @click="sub"
        >
          sub
        </v-btn>
        <v-divider
            class="mx-4"
            vertical
        ></v-divider>
        <v-btn
            text
            @click="add"
        >
add
        </v-btn>
      </v-card-text>
<!--      <v-tabs-->
<!--          v-model="tab"-->
<!--          background-color="red lighten-2"-->
<!--          dark-->
<!--      >-->
<!--        <v-tab-->
<!--            v-for="i in list"-->
<!--            :key="i.name"-->
<!--        >-->
<!--          Item {{ i.sex }}-->
<!--        </v-tab>-->
<!--      </v-tabs>-->
<!--      <v-tabs-items v-model="tab">-->
<!--        <v-tab-item-->
<!--            v-for="item in list"-->
<!--            :key="item.name"-->
<!--        >-->
<!--          <v-card flat>-->
<!--            <v-card-text>{{ item.name }}</v-card-text>-->
<!--          </v-card>-->
<!--        </v-tab-item>-->
<!--      </v-tabs-items>-->

        <v-tabs
            v-model="tab"
            background-color="primary"
            dark
            @change="log"
        >
          <v-tab
              v-for="item in items"
              :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
              v-for="item in items"
              :key="item.tab"
          >
            <v-card flat>
              <v-card-text>{{ item.content }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>

</template>

<script>
export default {
  name: "tabsV",
  data: () => ({
    items: [

    ],
    tab: 0,
  }),
methods:{
    add(){
        this.items.push({
          tab:`${Math.ceil(Math.random()*1011) }`,
          content:`${Math.ceil(Math.random()*1011) }`
        })
      this.tabN()
    },
   sub(){
    this.items.splice(this.tab,1)
  },
  log(){
    console.log(this.tab)
  },
tabN(){
     this.tab++
}

},

}
</script>

<style scoped>

</style>
