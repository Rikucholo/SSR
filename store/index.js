import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
        { content: 'テスト', created: '2020-04-30 17:00', state: '作業前' },
        {
          content: 'コーディング',
          created: '2020-04-30 17:00',
          state: '作業中',
        },
        { content: '環境構築', created: '2020-04-30 17:00', state: '完了' },
      ],
    }),
  })
}

export default createStore
