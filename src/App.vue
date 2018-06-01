<script>
import wxp from 'minapp-api-promise'
import { mapMutations } from 'vuex'
export default {
  created () {
    // 调用API从本地缓存中获取数据
    this.getUserInfo()
  },
  methods: {
    ...mapMutations({
      setUserinfo: 'setUserinfo'
    }),
    getUserInfo(){
      let sid = wxp.getStorageSync('sid');
      let url = '/login';
      if(!sid){
         wxp.login().then(({code})=>{
          if(!code) return;
          wxp.getUserInfo().then(({userInfo,rawData,signature,encryptedData,iv})=>{
            let data = {
              code,
              rawData,
              signature,
              iv,
              encryptedData
            }
            this.$http.get(url,{params: data}).then((res)=>{
              if(res.code != 200){
                return wxp.showModal({
                  title: '登录失败'
                })
              }
              let user = res.data.user; //服务端保存的用户信息，金额什么的
              userInfo.user = user;
              this.setUserinfo(userInfo);
              wxp.setStorageSync('sid', res.data.sid);
            })
          })
        })
      }else{
        wxp.getUserInfo().then((res)=>{
          let userInfo = res.userInfo  //用户的信息
          this.$http.get(url,{params: {sid}}).then((res)=>{
            if(res.code != 200){ //表示已经过期，重复登录流程
              wxp.removeStorageSync(sid);
              this.getUserInfo();
              return
            }
            userInfo.user = res.data.user;
            this.setUserinfo(userInfo);
          })
        })
      }
    }
  }
}
</script>

<style>

/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
