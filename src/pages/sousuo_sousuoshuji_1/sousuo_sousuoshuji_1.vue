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
      <div class="flex-row justify-between items-center section_3">
        <div class="flex-row space-x-12">
          <img
            class="shrink-0 image_5"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16916378947420865286.png"
          />
          <span class="text_3">情绪流</span>
        </div>
        <img
          class="image_7"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369262263393231.png"
        />
      </div>
      <div class="flex-col justify-start items-start relative group_3">
        <div class="flex-col justify-start text-wrapper"><span class="font_1 text_4">所有分类</span></div>
        <div class="flex-row pos">
          <span class="self-start font_3 text_6">网络</span>
          <div class="flex-col flex-auto section_4 space-y-256">
            <span class="self-start font_2">机构藏书</span>
            <div class="flex-col space-y-11">
              <span class="self-start font_2">个人藏书</span>
              <div class="flex-col space-y-8">
                <div
                  class="flex-row justify-center items-center list-item space-x-8"
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <img
                    class="image_10"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437505150279503.png"
                  />
                  <div class="flex-col space-y-7">
                    <div class="flex-row items-center space-x-8">
                      <span class="font_3">情绪流</span>
                      <img
                        class="image_12"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437505635953713.png"
                      />
                    </div>
                    <span class="self-start font_4">作者:章浩</span>
                    <span class="self-start font_4">ISBN:9787515708225</span>
                    <span class="font_4">阅览室:阅览室名称(张亮)</span>
                  </div>
                  <div class="flex-col">
                    <span class="self-center font_5">剩余可借：5本</span>
                    <div class="flex-col justify-start items-center text-wrapper_2 button">
                      <span class="font_1">申请借阅</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-col shrink-0 space-y-8 pos_2">
            <div class="flex-row space-x-25" v-for="(item, index) in items_1" :key="index">
              <div class="flex-col items-center shrink-0 self-start space-y-16">
                <span class="font_3">历史</span>
                <span class="font_3">政治</span>
                <span class="font_3">科幻</span>
              </div>
              <div class="flex-row justify-between items-center flex-auto section_5">
                <div class="flex-row space-x-8">
                  <img
                    class="image_8"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369260395982195.png"
                  />
                  <div class="flex-col space-y-7">
                    <div class="flex-row items-center group_4 space-x-8">
                      <span class="font_3">情绪流</span>
                      <img
                        class="image_9"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369260812890774.png"
                      />
                    </div>
                    <span class="self-start font_4">作者：章浩</span>
                    <span class="font_4">ISBN：9787515708225</span>
                    <span class="self-start font_4">阅览室：阅览室名称</span>
                  </div>
                </div>
                <div class="flex-col">
                  <span class="self-end font_4 text_5">已借完</span>
                  <div class="flex-col justify-start items-center text-wrapper_2 text-wrapper_3">
                    <span class="font_1">预借</span>
                  </div>
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
        items: [null, null, null],
        items_1: [null, null],
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
    height: 5.5rem;
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
    padding-top: 1.56rem;
    overflow-y: auto;
  }
  .section_3 {
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    background-color: #eeeeee;
    border-radius: 1.06rem;
  }
  .text_3 {
    color: #999999;
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
  }
  .image_7 {
    width: 0.88rem;
    height: 0.88rem;
  }
  .group_3 {
    padding: 0.63rem 0 39.06rem;
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
  .pos {
    position: absolute;
    left: 1.25rem;
    right: 0;
    top: 0.63rem;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .text_6 {
    margin-top: 9.31rem;
  }
  .section_4 {
    margin-left: 1.25rem;
    padding: 0.69rem 0.38rem 0;
    background-color: #f9f9f9;
    height: 40.94rem;
  }
  .space-y-256 > *:not(:first-child) {
    margin-top: 16rem;
  }
  .font_2 {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    font-weight: 500;
    color: #333333;
  }
  .space-y-11 > *:not(:first-child) {
    margin-top: 0.69rem;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .list-item {
    margin-right: 0.63rem;
    padding: 0.75rem 0 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .image_10 {
    border-radius: 0.25rem;
    width: 3.44rem;
    height: 5rem;
  }
  .space-y-7 > *:not(:first-child) {
    margin-top: 0.44rem;
  }
  .image_12 {
    width: 0.97rem;
    height: 0.88rem;
  }
  .font_4 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .font_5 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #18b800;
  }
  .text-wrapper_2 {
    margin-top: 2.63rem;
  }
  .button {
    padding: 0.13rem 0;
    background-color: #5298ff;
    border-radius: 0.75rem;
    width: 4.5rem;
  }
  .pos_2 {
    position: absolute;
    left: 0;
    right: 1rem;
    top: 2.56rem;
  }
  .space-x-25 > *:not(:first-child) {
    margin-left: 1.56rem;
  }
  .section_5 {
    margin-top: 0.19rem;
    padding: 0.81rem 1rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    height: 7rem;
  }
  .image_8 {
    margin-top: 0.19rem;
    border-radius: 0.25rem;
    width: 3.47rem;
    height: 5rem;
  }
  .group_4 {
    padding: 0 0.063rem;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
  .image_9 {
    width: 0.91rem;
    height: 0.78rem;
  }
  .text_5 {
    color: #ff6b6b;
  }
  .text-wrapper_3 {
    padding: 0.13rem 0;
    background-color: #5298ff;
    border-radius: 0.75rem;
    width: 3.5rem;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
</style>