<template>
	<view>
		<view class="information">
			<image class="information-bg" src="../../../static/user/member/bg.png" mode=""></image>
			<view class="an-crown">
				<image src="../../../static/user/member/grade.png" mode="">
				</image>
			</view>
			<view class="an-crown-text">
				黄金会员
			</view>
			<view class="member">
				<view class="member-img">
					<image src="../../../static/user/member/grade1.png" mode=""></image>
				</view>
				<view class="member-view">
					<view style="width: 100%;"></view>
				</view>
				<view class="member-img">
					<image src="../../../static/user/member/grade1.png" mode=""></image>
				</view>
				<view class="member-view">
					<view style="width: 30%;"></view>
				</view>
				<view class="member-img">
					<image src="../../../static/user/member/grade2.png" mode=""></image>
				</view>
				<view class="member-view">
					<view style="width: 0%;"></view>
				</view>
				<view class="member-img">
					<image src="../../../static/user/member/grade2.png" mode=""></image>
				</view>
			</view>
			<view class="member-text">
				<view>
					3000积分
				</view>
				<view>
					距离铂金会员还有10单
				</view>
			</view>
			<view class="rule" @click="rule">
				升级规则
			</view>
		</view>
		<view class="equity">
			尊贵的黄金会员，您享有一下权益
		</view>
		<view class="classification">
			<view class="classification-view">
				<view class="classification-img">
					<image src="../../../static/user/member/integral.png" mode=""></image>
				</view>
				<view class="classification-text">
					购物送积分
				</view>
			</view>
			<view class="classification-view">
				<view class="classification-img">
					<image src="../../../static/user/member/share.png" mode=""></image>
				</view>
				<view class="classification-text">
					分享
				</view>
			</view>
			<view class="classification-view">
				<view class="classification-img">
					<image src="../../../static/user/member/gift_package.png" mode=""></image>
				</view>
				<view class="classification-text">
					新手礼包
				</view>
			</view>
			<view class="classification-view">
				<view class="classification-img">
					<image src="../../../static/user/member/sign_in.png" mode=""></image>
				</view>
				<view class="classification-text">
					签到
				</view>
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
			rule() {
				uni.navigateTo({
					url: "rule",
				})
			}
		}
	}
</script>

<style scoped>
	.information {
		width: 750upx;
		height: 411upx;
		overflow: hidden;
		position: relative;
	}

	.information-bg {
		width: 100%;
		height: 100%;
	}

	.an-crown {
		width: 206upx;
		height: 187upx;
		left: 272upx;
		top: 49upx;
		position: absolute;
		overflow: hidden;
	}

	.rule {
		width: 110upx;
		height: 33upx;
		background: rgba(109, 129, 147, 1);
		border-radius: 17upx;
		font-size: 20upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgb(220, 220, 220);
		text-align: center;
		line-height: 33upx;
		position: absolute;
		top: 18upx;
		right: 25upx;
		z-index: 20;
	}

	.an-crown>image {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.an-crown-text {
		width: 100%;
		height: 30upx;
		font-size: 20upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		position: absolute;
		top: 174upx;
		left: 0;
		text-align: center;
		line-height: 30upx;
	}

	.member {
		position: absolute;
		width: 700upx;
		height: 60upx;
		top: 268upx;
		left: 25upx;
		overflow: hidden;
	}

	.member>view {
		float: left;
	}

	.member-img {
		width: 60upx;
		height: 60upx;
		overflow: hidden;
	}

	.member-img>image {
		width: 100%;
		height: 100%;
	}

	.member-view {
		width: 144upx;
		height: 1upx;
		background-color: rgba(190, 190, 190, 1);
		margin: 29upx 4upx;
		overflow: hidden;
	}

	.member-view>view {
		height: 1upx;
		background-color: rgba(255, 216, 69, 1);
	}

	.member-text {
		position: absolute;
		width: 700upx;
		height: 25upx;
		bottom: 34upx;
		left: 25upx;
		overflow: hidden;

	}

	.member-text>view {
		width: 50%;
		height: 25upx;
		font-size: 22upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 232, 150, 1);
		line-height: 25upx;
	}

	.member-text>view:nth-child(1) {
		float: right;
		text-align: right;
	}

	.equity {
		width: 100%;
		height: 92upx;
		overflow: hidden;
		text-align: center;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(232, 183, 65, 1);
		line-height: 92upx;
	}

	.classification {
		margin-top: 17upx;
		width: 100%;
		height: 177upx;
		overflow: hidden;
		display: flex;
	}

	.classification-view {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.classification-img {
		width: 100upx;
		height: 100upx;
		margin: 0 auto;
		overflow: hidden;
	}

	.classification-img>image {
		width: 100%;
		height: 100%;
	}

	.classification-text {
		width: 100%;
		height: 77upx;
		line-height: 77upx;
		text-align: center;
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
</style>
