<template>
	<view>
		<view class="help-img">
			<image src="../../../static/user/help/bannerBg.jpg" mode=""></image>
			<view class="help-text">
				您好，<br />
				我们为您提供更多帮助
			</view>
			<view class="search">
				<image src="../../../static/user/help/search.png" mode=""></image>
				<view class="search-input">
					<input type="text" value="" placeholder="输入关键词搜索问题与答案" placeholder-style="color:rgba(255,255,255,1);" />
				</view>
			</view>
		</view>
		<view>
			<view class="problem">
				常见问题
			</view>
			<view class="problem-info">
				<view class="problem-info1">
					Q：如何获得积分？
				</view>
				<view class="problem-info2">
					用户可以通过签到、购物获得积分。
				</view>
			</view>
			<view class="problem-info">
				<view class="problem-info1">
					Q：客服电话是多少？
				</view>
				<view class="problem-info2">
					客服热线：400-5662-468
				</view>
			</view>
			<view class="problem-info">
				<view class="problem-info1">
					Q：如何修改登录密码？
				</view>
				<view class="problem-info2">
					在APP登录页面【登录】按钮左下角点击【找回密码】，输入手机号及验证码可以重新设置密码。
				</view>
			</view>
		</view>
		<view class="view-more">
			查看更多<image src="../../../static/user/help/more.png" mode=""></image>
		</view>
		<view class="customer-service">
			<image src="../../../static/user/help/customer_service.png" mode=""></image>
			联系客服
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

		}
	}
</script>

<style scoped>
	.help-img {
		width: 100%;
		height: 336upx;
		overflow: hidden;
		position: relative;
	}

	.help-img>image {
		width: 100%;
		height: 100%;
	}

	.help-text {
		width: 500px;
		font-size: 38upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 65upx;
		position: absolute;
		top: 44upx;
		left: 23upx;
	}

	.search {
		position: absolute;
		left: 25upx;
		bottom: 40upx;
		width: 700upx;
		height: 78upx;
		background: rgba(255, 255, 255, 0.28);
		border-radius: 10px;
	}

	.search>image {
		width: 32upx;
		height: 32upx;
		margin: 23upx;
		float: left;
	}

	.search-input {
		width: 600upx;
		height: 78upx;
		overflow: hidden;
	}

	.search-input>input {
		width: 600upx;
		height: 78upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 78upx;
	}

	.problem {
		width: 100%;
		height: 97upx;
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 97upx;
		padding-left: 27upx;
		border-bottom: 1upx solid rgba(238, 238, 238, 1);
	}

	.problem-info {
		width: 100%;
		overflow: hidden;
		/* height: 149upx; */
		border-bottom: 1upx solid rgba(238, 238, 238, 1);
	}

	.problem-info1 {
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin-top: 30upx;
		padding-left: 27upx;
		padding-bottom: 10upx;
	}

	.problem-info2 {
		width: 700upx;
		font-size: 24upx;
		padding-left: 27upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 40upx;
		padding-bottom: 30upx;
	}

	.view-more {
		width: 162upx;
		height: 50upx;
		border: 1upx solid rgba(249, 63, 75, 1);
		border-radius: 6upx;
		text-align: center;
		font-size: 22upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(201, 0, 9, 1);
		line-height: 50upx;
		margin: 0 auto;
		margin-top: 79upx;
	}

	.view-more>image {
		width: 16upx;
		height: 16upx;
		margin-left: 10upx;
	}

	.customer-service {
		width: 698upx;
		height: 68upx;
		background: linear-gradient(0deg, rgba(201, 0, 9, 1) 0%, rgba(255, 69, 78, 1) 100%);
		border-radius: 10upx;
		margin: 0 auto;
		font-size: 28upx;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 68upx;
		margin-top: 60upx;
	}

	.customer-service>image {
		width: 24upx;
		height: 24upx;
		margin-right: 10upx;
	}
</style>
