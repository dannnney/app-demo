<template>
  <div class="flex-col justify-start">
    <div class="flex-col justify-start items-center section_3">
      <van-tabs v-model="tabs" :swipeable="true" class="tabs" :line-width="24" background="transparent">
        <van-tab title="图书排行榜">
          <div class="flex-col group_4">
            <div class="flex-row items-center self-center section_4 space-x-35">
              <div class="flex-row items-center shrink-0 space-x-17">
                <div class="flex-col justify-start items-center shrink-0 text-wrapper">
                  <span class="font_3 text_5">周排行榜</span>
                </div>
                <span class="font_3">月排行榜</span>
              </div>
              <span class="font_3 text_6">年排行榜</span>
            </div>
            <div class="flex-col table">
              <div class="flex-row table-header">
                <div class="flex-col justify-start items-start table-cell"><span class="font_4">排名</span></div>
                <div class="flex-col justify-start items-start table-cell_2">
                  <span class="font_4 text_23">图书信息</span>
                </div>
                <div class="flex-col justify-start items-center table-cell_3"><span class="font_4">借阅量</span></div>
              </div>
              <div class="flex-col">
                <div class="flex-row table-row" v-for="(item, index) in items" :key="index">
                  <div class="flex-row justify-end items-start table-cell_4 space-x-37-reverse">
                    <img
                      class="image_2 image_3"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16922369281501992333.png"
                    />
                    <img
                      class="image"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915437522818964694.png"
                    />
                  </div>
                  <div class="flex-col items-start table-cell_5">
                    <span class="font_5 text_1">年轮</span>
                    <span class="font_6 text_7">柯恩</span>
                    <span class="font_6 text_9">97873022387998</span>
                  </div>
                  <div class="flex-col justify-start items-end table-cell_6"><span class="font_7 text_8">0</span></div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="读者排行榜"><Duzhephb></Duzhephb></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import Duzhephb from '../../components/duzhephb/duzhephb.vue';

  export default {
    components: { Duzhephb },
    props: {},
    data() {
      return {
        items: [null, null, null, null, null, null, null, null],
        tabs: 0,
      };
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .section_3 {
    margin: 0 1rem;
    padding-top: 1.44rem;
    background-color: #ffffff;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .group_4 {
    padding-top: 1rem;
  }
  .section_4 {
    background-color: #eeeeee;
    border-radius: 0.75rem;
  }
  .space-x-35 > *:not(:first-child) {
    margin-left: 2.19rem;
  }
  .space-x-17 > *:not(:first-child) {
    margin-left: 1.06rem;
  }
  .text-wrapper {
    padding: 0.31rem 0;
    background-image: linear-gradient(101.6deg, #80c4ff 0%, #80c4ff -3.24%, #5298ff 101.33%, #5298ff 100%);
    border-radius: 0.75rem;
    width: 4.63rem;
    height: 1.5rem;
  }
  .font_3 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    font-weight: 500;
    color: #333333;
  }
  .text_5 {
    color: #ffffff;
  }
  .text_6 {
    margin-right: 1rem;
  }
  .table {
    margin-top: 1.13rem;
  }
  .table-header {
    min-height: 1.28rem;
  }
  .table-cell {
    width: 6.25rem;
  }
  .font_4 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .table-cell_2 {
    width: 45%;
  }
  .text_23 {
    margin-left: 0.25rem;
  }
  .table-cell_3 {
    width: 16.5%;
  }
  .table-row {
    min-height: 3.81rem;
  }
  .table-cell_4 {
    padding: 0.25rem 0;
    width: 6.25rem;
  }
  .space-x-37-reverse > *:not(:last-child) {
    margin-right: 2.31rem;
  }
  .image_2 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .image_3 {
    margin-top: 1rem;
  }
  .image {
    margin-right: 0.25rem;
    border-radius: 0.13rem;
    width: 2.19rem;
    height: 3.13rem;
  }
  .table-cell_5 {
    padding: 0.25rem 0;
    width: 45%;
  }
  .font_5 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
    color: #333333;
  }
  .text_1 {
    margin-left: 0.31rem;
  }
  .font_6 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
    color: #999999;
  }
  .text_7 {
    margin-left: 0.25rem;
  }
  .text_9 {
    margin-left: 0.31rem;
  }
  .table-cell_6 {
    padding: 0.25rem 0;
    width: 16.5%;
  }
  .font_7 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
    color: #5298ff;
  }
  .text_8 {
    margin-right: 0.69rem;
  }
  :deep(.tabs.van-tabs) .van-tab {
    color: #dddddd;
    font-weight: inherit;
    font-family: 'PingFang SC';
    font-size: 0.88rem;
    line-height: 1.25rem;
  }
  :deep(.tabs.van-tabs) .van-tab--active {
    color: #111111;
    font-weight: inherit;
    font-family: 'PingFang SC';
    font-size: 0.88rem;
    line-height: 1.25rem;
  }
</style>