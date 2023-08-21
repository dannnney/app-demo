<template>
  <div>
    <router-view></router-view>
    <van-tabbar :route="true" active-color="#5298ff" inactive-color="#333333">
      <van-tabbar-item :to="{name: 'index'}">
        首页
        <template #icon="props">
          <img
            :src="props.active ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60ab452647a99300119ef0d5/64e355992a709800116b8ba2/a62c5ec47a7d8cc169cab6cd284c4e50.png' : 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/6b6df5ba97f6379ea3e8f3b5468ac173.png'"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        图书
        <template #icon="props">
          <img
            :src="props.active ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/87dff2f4abe8613c16eedbf0ca3bb112.png' : 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/94499e0a4cde5f6fddc48fd526071313.png'"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'dushuxinde'}">
        读书心得
        <template #icon="props">
          <img
            :src="props.active ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/381ddc58ac82e1ab8cd3e8dbc93b7fc1.png' : 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/ae02826851aabc6fa2f53669e41f6089.png'"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'huodong_daibaoming'}">
        活动
        <template #icon="props">
          <img
            :src="props.active ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/e5a6d82e088106d29049459742c5bbf1.png' : 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/e5a6d82e088106d29049459742c5bbf1.png'"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'wode'}">
        我的
        <template #icon="props">
          <img
            :src="props.active ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64ab63e65a7e3f0310b7c7f9/64d20a482a70980011692823/05ff38a7385ab957767d15853a7bf5c0.png' : 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60ab452647a99300119ef0d5/64e355992a709800116b8ba2/09629003901a3dcb66f007616be895b5.png'"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="css">
  .van-tabbar {
    padding: 2px 0 4px;
    box-sizing: border-box;
    height: auto;
  }
  :deep(.van-tabbar-item__icon) img {
    width: 27px;
    height: 27px;
  }
</style>