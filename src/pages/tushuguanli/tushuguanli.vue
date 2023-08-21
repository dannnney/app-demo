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
          <span class="text_2">图书管理</span>
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
    <div class="flex-col flex-auto group_2">
      <div class="flex-row items-center group_3 space-x-6">
        <img
          class="image_7"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/b8368167738ee4565c2c7824df774436.png"
        />
        <span class="text_3">图书馆名称</span>
        <img
          class="image_8"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915460745168132149.png"
        />
      </div>
      <div class="flex-row justify-between items-center section_3">
        <div class="flex-row items-center">
          <span class="font_1 text_4">全部</span>
          <img
            class="shrink-0 image_8 image_10"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915460745168132149.png"
          />
          <div class="shrink-0 section_4"></div>
          <span class="text_5">请输入书名/ISBN</span>
        </div>
        <img
          class="image_9"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/26d4526839e8f82a2c5f6dba61e44a19.png"
        />
      </div>
      <div class="flex-col list space-y-12">
        <div class="flex-row justify-between items-center list-item" v-for="(item, index) in items" :key="index">
          <div class="flex-row space-x-8">
            <img
              class="image_11"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437505150279503.png"
            />
            <div class="flex-col items-start">
              <span class="font_1">情绪流</span>
              <span class="font_2">作者：章浩</span>
              <span class="font_2">分类：心理学</span>
              <span class="font_2">ISBN：9787515708225</span>
              <span class="font_2">数量：1(0本可借)</span>
            </div>
          </div>
          <div class="flex-col">
            <span class="self-end font_2 text_6">已推荐</span>
            <div class="flex-col justify-start items-center button text-wrapper">
              <span class="font_3">取消推荐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        items: [null, null, null, null, null],
      };
    },

    methods: {},
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
    padding: 0.88rem 0.38rem 0.5rem 1rem;
    height: 5.63rem;
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
    padding: 0 1rem;
    overflow-y: auto;
  }
  .group_3 {
    padding: 1.25rem 0;
  }
  .space-x-6 > *:not(:first-child) {
    margin-left: 0.38rem;
  }
  .image_7 {
    width: 0.91rem;
    height: 0.88rem;
  }
  .text_3 {
    color: #333333;
    font-size: 1rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.38rem;
  }
  .image_8 {
    width: 0.75rem;
    height: 0.56rem;
  }
  .section_3 {
    padding: 0.25rem 1.13rem;
    background-color: #eeeeee;
    border-radius: 1.06rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .text_4 {
    font-weight: 500;
  }
  .image_10 {
    margin-left: 0.5rem;
  }
  .section_4 {
    margin-left: 0.69rem;
    background-color: #dddddd;
    width: 0.063rem;
    height: 1.63rem;
  }
  .text_5 {
    margin-left: 0.38rem;
    color: #999999;
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
  }
  .image_9 {
    width: 0.94rem;
    height: 0.94rem;
  }
  .list {
    margin-top: 1.5rem;
  }
  .space-y-12 > *:not(:first-child) {
    margin-top: 0.75rem;
  }
  .list-item {
    padding: 0.56rem 1rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
  .image_11 {
    margin-top: 0.19rem;
    border-radius: 0.25rem;
    width: 3.44rem;
    height: 5rem;
  }
  .font_2 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .text_6 {
    color: #18b800;
  }
  .button {
    margin-top: 3.06rem;
  }
  .text-wrapper {
    padding: 0.13rem 0;
    background-color: #ffb652;
    border-radius: 0.75rem;
    width: 4.5rem;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #ffffff;
  }
</style>