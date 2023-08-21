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
          <span class="text_2">直播分享</span>
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
      <div class="flex-col list space-y-10">
        <div class="flex-col list-item space-y-16" v-for="(item, index) in items" :key="index">
          <div class="flex-col">
            <div class="flex-row justify-between items-center group_3">
              <div class="flex-row items-center space-x-6">
                <div class="shrink-0 section_3"></div>
                <span class="font_1">会议发起人名称</span>
              </div>
              <span class="font_2">2023-04-09 12:23:45</span>
            </div>
            <div class="flex-row group_4 space-x-30">
              <span class="font_3">会议主题</span>
              <span class="font_4">会议主题会议主题</span>
            </div>
          </div>
          <div class="flex-row group_5 space-x-16">
            <div class="flex-col items-start shrink-0 space-y-28">
              <span class="font_3">会议时间</span>
              <span class="font_3">腾讯会议号</span>
            </div>
            <div class="flex-col items-start flex-auto group_6 space-y-12">
              <span class="font_5 text_3">2023-08-15 19:30-20:00 (GMT+08:00)中国标准时间-北京</span>
              <span class="font_6">422-877-733</span>
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
        items: [null, null, null, null],
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
    padding: 1rem 0.38rem 0.5rem 1rem;
    height: 5.56rem;
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
    padding-top: 1rem;
    overflow-y: auto;
  }
  .list {
    margin: 0 1rem;
  }
  .space-y-10 > *:not(:first-child) {
    margin-top: 0.63rem;
  }
  .list-item {
    padding: 1rem 0;
    background-color: #ffffff;
    border-radius: 0.63rem;
  }
  .group_3 {
    padding: 0 0.5rem 0.63rem;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .space-x-6 > *:not(:first-child) {
    margin-left: 0.38rem;
  }
  .section_3 {
    background-color: #5298ff;
    border-radius: 50%;
    width: 0.38rem;
    height: 0.38rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #111111;
  }
  .font_2 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .group_4 {
    padding: 0.88rem 0.5rem 0;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #999999;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #111111;
  }
  .group_5 {
    padding: 0 0.5rem;
  }
  .space-x-16 > *:not(:first-child) {
    margin-left: 1rem;
  }
  .space-y-28 > *:not(:first-child) {
    margin-top: 1.75rem;
  }
  .group_6 {
    margin-top: 0.25rem;
  }
  .space-y-12 > *:not(:first-child) {
    margin-top: 0.75rem;
  }
  .font_5 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
    color: #111111;
  }
  .text_3 {
    text-align: justify;
    width: 13rem;
  }
  .font_6 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
    color: #5298ff;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .space-x-30 > *:not(:first-child) {
    margin-left: 1.88rem;
  }
</style>