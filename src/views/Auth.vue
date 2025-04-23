<!-- filepath: d:\Vuejs\datn\src\views\Auth.vue -->
<template>
  <div class="auth-container min-h-screen flex">
    <!-- Phần bên trái: Hình ảnh và nội dung -->
    <div class="left-section flex-1 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <div class="text-center px-8">
        <h1 class="text-4xl font-bold mb-4">Cách tốt nhất để học.</h1>
        <p class="text-lg">Đăng ký miễn phí.</p>
      </div>
    </div>

    <!-- Phần bên phải: Form đăng nhập/đăng ký -->
    <div class="right-section flex-1 flex items-center justify-center bg-white">
      <div class="w-full max-w-md">
        <!-- Tabs -->
        <div class="flex justify-center mb-6">
          <button
            :class="{
              'border-b-2 border-blue-500 text-blue-500': isLogin,
              'text-gray-500': !isLogin,
            }"
            class="px-4 py-2 font-semibold"
            @click="isLogin = true"
          >
            Đăng nhập
          </button>
          <button
            :class="{
              'border-b-2 border-blue-500 text-blue-500': !isLogin,
              'text-gray-500': isLogin,
            }"
            class="px-4 py-2 font-semibold"
            @click="isLogin = false"
          >
            Đăng ký
          </button>
        </div>

        <!-- Form Đăng nhập -->
        <form v-if="isLogin" @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="loginForm.email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập email"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              id="password"
              v-model="loginForm.password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Đăng nhập
          </button>
        </form>

        <!-- Form Đăng ký -->
        <form v-else @submit.prevent="handleRegister">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Họ và tên</label>
            <input
              type="text"
              id="name"
              v-model="registerForm.name"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập họ và tên"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="registerForm.email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập email"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              id="password"
              v-model="registerForm.password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup(){
    const state = reactive({
      isLogin: true,
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
      },
    });

    const handleLogin = () => {
      console.log('Đăng nhập với:', state.loginForm);
      // Thêm logic xử lý đăng nhập
    };

    const handleRegister = () => {
      console.log('Đăng ký với:', state.registerForm);
      // Thêm logic xử lý đăng ký
    };

    return {
      ...toRefs(state),
      handleLogin,
      handleRegister,
    }
  }
};
</script>

<style scoped>
/* Container tổng thể */
.auth-container {
  display: flex;
  height: 100vh;
}

/* Phần bên trái */
.left-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
}

/* Phần bên phải */
.right-section {
  padding: 2rem;
}

/* Tabs */
button {
  transition: color 0.3s ease, border-color 0.3s ease;
}

button:hover {
  color: #1d4ed8;
  border-color: #1d4ed8;
}

/* Input */
input {
  background-color: #f9f9f9;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  outline: none;
}

/* Nút Đăng nhập/Đăng ký */
button[type="submit"] {
  background-color: #2563eb;
  color: white;
  font-weight: bold;
  padding: 0.75rem;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button[type="submit"]:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

button[type="submit"]:active {
  transform: translateY(0);
}
</style>