// store/modules/header.js
export default {
    namespaced: true,
    state: () => ({
      options: ['Từ Vựng', 'Hán Tự', 'Mẫu Câu', 'Ngữ Pháp'],
      activeIndex: 0,
    }),
    mutations: {
      setActiveIndex(state, index) {
        state.activeIndex = index;
      },
    },
    getters: {
      options: (state) => state.options,
      activeIndex: (state) => state.activeIndex,
    },
  };
  