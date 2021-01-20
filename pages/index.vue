<template>
  <section clas="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input
        type="text"
        name="addName"
        id="addName"
        placeholder="タスクを入力してください"
      />
      <v-btn elevation="2" id="addButton">すべて</v-btn>
    </div>
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
        <tr>
          <td>テスト</td>
          <td>2020-04-30 17:00</td>
          <td><button class="button button--yet">作業前</button></td>
          <td><button class="button button--delete">削除</button></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
}
</script>
