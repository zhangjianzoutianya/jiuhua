<template>
	<view id="app">
		<view class="modify">
			<view class="modify-img">
				<image src="../../../static/user/close.png" mode=""></image>
			</view>
			<view class="modify-input">
				<input type="text" value="" placeholder="请输入昵称" v-model="user_name" confirm-type="search" @confirm="editUser()" />
			</view>
		</view>
		<view class="modify-text">
			4-20个字符、可由中文、字母、数字、组成
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				user_name:'',
				token:''
			}
		},
		created:function(){
			var _this = this;
			uni.getStorage({
				 key: 'token',
				 success: function (res) {
					 _this.token = res.data
				}
			})
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			let _this = this;
			_this.user_name = option.name;
		},
		methods: {
			//修改昵称
			editUser:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					name:_this.user_name,
				};
				_this.$axios(_this.$baseUrl.editUser,data).then(res =>{
					if(res.data.status==1){
						uni.showToast({
							title: res.data.msg,
							icon:'success',
							position:'center',
							duration: 2000
						})
						setTimeout(function(){
							uni.navigateBack({})
						},1500)
					}
				}).catch(error =>{
					
				})
			},
		},
	}
</script>

<style>
	#app {
		overflow: hidden;
	}

	.modify {
		width: 100%;
		height: 94upx;
		border-bottom: 1upx solid rgba(228, 228, 228, 1);
		border-top: 1upx solid rgba(228, 228, 228, 1);
	}

	.modify-img {
		width: 25upx;
		height: 25upx;
		overflow: hidden;
		float: right;
		border-radius: 50%;
		font-size: 0;
		text-align: center;
		line-height: 25upx;

		margin: 34.5upx 20upx;
	}

	.modify-img>image {
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}

	.modify-input {
		width: 500upx;
		height: 94upx;
		margin-left: 26upx;
		overflow: hidden;
	}

	.modify-input>input {
		width: 500upx;
		height: 94upx;
		font-size: 28upx;
		font-family: PingFang-SC-Regular;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 94upx;
	}
	.modify-text {
		width: 100%;
		height: 94upx;
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:bold;
		color:rgba(153,153,153,1);
		line-height:94upx;
		padding-left: 26upx;
	}
</style>
