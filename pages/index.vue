<template>
  <section clas="container">
    <v-text-field
      label="タスクを入力してください"
      hide-details="auto"
      name="addName"
      id="addName"
    ></v-text-field>
    <v-btn elevation="2" id="addButton">追加</v-btn>
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
            <button class="button button--yet">{{ item.state }}</button>
          </td>
          <td><button class="button button--delete">削除</button></td>
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
    }
  },
  computed: {
    ...mapState(['todos']),
  },
}
</script>
