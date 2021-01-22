<template>
  <section clas="container">
    <v-text-field
      label="タスクを入力してください"
      hide-details="auto"
      name="addName"
      id="addName"
      v-model="content"
    ></v-text-field>
    <v-btn elevation="2" id="addButton" @click="insert">追加</v-btn>
    <div class="filter">
      <v-btn elevation="2">すべて</v-btn>
      <v-btn elevation="2">作業前</v-btn>
      <v-btn elevation="2">作業中</v-btn>
      <v-btn elevation="2">完了</v-btn>
    </div>
    <table class="Lists">
      <thead>
        <tr>
          <th>タスク</th>
          <th>登録日時</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in todos" :key="index">
          <td>{{ item.content }}</td>
          <td>{{ item.created }}</td>
          <td>
            <button class="button button--yet" @click="changeState(item)">
              {{ item.state }}
            </button>
          </td>
          <td>
            <button class="button button--delete" @click="remove(item)">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {
      content: '',
    }
  },
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    insert() {
      if (this.content !== '') {
        this.$store.commit('insert', { content: this.content })
        this.content = ''
      }
    },
    remove: function (todo) {
      this.$store.commit('remove', todo)
    },
    changeState: function (todo) {
      this.$store.commit('changeState', todo)
    },
    asyncData(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            title: 'title from asyncData',
            async_data_time: new Date(),
          })
        }, 50000)
      }).then((res) => {
        return res
      })
    },
  },
}
</script>
