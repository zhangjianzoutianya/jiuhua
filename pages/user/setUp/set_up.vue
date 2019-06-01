<template>
	<view id="app">
		<view class="option">
			<view class="option-view" @click="resetPassword">
				<image src="../../../static/user/more.png" mode=""></image>
			
				<view class="v2">
					重置密码
				</view>
			</view>
			<view class="option-view">
				<image src="../../../static/user/more.png" mode=""></image>
				<view class="v1">
					0B
				</view>
				<view class="v2">
					清除图片缓存
				</view>
			</view>
			<view class="option-view">
				<image src="../../../static/user/more.png" mode=""></image>
				
				<view class="v2">
					关于九华
				</view>
			</view>
			<view class="option-view" @click="bindCellPhone">
				<image src="../../../static/user/more.png" mode=""></image>
				
				<view class="v2">
					手机号绑定
				</view>
			</view>
			<view class="option-view" @click="adress">
				<image src="../../../static/user/more.png" mode=""></image>
				
				<view class="v2">
					收货地址管理
				</view>
			</view>
		</view>
		<view class="option-view1" @click="login">
			退出当前账号
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			login() {
				uni.navigateTo({
					url: "../login/member_login",
				})
			},
			resetPassword() {
				uni.navigateTo({
					url: "../login/change_password",
				})
			},
			bindCellPhone() {
				uni.navigateTo({
					url: "bind_cell_phone",
				})
			},
			adress() {
				uni.navigateTo({
					url: "address",
				})
			}
		}
	}
</script>

<style>
	#app {
		background-color: #F7F7F7;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	

	.option {
		width: 100%;
		margin-top: 20upx;
		overflow: hidden;
		background-color: rgb(255, 255, 255);
	}

	.option-view {
		width: 698upx;
		height: 98upx;
		border-bottom: 1upx solid rgb(221, 221, 221);
		overflow: hidden;
		margin: 0 auto;
	}
	.option-view:last-child {
		border-bottom: 1upx solid rgba(255, 255, 255, 1);
	}

	.option-view>image {
		width: 14upx;
		height: 24upx;
		margin-top: 37upx;
		float: right;
		margin-left: 20upx;
	}

	.v1 {
		float: right;
		line-height: 98upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.v2 {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 98upx;
	}
	
	.option-view1 {
		width: 100%;
		height: 80upx;
		overflow: hidden;
		text-align: center;
		margin-top: 86upx;
		font-size:28upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		background-color: rgba(255,255,255,1);
		color: rgba(51, 51, 51, 1);
		line-height:80upx;
	}
</style>
