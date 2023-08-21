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
          <span class="text_2">编辑图书馆</span>
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
        <div class="flex-row group_3 space-x-36">
          <span class="font_1">图书馆名称</span>
          <span class="font_2">图书馆名称</span>
        </div>
        <div class="flex-row justify-between items-center group_4">
          <div class="flex-row space-x-50">
            <span class="font_1">主管理员</span>
            <span class="font_2">主管理员</span>
          </div>
          <img
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915460743480344061.png"
          />
        </div>
        <div class="flex-col justify-start relative group_5">
          <div class="flex-col relative group_6">
            <div class="divider"></div>
            <div class="divider view"></div>
            <div class="flex-col items-center section_4 space-y-16 pos">
              <span class="font_3">张亮</span>
              <span class="font_3">张亮</span>
              <span class="font_3">张亮</span>
              <span class="font_3">张亮</span>
            </div>
          </div>
          <span class="font_1 pos_2">位置</span>
          <span class="font_2 pos_3">图书馆位置</span>
          <span class="font_1 text_3 pos_5">
            封面
            <br />
            （160*160)
          </span>
          <div class="flex-col justify-start items-center image-wrapper_2 pos_4">
            <img
              class="image_8"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/7c310b399ea5ddc6601d5a7ba42b2538.png"
            />
          </div>
        </div>
      </div>
      <div class="flex-col justify-start items-center button text-wrapper"><span class="text_4">保存</span></div>
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
    height: 5.5rem;
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
    padding: 1.56rem 1rem 24.13rem;
    overflow-y: auto;
  }
  .section_3 {
    padding: 0 0.88rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .group_3 {
    padding: 0.81rem 0;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .space-x-36 > *:not(:first-child) {
    margin-left: 2.25rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #333333;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .group_4 {
    padding: 1rem 0 0.13rem;
  }
  .space-x-50 > *:not(:first-child) {
    margin-left: 3.13rem;
  }
  .image_7 {
    margin-right: 0.19rem;
    width: 0.75rem;
    height: 0.56rem;
  }
  .group_5 {
    padding-bottom: 1.94rem;
  }
  .group_6 {
    padding: 0.69rem 0 4.31rem;
  }
  .divider {
    background-color: #eeeeee;
    height: 0.063rem;
  }
  .view {
    margin-top: 2.94rem;
  }
  .section_4 {
    padding: 1.06rem 0 0.69rem;
    filter: drop-shadow(0px 0px 0.19rem #0000001a);
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922377044191367276.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 4.88rem;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .pos {
    position: absolute;
    right: 0;
    top: 0;
  }
  .font_3 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .pos_2 {
    position: absolute;
    left: 0;
    top: 1.63rem;
  }
  .pos_3 {
    position: absolute;
    left: 6.63rem;
    top: 1.63rem;
  }
  .text_3 {
    line-height: 1rem;
    text-align: right;
    width: 4.44rem;
  }
  .pos_5 {
    position: absolute;
    left: 0.13rem;
    top: 6.06rem;
  }
  .image-wrapper_2 {
    padding: 1.75rem 0;
    background-color: #eeeeee;
    border-radius: 0.5rem;
    width: 4.25rem;
  }
  .pos_4 {
    position: absolute;
    left: 7.25rem;
    top: 4.75rem;
  }
  .image_8 {
    width: 0.88rem;
    height: 0.78rem;
  }
  .button {
    margin: 1.5rem 1.5rem 0;
  }
  .text-wrapper {
    padding: 0.75rem 0;
    background-color: #5298ff;
    border-radius: 1.38rem;
  }
  .text_4 {
    color: #ffffff;
    font-size: 1rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.38rem;
  }
</style>