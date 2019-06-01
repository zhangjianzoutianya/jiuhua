<template>
	<view id="app">
		<view class="handle-img">
			<image src="../../../static/user/integral/handle.png" mode=""></image>
		</view>
		<view class="handle-title">
			兑换处理中
		</view>
		<view class="handle-text">
			可能需1-3分钟，请留意兑换详情
		</view>
		<view class="see" @click="checkExchangeDetails">
			查看兑换详情
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
			checkExchangeDetails() {
				uni.navigateTo({
					url:"check_exchange_details"
				})
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

	.handle-img {
		width: 268upx;
		height: 249upx;
		overflow: hidden;
		margin-top: 120upx;
		margin-left: 241upx;
	}

	.handle-img>image {
		width: 100%;
		height: 100%;
	}

	.handle-title {
		font-size: 34upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 35upx;
		text-align: center;
		margin-top: 54upx;
	}

	.handle-text {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 26upx;
		height: 26upx;
		margin-top: 30upx;
		text-align: center;
	}

	.see {
		width: 217upx;
		height: 61upx;
		border: 1upx solid rgba(201, 0, 9, 1);
		border-radius: 10upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(201, 0, 9, 1);
		line-height: 61upx;
		text-align: center;
		margin: 0 auto;
		margin-top: 75upx;
	}
</style>
