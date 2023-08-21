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
          <span class="text_2">新增商品</span>
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
      <div class="flex-col space-y-8">
        <div class="flex-col section_3">
          <div class="flex-col group_3">
            <div class="flex-row input space-x-45">
              <div class="flex-col self-center group_4">
                <span class="self-start font_2 text_4">名称</span>
                <span class="self-end font_1 text_3">*</span>
              </div>
              <span class="self-start font_3 text_5">商品名称</span>
            </div>
            <div class="flex-row input_2">
              <span class="self-start font_2 text_6">所需积分</span>
              <span class="self-start font_1">*</span>
              <span class="self-center font_4 text_7">0</span>
            </div>
            <div class="flex-row input_3">
              <span class="self-start font_2 text_9">商品数量</span>
              <span class="self-start font_1">*</span>
              <span class="self-center font_4 text_8">0</span>
            </div>
            <div class="flex-row input_4 space-x-52">
              <span class="font_2">价格</span>
              <span class="font_4">0</span>
            </div>
          </div>
          <span class="self-start font_2 text_10">商品描述</span>
          <div class="flex-col justify-start items-end text-area text-wrapper">
            <span class="font_3 text_11">0/140</span>
          </div>
          <div class="divider"></div>
          <span class="self-start font_2 text_12">商品封面</span>
          <div class="flex-col justify-start items-center self-start image-wrapper_2">
            <img
              class="image_7"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/7c310b399ea5ddc6601d5a7ba42b2538.png"
            />
          </div>
        </div>
        <span class="self-start font_1 text_13">建议图片大小：160*240</span>
      </div>
      <div class="flex-col justify-start items-center button text-wrapper_2"><span class="text_14">保存</span></div>
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
    padding: 0.5rem 0.38rem 0.5rem 1rem;
    height: 5.31rem;
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
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .section_3 {
    padding: 1.5rem 0.75rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .group_3 {
    border-bottom: solid 0.063rem #eeeeee;
  }
  .input {
    padding: 0 0.13rem 0.75rem;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .space-x-45 > *:not(:first-child) {
    margin-left: 2.81rem;
  }
  .group_4 {
    width: 2.19rem;
    height: 1.56rem;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .text_4 {
    margin-top: 0.31rem;
  }
  .font_1 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #ff6b6b;
  }
  .text_3 {
    margin-top: -1.56rem;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #dddddd;
  }
  .text_5 {
    margin-top: 0.31rem;
  }
  .input_2 {
    padding: 1.13rem 0.13rem 0.75rem;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .text_6 {
    margin-top: 0.31rem;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #111111;
  }
  .text_7 {
    margin-left: 1.13rem;
  }
  .input_3 {
    padding: 0.75rem 0.13rem 0.5rem;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .text_9 {
    margin-top: 0.31rem;
  }
  .text_8 {
    margin-left: 1.13rem;
  }
  .input_4 {
    padding: 0.88rem 0.13rem;
  }
  .space-x-52 > *:not(:first-child) {
    margin-left: 3.25rem;
  }
  .text_10 {
    margin-top: 0.63rem;
  }
  .text-area {
    margin: 0.81rem 0.13rem 0;
  }
  .text-wrapper {
    padding: 5.06rem 0 0.56rem;
    background-color: #f9f9f9;
    border-radius: 0.25rem;
  }
  .text_11 {
    margin-right: 0.69rem;
  }
  .divider {
    margin: 1rem 0.13rem 0;
    background-color: #eeeeee;
    height: 0.063rem;
  }
  .text_12 {
    margin-top: 0.88rem;
  }
  .image-wrapper_2 {
    margin-top: 0.81rem;
    padding: 1.88rem 0;
    background-color: #eeeeee;
    border-radius: 0.5rem;
    width: 3.13rem;
  }
  .image_7 {
    width: 0.88rem;
    height: 0.78rem;
  }
  .text_13 {
    margin-left: 0.25rem;
    color: #999999;
  }
  .button {
    margin: 6.19rem 1.5rem 0;
  }
  .text-wrapper_2 {
    padding: 0.75rem 0;
    background-color: #5298ff;
    border-radius: 1.38rem;
  }
  .text_14 {
    color: #ffffff;
    font-size: 1rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.38rem;
  }
</style>