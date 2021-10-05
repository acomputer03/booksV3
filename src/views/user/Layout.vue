<template>
  <div >
      <div>
          <UserNavbar :class="{  'navbar-light': true }"></UserNavbar>
      </div>
    <div class="mt-3 position-relative">
      <ToastMessages></ToastMessages>
      <router-view/>
    </div>
  </div>
</template>

<style>
.box {
  min-height: 100vh;
  background: #eee;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    345deg,
    #7373B9 2%,
    #7373B9 60%,
    #ffffff 60%,
    #ffffff 100%,
    #e8e8e8 100%
  );
  letter-spacing: 0.07em;
}
</style>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import UserNavbar from '@/components/user/UserNavbar.vue';

export default {
  components: {
    UserNavbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
