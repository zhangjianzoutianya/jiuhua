<template>
	<view>
		<view class="record">
			<view class="record-view">
				<view class="money">
					<view>
						-199.88
					</view>
					<view>
						<text class="t1">充值成功</text>
					</view>
				</view>
				<view class="record-image">
					<image src="../../../static/user/recharge/phone.png" mode=""></image>
				</view>
				<view class="amount">
					<view>
						充值话费（200元）
					</view>
					<view>
						05-05 12:12
					</view>
				</view>
			</view>
			<view class="record-view">
				<view class="money">
					<view>
						-199.88
					</view>
					<view>
						<text class="t2">充值失败</text>
					</view>
				</view>
				<view class="record-image">
					<image src="../../../static/user/recharge/phone.png" mode=""></image>
				</view>
				<view class="amount">
					<view>
						充值话费（200元）
					</view>
					<view>
						05-05 12:12
					</view>
				</view>
			</view>
			<view class="record-view">
				<view class="money">
					<view>
						-199.88
					</view>
					<view>
						<text class="t2">充值失败</text>
					</view>
				</view>
				<view class="record-image">
					<image src="../../../static/user/recharge/phone.png" mode=""></image>
				</view>
				<view class="amount">
					<view>
						充值话费（200元）
					</view>
					<view>
						05-05 12:12
					</view>
				</view>
			</view>
			<view class="record-view">
				<view class="money">
					<view>
						-199.88
					</view>
					<view>
						<text class="t2">充值失败</text>
					</view>
				</view>
				<view class="record-image">
					<image src="../../../static/user/recharge/phone.png" mode=""></image>
				</view>
				<view class="amount">
					<view>
						充值话费（200元）
					</view>
					<view>
						05-05 12:12
					</view>
				</view>
			</view>
		</view>
		<view class="null"></view>
		<view class="recharge">
			<view @click="recharge">
				充 值
			</view>
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
			recharge() {
				uni.navigateTo({
					url: 'recharge'
				})
			}
		}
	}
</script>

<style scoped>
	.record {
		width: 100%;
		overflow: hidden;
	}

	.record-view {
		width: 100%;
		height: 153upx;
		border-top: 1upx solid rgba(238, 238, 238, 1);
		overflow: hidden;
	}

	.money {
		width: 180upx;
		height: 100%;
		float: right;
		margin-right: 27upx;
		overflow: hidden;
	}

	.money>view:nth-child(1) {
		width: 100%;
		height: 30upx;
		line-height: 30upx;
		text-align: right;
		margin-top: 46upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.money>view:nth-child(2) {
		width: 100%;
		height: 22upx;
		margin-top: 18upx;
		font-size: 20upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		text-align: right;
	}

	.t1 {
		color: rgba(9, 187, 7, 1);
	}

	.t2 {
		color: rgba(201, 0, 9, 1);
	}

	.record-image {
		width: 70upx;
		height: 70upx;
		overflow: hidden;
		background: rgba(201, 0, 9, 1);
		border-radius: 50%;
		margin-left: 26upx;
		margin-top: 41.5upx;
		float: left;
		margin-right: 33upx;
		position: relative;
	}

	.record-image>image {
		width: 27upx;
		height: 41upx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.amount {
		overflow: hidden;
		height: 100%;
	}

	.amount>view:nth-child(1) {
		font-size: 28upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		height: 30upx;
		line-height: 30upx;
		margin-top: 45upx;
	}

	.amount>view:nth-child(2) {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		height: 26upx;
		line-height: 26upx;
		margin-top: 14upx;
	}

	.recharge {
		width: 100%;
		height: 98upx;
		position: fixed;
		z-index: 10upx;
		background: #FFFFFF;
		overflow: hidden;
		left: 0;
		bottom: 0;
	}

	.recharge>view {
		width: 699upx;
		height: 60upx;
		background: rgba(201, 0, 9, 1);
		border-radius: 10upx;
		margin: 19upx auto;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 60upx;
	}

	.null {
		width: 98upx;
		height: 98upx;
	}
</style>
