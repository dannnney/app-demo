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
          <span class="text_2">新增活动</span>
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
      <div class="flex-col section_3">
        <div class="flex-row group_3 space-x-50">
          <span class="font_1">活动标题</span>
          <span class="font_2">活动标题</span>
        </div>
        <div class="flex-row justify-between items-center group_4">
          <span class="font_1">报名开始时间</span>
          <img
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915461501897686774.png"
          />
        </div>
        <div class="flex-row justify-between items-center group_4">
          <span class="font_1">报名结束时间</span>
          <img
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915461501897686774.png"
          />
        </div>
        <div class="flex-row justify-between items-center group_4">
          <span class="font_1">活动开始时间</span>
          <img
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915461501897686774.png"
          />
        </div>
        <div class="flex-row justify-between items-center group_4">
          <span class="font_1">活动结束时间</span>
          <img
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915461501897686774.png"
          />
        </div>
        <div class="flex-col justify-start items-start input">
          <div class="flex-row space-x-50">
            <span class="font_1">参加人数</span>
            <span class="font_2">0</span>
          </div>
        </div>
        <div class="flex-col justify-start">
          <div class="flex-row group_5 space-x-50">
            <span class="font_1">活动地点</span>
            <span class="font_2">活动地点</span>
          </div>
        </div>
        <span class="self-start font_1 text_3">主题内容</span>
        <div class="flex-col justify-start items-end text-area text-wrapper">
          <span class="font_1 text_4">0/320</span>
        </div>
        <div class="divider"></div>
        <span class="self-start font_1 text_5">活动图</span>
        <div class="flex-col group_6">
          <div class="flex-col justify-start items-center text-area_2">
            <img
              class="image_8"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/7c310b399ea5ddc6601d5a7ba42b2538.png"
            />
          </div>
          <span class="self-start text_6">图片大小：343*128</span>
        </div>
      </div>
      <div class="flex-col justify-start items-center button text-wrapper_2"><span class="text_7">保存</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
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
    padding: 1.5rem 1rem;
    overflow-y: auto;
  }
  .section_3 {
    padding: 0 0.75rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .group_3 {
    padding: 1.31rem 0.063rem 0.75rem;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #999999;
  }
  .group_4 {
    padding: 0.75rem 0;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .image_7 {
    width: 0.53rem;
    height: 0.91rem;
  }
  .input {
    padding: 0.75rem 0;
  }
  .group_5 {
    padding: 0.88rem 0 0.75rem;
    border-top: solid 0.063rem #eeeeee;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .space-x-50 > *:not(:first-child) {
    margin-left: 3.13rem;
  }
  .text_3 {
    margin-top: 0.88rem;
  }
  .text-area {
    margin-right: 0.13rem;
    margin-top: 0.81rem;
  }
  .text-wrapper {
    padding: 5.06rem 0 0.56rem;
    background-color: #f9f9f9;
    border-radius: 0.25rem;
  }
  .text_4 {
    margin-right: 0.63rem;
    color: #dddddd;
  }
  .divider {
    margin-top: 1rem;
    background-color: #eeeeee;
    height: 0.063rem;
  }
  .text_5 {
    margin-top: 0.88rem;
  }
  .group_6 {
    margin-top: 0.81rem;
    padding: 0 0.063rem;
  }
  .text-area_2 {
    padding: 3rem 0;
    background-color: #f9f9f9;
    border-radius: 0.25rem;
  }
  .image_8 {
    width: 0.88rem;
    height: 0.78rem;
  }
  .text_6 {
    margin-top: 0.25rem;
    color: #999999;
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
  }
  .button {
    margin: 1.5rem 1.5rem 0;
  }
  .text-wrapper_2 {
    padding: 0.75rem 0;
    background-color: #5298ff;
    border-radius: 1.38rem;
  }
  .text_7 {
    color: #ffffff;
    font-size: 1rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.38rem;
  }
</style>