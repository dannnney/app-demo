<template>
  <div class="flex-col page">
    <div class="flex-col header space-y-16">
      <div class="flex-row justify-between items-center group">
        <span class="text">9:41</span>
        <div class="flex-row space-x-4">
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735782826391.png"
          />
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735763872939.png"
          />
          <img
            class="image_3"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/c0194aaf4254461e3505b30093a5166e.png"
          />
        </div>
      </div>
      <div class="flex-row justify-between items-center">
        <div class="flex-row items-center space-x-14">
          <img
            class="shrink-0 image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437501403442894.png"
          />
          <span class="text_2">发布</span>
        </div>
        <div class="flex-row items-center section space-x-12">
          <div class="flex-col justify-start items-center image-wrapper">
            <img
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735816096547.png"
            />
          </div>
          <div class="section_2"></div>
          <div class="flex-col justify-start items-center image-wrapper">
            <img
              class="image_5"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735802507405.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col justify-start flex-auto group_2">
      <div class="flex-col justify-start text-area section_1">
        <van-field
          class="section_3 textarea"
          type="textarea"
          placeholder="发布心得"
          :show-word-limit="true"
          :maxlength="300"
          v-model="textarea"
          v-bind:autosize="{ minHeight:169, maxHeight:169 }"
        ></van-field>
      </div>
    </div>
    <div class="flex-col justify-start items-center group_3">
      <van-button color="#5298ff" loading-type="spinner" @click="onClick" class="cf-button">发布</van-button>
    </div>
    <van-popup v-model="popupVisible" position="center" style="width:168px"><Fabuchengg></Fabuchengg></van-popup>
  </div>
</template>

<script>
  import Fabuchengg from '../../components/fabuchengg/fabuchengg.vue';

  export default {
    components: { Fabuchengg },
    props: {},
    data() {
      return {
        textarea: '',
        popupVisible: false,
      };
    },

    methods: {
      onShow() {
        this.popupVisible = true;
      },

      onClick(event) {
        console.log('on click');
      },
    },
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #f9f9f9;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .header {
    padding: 0.88rem 0.38rem 0 1rem;
    height: 5.09rem;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .group {
    padding-left: 1.13rem;
    padding-right: 0.5rem;
  }
  .text {
    color: #000000;
    font-size: 0.94rem;
    font-family: '.AppleSystemUIFont';
    line-height: 1.13rem;
    letter-spacing: -0.019rem;
  }
  .space-x-4 > *:not(:first-child) {
    margin-left: 0.25rem;
  }
  .image {
    width: 1.06rem;
    height: 0.69rem;
  }
  .image_2 {
    width: 0.97rem;
    height: 0.69rem;
  }
  .image_3 {
    width: 1.53rem;
    height: 0.72rem;
  }
  .space-x-14 > *:not(:first-child) {
    margin-left: 0.88rem;
  }
  .image_4 {
    width: 0.72rem;
    height: 1.28rem;
  }
  .text_2 {
    color: #111111;
    font-size: 1.38rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.88rem;
  }
  .section {
    margin-top: 0.13rem;
    padding: 0.38rem 0.75rem;
    background-color: #ffffff9e;
    border-radius: 0.97rem;
    height: 1.94rem;
    border: solid 0.031rem #00000012;
  }
  .space-x-12 > *:not(:first-child) {
    margin-left: 0.75rem;
  }
  .image-wrapper {
    width: 1.03rem;
  }
  .image_6 {
    width: 1.03rem;
    height: 0.34rem;
  }
  .section_2 {
    background-color: #eaeaea;
    width: 0.031rem;
    height: 1.13rem;
  }
  .image_5 {
    width: 1rem;
    height: 1rem;
  }
  .group_2 {
    padding: 1.88rem 0 23.06rem;
    overflow-y: auto;
  }
  .text-area {
    margin: 0 1rem;
  }
  .section_1 {
    padding: 1rem 0;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .section_3 {
    margin: 0 0.88rem;
  }
  .group_3 {
    padding: 1.5rem 0;
  }
  .textarea {
    background-color: #f9f9f9;
    border-radius: 0.25rem;
    padding: 0.56rem 0.63rem;
  }
  .cf-button {
    padding: 0.63rem 0px;
    border-radius: 1.38rem;
    background-color: #5298ff;
    width: 18.44rem;
    border: unset !important;
    height: 2.75rem;
    color: #ffffff !important;
    font-family: 'PingFang SC';
    font-size: 1rem;
    line-height: 1.38rem;
    font-weight: 500;
  }
  :deep(.textarea.van-field) .van-field__control {
    font-family: 'PingFang SC';
    font-size: 0.88rem;
    line-height: 1.25rem;
  }
  .textarea.van-cell::after {
    border-bottom: none;
  }
  :deep(.cf-button) .van-button__text {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>