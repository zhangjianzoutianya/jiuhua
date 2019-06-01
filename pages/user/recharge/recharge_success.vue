<template>
	<view id="app">
		<view class="complete">
			<image src="../../../static/user/recharge/complete.png" mode=""></image>
		</view>
		<view class="complete-text">
			200元充值成功
		</view>
		<view class="complete-btn" @click="goBack">
			完 成
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
			goBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.complete {
		width: 268upx;
		height: 248upx;
		margin: 0 auto;
		margin-top: 140upx;
	}

	.complete>image {
		width: 100%;
		height: 100%;
	}

	.complete-text {
		width: 100%;
		height: 142upx;
		text-align: center;
		line-height: 142upx;
		font-size: 34upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.complete-btn {
		width: 397upx;
		height: 62upx;
		background: rgba(201, 0, 9, 1);
		border-radius: 31upx;
		margin: 20upx auto;
		font-size: 28upx;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 62upx;
	}
</style>
