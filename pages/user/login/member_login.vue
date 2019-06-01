<template>
	<view id="app">
		<view class="logo">
			<image src="../../../static/user/login/logo1.png" mode=""></image>
		</view>
		<view class="user-view">
			<view class="user-img">
				<image src="../../../static/user/login/user.png" mode=""></image>
			</view>
			<view class="user-input">
				<input type="number" value="" v-model="mobile" placeholder="请输入您的手机号" />
			</view>
		</view>
		<view class="user-view">
			<view class="code" @click="getCode()">
				{{codeMsg}}
			</view>
			<view class="user-img">
				<image src="../../../static/user/login/verification_code.png" mode=""></image>
			</view>
			<view class="user-input">
				<input type="number" value="" v-model="code" placeholder="请输入验证码" />
			</view>
		</view>
		<view class="login" @click="login()">
			登 陆
		</view>
		<view class="weixin">
			<view class="weixin-text">
				微信登录
			</view>
			<view class="weixin-inco">
				<image src="../../../static/user/login/weixin.png" mode=""></image>
			</view>
		</view>
		<view class="statement">
			登录即代表你同意<text>《用户使用条款和隐私声明》</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:0,
				channel:3,
				mobile:'',
				code:'',
				isclick:false,
				isCode:false,
				codeMsg:'获取验证码',
			}
		},
		created(){
			let _this=this;
		},
		mounted(){
			let _this=this;
		},	
		methods: {
			//登录
			login:function(){
				let _this=this;
				_this.validation1();
				if(_this.isclick){
					_this.validation2();
					if(_this.isCode){
						let data={
							type:_this.type,
							channel:_this.channel,
							mobile:_this.mobile,
							code:_this.code,
						};
						_this.$axios(_this.$baseUrl.login,data).then(res =>{
							if(res.data.status==1){
								uni.setStorage({
									key: 'token',
									data: res.data.token,
								});
								uni.showToast({
									title: res.data.msg,
									icon:'success',
									duration: 1000
								});
								uni.navigateBack();
							}else{
								uni.showToast({
									title: res.data.msg,
									icon:'none',
									duration: 1000
								});
							}
						}).catch(error =>{
							
						})
					}
				}
			},
			//验证手机号
			validation1:function(){
				let _this=this;
				if(_this.mobile == ""){
					uni.showToast({
						title: '请输入手机号',
						icon:'none',
						duration: 2000,
					});
					return;
				}else if(!(/^1[34578]\d{9}$/.test(_this.mobile))){
					uni.showToast({
						title: '手机号格式不正确',
						icon:'none',
						duration: 2000
					});
					return;
				}else{
                  _this.isclick=true;
                };
			},
			//验证手机验证码
			validation2:function(){
				let _this=this;
				if(!_this.isCode){
					uni.showToast({
						title: '请获取验证码',
						icon:'none',
						duration: 2000
					});
					return;
				}else if(_this.code==""){
					uni.showToast({
						title: '请输入验证码',
						icon:'none',
						duration: 2000
					});
					return;
				}
			},
			//获取手机验证码
			getCode:function(){
				let _this=this;
				_this.validation1();
				if(_this.isclick){
					let data={
						type:_this.type,
						mobile:_this.mobile,
					};
					_this.$axios(_this.$baseUrl.sendCode,data).then(res =>{
						if(res.data.status==1){
							_this.isclick=false;
							_this.isCode=true;
							var num = 60;
							var time = setInterval(function(){
								num--;
								_this.codeMsg = num +'s后重试';
								if(num == 0){
								  clearInterval(time);
								  _this.codeMsg = '发送验证码';
								  _this.isclick=true;
								  _this.isCode = false;
								}
							},1000)
							uni.showToast({
								title: res.data.msg,
								icon:'success',
								duration: 1000
							});
						}else{
							uni.showToast({
								title: res.data.msg,
								icon:'none',
								duration: 1000
							});
						}
					}).catch(error =>{
						
					})
				}else{
					
				}
			}
		}
	}
</script>

<style>
	#app {
		overflow: hidden;
	}
	.logo {
		width: 141upx;
		height: 125upx;
		margin-top: 100upx;
		margin-left: 305upx;
		overflow: hidden;
		margin-bottom: 68upx;
	}

	.logo>image {
		width: 100%;
		height: 100%;
	}

	.user-view {
		width: 630upx;
		height: 106upx;
		margin: 0 auto;
		overflow: hidden;
		border-bottom: 1px solid rgba(230, 230, 230, 1);
	}

	.user-img {
		width: 34upx;
		height: 39upx;
		margin-top: 33upx;
		margin-right: 36upx;
		float: left;
	}

	.user-img>image {
		width: 100%;
		height: 100%;
	}

	.user-input {
		width: 360upx;
		height: 106upx;
		overflow: hidden;
	}

	.user-input>input {
		width: 360upx;
		height: 106upx;

		line-height: 106upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.code {
		width: 150upx;
		float: right;
		text-align: right;
		height: 106upx;
		line-height: 106upx;
		font-size: 22upx;
		font-family: PingFang-SC-Regular;
		font-weight: 400;
		color: rgba(200, 0, 10, 1);
	}

	.login {
		width: 631upx;
		height: 80upx;
		background: rgba(200, 0, 10, 1);
		opacity: 0.5;
		border-radius: 40upx;
		margin: 0 auto;
		text-align: center;
		line-height: 80upx;
		font-size: 30upx;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		margin-top: 72upx;
	}

	.weixin {
		width: 100%;
		overflow: hidden;
		margin-top: 58upx;
	}

	.weixin-text {
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(204, 204, 204, 1);
		text-align: center;
	}

	.weixin-inco {
		width: 83upx;
		height: 83upx;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 38upx;
	}

	.weixin-inco>image {
		width: 100%;
		height: 100%;
	}

	.statement {
		width: 100%;
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		text-align: center;
		margin-top: 82upx;
	}

	.statement>text {
		color: rgba(200, 0, 10, 1);
	}
</style>
