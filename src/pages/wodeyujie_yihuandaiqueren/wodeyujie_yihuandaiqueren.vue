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
          <span class="text_2">我的预借</span>
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
      <div class="flex-col">
        <div class="flex-col group_3">
          <div class="flex-row justify-between items-center group_4">
            <span class="font_1">在借</span>
            <span class="font_1 text_3">已还待确认</span>
            <span class="font_1">已还</span>
            <span class="font_1">已拒绝</span>
            <span class="font_1">已取消</span>
          </div>
          <div class="self-start section_3"></div>
        </div>
        <div class="flex-col list space-y-16">
          <div class="flex-col list-item" v-for="(item, index) in items" :key="index">
            <div class="flex-row items-center space-x-4">
              <img
                class="image_7"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/b8368167738ee4565c2c7824df774436.png"
              />
              <span class="font_2">阅览室名称</span>
            </div>
            <div class="flex-row group_5 space-x-8">
              <img
                class="image_8"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437505150279503.png"
              />
              <div class="flex-col items-start">
                <span class="font_3">情绪流</span>
                <span class="font_4">作者：姜得祺</span>
                <span class="font_4">ISBN：9787550023673</span>
                <span class="font_4">借阅时间：2023-08-03 14:01:35</span>
                <span class="font_4">已还时间：2023-08-03 14:01:35</span>
              </div>
            </div>
            <img
              class="self-start image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464082037396723.png"
            />
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
        items: [null, null, null],
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
    padding: 0.88rem 0.38rem 0.38rem 1rem;
    height: 5.44rem;
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
    height: 45.31rem;
    overflow-y: auto;
  }
  .group_3 {
    padding: 0 0.5rem 0.88rem 1rem;
  }
  .group_4 {
    padding: 0.88rem 0 0.063rem;
  }
  .font_1 {
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    color: #999999;
  }
  .text_3 {
    color: #111111;
    font-weight: 500;
  }
  .section_3 {
    margin-left: 5.56rem;
    background-image: linear-gradient(96deg, #80c4ff 0%, #80c4ff -3.24%, #5298ff 101.33%, #5298ff 100%);
    border-radius: 0.13rem;
    width: 1.5rem;
    height: 0.25rem;
  }
  .list {
    padding: 0 1rem;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .list-item {
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .image_7 {
    width: 0.91rem;
    height: 0.88rem;
  }
  .font_2 {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    font-weight: 500;
    color: #333333;
  }
  .group_5 {
    margin-top: 0.19rem;
  }
  .image_8 {
    margin-top: 0.19rem;
    border-radius: 0.25rem;
    width: 3.44rem;
    height: 5rem;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .font_4 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .image_9 {
    margin-top: 0.63rem;
    border-radius: 0.5rem;
    width: 4.5rem;
    height: 4.5rem;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
</style>