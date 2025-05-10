// store/modules/footer.js
export default {
  namespaced: true,
  state: () => ({
    ListInfor: [
      {
        icon: "fas fa-mobile-screen-button",
        title: "0775751954 (Main)",
      },
      {
        icon: "fas fa-mobile-screen-button",
        title: "0775751954 (Secondary)",
      },
      {
        icon: "far fa-envelope",
        title: "duhc1@vmogroup.com",
      },
      {
        icon: "far fa-map",
        title: "Hoai Duc, Hanoi, Vietnam",
      },
      {
        icon: "far fa-clock",
        title: "Mon - Sun: 8:00 AM - 12:00 AM",
      },
    ],
    ListCNC: [
      { icon: "fab fa-facebook", src: "https://www.facebook.com" },
      { icon: "fab fa-instagram", src: "https://www.instagram.com" },
      { icon: "fab fa-twitter", src: "https://www.twitter.com" },
      { icon: "fab fa-youtube", src: "https://www.youtube.com" },
    ],
    ListServies: [
      {
        title: "CUSTOMER SERVICES",
        service: [
          "Terms and Conditions",
          "Return and Refund Policy",
          "Shipping Policy",
          "Privacy Policy",
          "Online Shopping Guide",
        ],
      },
      {
        title: "USAGE TIPS",
        service: [
          "Why choose high-quality silver?",
          "How to clean silver jewelry at home",
          "Differences between S925, S999 silver",
          "Benefits of silver",
          "How to maintain silver jewelry",
        ],
      },
      {
        title: "GENERAL INFORMATION",
        service: [
          "Jewelry News",
          "Membership Benefits",
          "Affiliate Program",
          "Review Rewards",
          "Thank You Gifts",
          "Contact Us",
        ],
      },
      {
        title: "FEEDBACK",
        service: [
          "LiLi values your feedback to enhance products and services.",
          "Please don't hesitate to share your feedback with us. Thank you!",
        ],
      },
    ],
  }),
  mutations: {
    // Nếu bạn cần thay đổi các state này sau này, có thể tạo các mutations ở đây
    setListInfor(state, newListInfor) {
      state.ListInfor = newListInfor;
    },
    setListCNC(state, newListCNC) {
      state.ListCNC = newListCNC;
    },
    setListServies(state, newListServies) {
      state.ListServies = newListServies;
    },
  },
  getters: {
    // Getters để lấy các state đã lưu
    ListInfor: (state) => state.ListInfor,
    ListCNC: (state) => state.ListCNC,
    ListServies: (state) => state.ListServies,
  },
};
