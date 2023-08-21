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
          <span class="text_2">借阅记录</span>
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
      <div class="flex-col group_3">
        <div class="flex-row justify-between items-center section_3">
          <span class="text_3">请输入书名/ISBN</span>
          <img
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/26d4526839e8f82a2c5f6dba61e44a19.png"
          />
        </div>
        <div class="flex-row group_4">
          <div class="flex-col justify-start items-center button"><span class="font_1">预借图书</span></div>
          <div class="flex-col justify-start items-center button_2 text-wrapper">
            <span class="font_1">借阅图书</span>
          </div>
          <div class="flex-col justify-start items-center button_2 button"><span class="font_1">逾期图书</span></div>
        </div>
      </div>
      <div class="flex-col line-tabs group_5">
        <div class="flex-col group_6">
          <div class="flex-row line-tabs view space-x-20">
            <span class="shrink-0 font_2 text_4">已还待确认</span>
            <span class="shrink-0 font_2">已还</span>
            <span class="shrink-0 font_2">已拒绝</span>
            <span class="shrink-0 font_2 text_5">已取消</span>
            <span class="shrink-0 font_2">已逾期</span>
          </div>
          <div class="self-end section_4"></div>
        </div>
        <div class="flex-col group_7 space-y-16">
          <div class="flex-row group_8 space-x-14">
            <img
              class="shrink-0 image_8"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/b21fa720e3f9be97aa7f3ea878d62c1a.png"
            />
            <div class="flex-row justify-between flex-auto section_5">
              <div class="flex-col justify-start"><span class="font_3">开始日期</span></div>
              <div class="flex-col justify-start items-center text-wrapper_2"><span class="font_3">—</span></div>
              <div class="flex-col justify-start"><span class="font_3">结束日期</span></div>
            </div>
          </div>
          <div class="flex-col">
            <div class="flex-col list-item" v-for="(item, index) in items" :key="index">
              <div class="flex-row items-center group_9 space-x-10">
                <img
                  class="image_9"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464069977522891.png"
                />
                <div class="flex-col items-start">
                  <span class="font_4">张亮</span>
                  <span class="font_3">13712837192</span>
                </div>
              </div>
              <div class="flex-row items-center group_10 space-x-4">
                <img
                  class="image_10"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/9b5c0288d35b0889cc6ef40ffee87821.png"
                />
                <span class="font_5">阅览室名称</span>
              </div>
              <div class="flex-row group_11 space-x-8">
                <img
                  class="image_11"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437505150279503.png"
                />
                <div class="flex-col items-start flex-auto">
                  <span class="font_6">情绪流</span>
                  <span class="font_3">作者：姜得祺</span>
                  <span class="font_3">ISBN：9787550023673</span>
                  <span class="font_3">借阅时间：2023-08-03 14:01:35</span>
                  <span class="font_3">取消时间：2023-08-03 14:01:35</span>
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
    padding-top: 1.19rem;
    overflow-y: auto;
  }
  .group_3 {
    padding: 0 1rem;
  }
  .section_3 {
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
    width: 0.94rem;
    height: 0.94rem;
  }
  .group_4 {
    padding-top: 1rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #ffffff;
  }
  .button_2 {
    margin-left: 0.5rem;
  }
  .button {
    padding: 0.13rem 0;
    background-color: #5298ff80;
    border-radius: 0.75rem;
    width: 4.5rem;
    height: 1.5rem;
  }
  .text-wrapper {
    padding: 0.13rem 0;
    background-color: #5298ff;
    border-radius: 0.75rem;
    width: 4.5rem;
    height: 1.5rem;
  }
  .line-tabs {
    overflow-x: hidden;
  }
  .group_5 {
    margin-bottom: -3.81rem;
  }
  .group_6 {
    padding: 0.75rem 0;
    overflow-x: hidden;
  }
  .view {
    margin-right: 1rem;
  }
  .space-x-20 > *:not(:first-child) {
    margin-left: 1.25rem;
  }
  .font_2 {
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    color: #999999;
  }
  .text_4 {
    margin-left: -0.56rem;
  }
  .text_5 {
    color: #111111;
    font-weight: 500;
  }
  .section_4 {
    margin-right: 6.56rem;
    background-image: linear-gradient(96deg, #80c4ff 0%, #80c4ff -3.24%, #5298ff 101.33%, #5298ff 100%);
    border-radius: 0.13rem;
    width: 1.5rem;
    height: 0.25rem;
  }
  .group_7 {
    padding: 0.25rem 0.75rem 0;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .group_8 {
    padding: 0 0.25rem;
  }
  .space-x-14 > *:not(:first-child) {
    margin-left: 0.88rem;
  }
  .image_8 {
    width: 1.22rem;
    height: 1.19rem;
  }
  .section_5 {
    margin-right: 1.25rem;
    padding: 0.19rem 1.31rem;
    background-image: linear-gradient(90deg, #8ac9ff00 0%, #5298ff26 49.03%, #5298ff00 100.7%, #5298ff00 100%);
    height: 1.25rem;
  }
  .font_3 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .text-wrapper_2 {
    width: 2.5rem;
  }
  .list-item {
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    padding: 0 1rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .list-item:not(:first-of-type) {
    margin-top: 1rem;
  }
  .group_9 {
    padding: 0.5rem 0;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
  .image_9 {
    border-radius: 50%;
    width: 2.25rem;
    height: 2.25rem;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #333333;
  }
  .group_10 {
    margin-top: 0.88rem;
  }
  .image_10 {
    width: 0.91rem;
    height: 0.91rem;
  }
  .font_5 {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    font-weight: 500;
    color: #333333;
  }
  .group_11 {
    margin-top: 0.19rem;
  }
  .image_11 {
    margin-top: 0.19rem;
    border-radius: 0.25rem;
    width: 3.44rem;
    height: 5rem;
  }
  .font_6 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .space-x-4 > *:not(:first-child) {
    margin-left: 0.25rem;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
</style>