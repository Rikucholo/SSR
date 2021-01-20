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
      <button id="addButton" class="button">追加</button>
    </div>
    <div class="filter">
      <button class="button">すべて</button>
      <button class="button">作業前</button>
      <button class="button">作業中</button>
      <button class="button">完了</button>
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
