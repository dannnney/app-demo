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
        <div class="flex-row items-center space-x-10">
          <img
            class="shrink-0 image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437501403442894.png"
          />
          <span class="text_2">图书检索</span>
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
      <div class="flex-row items-center section_3 space-x-12">
        <img
          class="image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378947420865286.png"
        />
        <span class="text_3">请输入书名/ISBN/作者</span>
      </div>
      <div class="flex-col justify-start items-end relative group_3">
        <div class="section_4"></div>
        <div class="flex-col pos">
          <div class="flex-row space-x-5" v-for="(item, index) in items" :key="index">
            <div class="flex-col shrink-0">
              <div class="flex-col justify-start text-wrapper"><span class="font_1 text_4">所有分类</span></div>
              <span class="self-center font_2 text_6">历史</span>
              <span class="self-center font_2 text_7">政治</span>
              <span class="self-center font_2 text_8">科幻</span>
            </div>
            <div class="flex-row justify-between items-center flex-auto self-start section_5">
              <div class="flex-row space-x-8">
                <img
                  class="image_7"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369263935885675.png"
                />
                <div class="flex-col space-y-7">
                  <div class="flex-row items-center group_4 space-x-8">
                    <span class="font_2">情绪流</span>
                    <img
                      class="image_8"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369264144482585.png"
                    />
                  </div>
                  <span class="self-start font_3">作者：章浩</span>
                  <span class="font_3">ISBN：9787515708225</span>
                  <span class="self-start font_3">阅览室：阅览室名称</span>
                </div>
              </div>
              <div class="flex-col">
                <span class="self-end font_3 text_5">已借完</span>
                <div class="flex-col justify-start items-center button text-wrapper_2">
                  <span class="font_1">预借</span>
                </div>
              </div>
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
        items: [null, null, null, null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #ffffff;
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
    padding-top: 1.63rem;
    overflow-y: auto;
  }
  .section_3 {
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    background-color: #eeeeee;
    border-radius: 1.06rem;
  }
  .space-x-12 > *:not(:first-child) {
    margin-left: 0.75rem;
  }
  .text_3 {
    color: #999999;
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
  }
  .group_3 {
    padding-top: 0.63rem;
  }
  .section_4 {
    background-color: #f9f9f9;
    width: 19.19rem;
    height: 40.94rem;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 1rem;
    top: 0.63rem;
  }
  .space-x-5 > *:not(:first-child) {
    margin-left: 0.31rem;
  }
  .text-wrapper {
    padding: 0.31rem 0;
    background-color: #5298ff;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #ffffff;
  }
  .text_4 {
    margin: 0 0.38rem;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .text_6 {
    margin-top: 0.69rem;
  }
  .text_7 {
    margin-top: 1rem;
  }
  .text_8 {
    margin-top: 1rem;
  }
  .section_5 {
    margin-top: 1rem;
    padding: 0.81rem 1rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    height: 7rem;
  }
  .image_7 {
    margin-top: 0.19rem;
    border-radius: 0.25rem;
    width: 3.47rem;
    height: 5rem;
  }
  .space-y-7 > *:not(:first-child) {
    margin-top: 0.44rem;
  }
  .group_4 {
    padding: 0 0.063rem;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
  .image_8 {
    width: 0.91rem;
    height: 0.78rem;
  }
  .font_3 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .text_5 {
    color: #ff6b6b;
  }
  .button {
    margin-top: 2.63rem;
  }
  .text-wrapper_2 {
    padding: 0.13rem 0;
    background-color: #5298ff;
    border-radius: 0.75rem;
    width: 3.5rem;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
</style>