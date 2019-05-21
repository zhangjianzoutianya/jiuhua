<template>
	<view id="app">
		<view class="logo" @click="logo">
			<view class="logo-img">
				<image :src="logoImage" mode=""></image>
			</view>
			<view class="title">
				头像
			</view>
		</view>
		<view class="option">
			<view class="option-view">
				<view class="v1">
					15797654635
				</view>
				<view class="v2">
					登陆账号
				</view>
			</view>
			<view class="option-view">
				<image src="../../../static/user/more.png" mode=""></image>
				<view class="v1">
					呵呵哒!
				</view>
				<view class="v2" @click="nickname">
					昵称
				</view>
			</view>
			<view class="option-view">
				<image src="../../../static/user/more.png" mode=""></image>

				<view class="v2">
					性别
				</view>
			</view>
			<view class="option-view">
				<image src="../../../static/user/more.png" mode=""></image>

				<view class="v2">
					生日
				</view>
			</view>

		</view>
		<view class="option-view2">
			<image src="../../../static/user/more.png" mode=""></image>

			<view class="v3">
				修改密码
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logoImage: "../../../static/user/logo_null.png",
			}
		},
		methods: {
			logo() {
				var _this = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						_this.logoImage = res.tempFilePaths[0];
					}
				});
			},
			nickname() {
				uni.navigateTo({
					url: "nickname",
				})
			}
		}
	}
</script>

<style scoped>
	#app {
		background-color: #F7F7F7;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.logo {
		width: 100%;
		height: 150upx;
		overflow: hidden;
		background-color: rgb(255, 255, 255);
		margin-top: 20upx;
	}

	.logo-img {
		width: 107upx;
		height: 107upx;
		border-radius: 50%;
		margin: 21.5upx;
		float: right;
		overflow: hidden;
	}

	.logo-img>image {
		width: 100%;
		height: 100%;
	}

	.title {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 150upx;
		margin-left: 31upx;
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

	.option-view2 {
		width: 100%;
		height: 98upx;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 38upx;
		background-color: rgb(255, 255, 255);
	}

	.option-view2>image {
		width: 14upx;
		height: 24upx;
		margin-top: 37upx;
		float: right;
		margin-left: 20upx;
		margin-right: 26upx;
	}

	.option-view>image {
		width: 14upx;
		height: 24upx;
		margin-top: 37upx;
		float: right;
		margin-left: 20upx;
	}

	.v3 {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 98upx;
		margin-left: 31upx;
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
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		background-color: rgba(255, 255, 255, 1);
		color: rgba(51, 51, 51, 1);
		line-height: 80upx;
	}
</style>
