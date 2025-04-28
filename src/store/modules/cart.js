// store/modules/cart.js
export default {
    namespaced: true,
    state: () => ({
      slides: [
        { title: 'Slide 1', description: 'Description 1', bgColor: '#411a29', progressColor: '#FF5B79', class: 'slide-item' },
        { title: 'Slide 2', description: 'Description 2', bgColor: '#1E1B4B', progressColor: '#4F46E5', class: 'slide-item' },
        { title: 'Slide 3', description: 'Description 3', bgColor: '#0C3720', progressColor: '#5b874b', class: 'slide-item' }
      ],
    }),
    mutations: {
      setSlides(state, newSlides) {
        state.slides = newSlides;
      },
    },
    getters: {
      slides: (state) => state.slides,
    },
  };
  