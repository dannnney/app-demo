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
          <span class="text_2">员工管理</span>
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
    <div class="flex-col flex-auto group_2 space-y-16">
      <div class="flex-col group_3">
        <div class="flex-row justify-between items-center section_3">
          <span class="text_3">请输入书名/ISBN</span>
          <img
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/26d4526839e8f82a2c5f6dba61e44a19.png"
          />
        </div>
        <div class="flex-row justify-evenly items-center button section_4">
          <img
            class="image_8"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/c9c3fb56f489ff67b6887cf5059bd91f.png"
          />
          <span class="text_4">增加成员</span>
        </div>
      </div>
      <div class="flex-col group_4 space-y-4">
        <div class="flex-row group_4">
          <div class="flex-col shrink-0 section_5">
            <div class="flex-row justify-between">
              <div class="flex-row space-x-10">
                <img
                  class="self-start image_9 image_10"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464069977522891.png"
                />
                <div class="flex-col space-y-4">
                  <div class="flex-col">
                    <div class="flex-row items-center space-x-9">
                      <span class="font_1">张亮</span>
                      <div class="flex-col justify-start items-center shrink-0 text-wrapper_2">
                        <span class="font_2">管理员</span>
                      </div>
                    </div>
                    <span class="self-start font_4">13712837192</span>
                  </div>
                  <span class="self-start font_4">单位名称</span>
                </div>
              </div>
              <span class="self-start font_3 text_5">编辑</span>
            </div>
            <span class="self-start font_4 text_7">部门</span>
          </div>
          <div class="flex-col justify-start items-center button_2 text-wrapper">
            <span class="font_1 text_6">禁用</span>
          </div>
        </div>
        <div class="flex-col group_3 space-y-4">
          <div class="flex-col list-item" v-for="(item, index) in items" :key="index">
            <div class="flex-row justify-between">
              <div class="flex-row items-center self-stretch space-x-10">
                <img
                  class="image_9"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/16915464069977522891.png"
                />
                <div class="flex-col">
                  <div class="flex-row items-center space-x-9">
                    <span class="font_1">张亮</span>
                    <div class="flex-col justify-start shrink-0 text-wrapper_3">
                      <span class="font_2 text_8">子管理员</span>
                    </div>
                  </div>
                  <span class="self-start font_4">13712837192</span>
                </div>
              </div>
              <span class="self-start font_3 text_9">编辑</span>
            </div>
            <div class="flex-col items-start group_5">
              <span class="font_4">单位名称</span>
              <span class="font_4">部门</span>
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
        items: [null, null, null, null, null],
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
    padding: 0.88rem 0.38rem 0.5rem 1rem;
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
    padding: 1.19rem 0 0.5rem;
    overflow-y: auto;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
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
  .button {
    align-self: flex-end;
    margin-top: 1rem;
  }
  .section_4 {
    padding: 0.13rem 0.5rem;
    background-color: #18b800;
    border-radius: 0.75rem;
    width: 5.56rem;
  }
  .image_8 {
    border-radius: 0.094rem;
    width: 0.75rem;
    height: 0.75rem;
  }
  .text_4 {
    color: #ffffff;
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
  }
  .group_4 {
    overflow-x: hidden;
  }
  .space-y-4 > *:not(:first-child) {
    margin-top: 0.25rem;
  }
  .section_5 {
    margin-left: -1.44rem;
    padding: 0.81rem 0 1rem;
    background-color: #ffffff;
    border-radius: 0 0.25rem 0.25rem 0;
    width: 20.44rem;
    height: 6.13rem;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
  .image_9 {
    border-radius: 50%;
    width: 2.25rem;
    height: 2.25rem;
  }
  .image_10 {
    margin-top: 0.19rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #333333;
  }
  .text-wrapper_2 {
    background-color: #5298ff;
    border-radius: 0.13rem;
    width: 2.44rem;
    height: 0.88rem;
  }
  .font_2 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #ffffff;
  }
  .font_4 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #999999;
  }
  .font_3 {
    font-size: 0.63rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #5298ff;
  }
  .text_5 {
    margin-right: 1rem;
    margin-top: 0.19rem;
  }
  .text_7 {
    margin-left: 2.88rem;
  }
  .button_2 {
    flex-shrink: 0;
    margin-left: 0.25rem;
  }
  .text-wrapper {
    padding: 2.44rem 0;
    background-color: #ff6b6b;
    border-radius: 0.25rem;
    width: 4.19rem;
    height: 6.13rem;
  }
  .text_6 {
    color: #ffffff;
  }
  .list-item {
    padding: 0.75rem 1rem 1rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
  }
  .space-x-9 > *:not(:first-child) {
    margin-left: 0.56rem;
  }
  .text-wrapper_3 {
    background-color: #5298ff;
    border-radius: 0.13rem;
    height: 0.88rem;
  }
  .text_8 {
    margin: 0 0.31rem;
  }
  .text_9 {
    margin-top: 0.19rem;
  }
  .group_5 {
    padding: 0 2.88rem;
  }
</style>