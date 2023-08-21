<template>
  <div class="flex-col relative page">
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
        <span class="text_2">读书心得</span>
        <div class="flex-row items-center section space-x-12">
          <div class="flex-col justify-start items-center image-wrapper">
            <img
              class="image_5"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735816096547.png"
            />
          </div>
          <div class="section_2"></div>
          <div class="flex-col justify-start items-center image-wrapper">
            <img
              class="image_4"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16914868735802507405.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col justify-start flex-auto group_2">
      <div class="flex-col space-y-4">
        <div class="flex-col list-item" @click="onClick" v-for="(item, index) in items" :key="index">
          <div class="flex-col group_3 space-y-8">
            <div class="flex-row space-x-4">
              <img
                class="image_6"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437515366676506.png"
              />
              <div class="flex-col items-start space-y-4">
                <span class="font_1">张亮</span>
                <span class="font_2">2023-04-05 14:23:45</span>
              </div>
            </div>
            <span class="font_3 text_3">
              积极的人生态度会给自己很多惊喜，对成功有着热切的期盼，才会有更强大的行动力、执行力成功的几率才会更高。热切的期望会像一只无形的手，推动我们将常人以为“不可能”的事情变为“可能”将虚幻变为现实，成功如此简单。
            </span>
          </div>
          <div class="flex-row justify-end items-center group_4 space-x-6-reverse">
            <img
              class="image_7"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437492577956635.png"
            />
            <span class="font_4">2023</span>
          </div>
        </div>
      </div>
    </div>
    <img
      class="image_8 pos"
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922370872029606239.png"
      @click="onClick_1"
    />
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

    methods: {
      onClick() {
        this.$router.push({ name: 'dushuxinde_xindexiangqing' });
      },
      onClick_1() {
        this.$router.push({ name: 'dushuxinde_fabu' });
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
    padding: 0.88rem 0.38rem 1rem 1rem;
    height: 6.13rem;
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
  .image_5 {
    width: 1.03rem;
    height: 0.34rem;
  }
  .section_2 {
    background-color: #eaeaea;
    width: 0.031rem;
    height: 1.13rem;
  }
  .image_4 {
    width: 1rem;
    height: 1rem;
  }
  .group_2 {
    overflow-y: auto;
  }
  .space-y-4 > *:not(:first-child) {
    margin-top: 0.25rem;
  }
  .list-item {
    background-color: #ffffff;
  }
  .group_3 {
    margin: 0 1rem;
    padding: 0.63rem 0 1rem;
  }
  .image_6 {
    border-radius: 50%;
    width: 2.13rem;
    height: 2.13rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
    font-weight: 500;
    color: #333333;
  }
  .font_2 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.31rem;
    color: #333333;
  }
  .text_3 {
    text-align: justify;
    text-indent: 1.31rem;
  }
  .group_4 {
    padding: 0.63rem 1.25rem 1rem;
    border-top: solid 0.063rem #eeeeee;
  }
  .image_7 {
    width: 0.97rem;
    height: 1.03rem;
  }
  .font_4 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    font-weight: 500;
    color: #111111;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .space-x-6-reverse > *:not(:last-child) {
    margin-right: 0.38rem;
  }
  .image_8 {
    filter: drop-shadow(0px 0.13rem 0.28rem #5298ff66);
    width: 2.75rem;
    height: 2.75rem;
  }
  .pos {
    position: absolute;
    right: 1rem;
    bottom: 6.31rem;
  }
</style>