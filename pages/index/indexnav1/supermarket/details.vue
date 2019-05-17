<template>
	<view>
		<view class="image-view">
			<image src="../../../../static/index/indexnav1/banner1.png" mode=""></image>
		</view>
		<view class="introduction">
			<view class="introduction1">
				九华无人超市（学院路）
			</view>
			<view class="introduction2">
				营业时间：周一至周日 09:00-21:00
			</view>
			<view class="introduction3">
				<image src="../../../../static/index/indexnav1/positioning2.png" mode=""></image>
				<view>
					下城区延安路凤起路站A30号商铺
				</view>
			</view>
			<view class="introduction4">
				<image src="../../../../static/index/indexnav1/phone.png" mode=""></image>
				<view>
					18667193369
				</view>
			</view>
		</view>
		<view class="cuisine">
			<view class="cuisine-text">
				今日菜价
			</view>
			<view class="horizontal">
				<view class="dishes">
					<view class="dishes1">
						<view>
							品种名称
						</view>
						<view>
							昨日价格
						</view>
						<view>
							最新价格
						</view>
						<view>
							每日涨幅
						</view>
					</view>
					<view class="dishes2">
						<view>
							油麦菜
						</view>
						<view>
							5.90
						</view>
						<view>
							6.20
						</view>
						<view>
							+0.30 <image src="../../../../static/index/indexnav1/up.png" mode=""></image>
						</view>
					</view>
					<view class="dishes2">
						<view>
							油麦菜
						</view>
						<view>
							5.90
						</view>
						<view>
							6.20
						</view>
						<view>
							+0.30
						</view>
					</view>
					<view class="dishes2">
						<view>
							油麦菜
						</view>
						<view>
							5.90
						</view>
						<view>
							6.20
						</view>
						<view>
							+0.30
							<image src="../../../../static/index/indexnav1/down.png" mode=""></image>
						</view>
					</view>
					<view class="dishes2">
						<view>
							油麦菜
						</view>
						<view>
							5.90
						</view>
						<view>
							6.20
						</view>
						<view>
							+0.30
						</view>
					</view>
					<view class="dishes-img">
						<image src="../../../../static/index/indexnav1/more.png" mode=""></image>
					</view>
				</view>

			</view>

		</view>
		<view class="recommend">
			<view class="recommend-text">
				热门推荐
			</view>
			<view class="comm">
				<view class="comm1">
					<view class="comm-img">
						<image src="../../../../static/index/indexnav1/003.png" mode=""></image>
					</view>
					<view class="comm-text">
						乳酸菌饮料
					</view>
				</view>
				<view class="comm1">
					<view class="comm-img">
						<image src="../../../../static/index/indexnav1/003.png" mode=""></image>
					</view>
					<view class="comm-text">
						乳酸菌饮料
					</view>
				</view>
				<view class="comm1">
					<view class="comm-img">
						<image src="../../../../static/index/indexnav1/003.png" mode=""></image>
					</view>
					<view class="comm-text">
						乳酸菌饮料
					</view>
				</view>
				<view class="comm1">
					<view class="comm-img">
						<image src="../../../../static/index/indexnav1/003.png" mode=""></image>
					</view>
					<view class="comm-text">
						乳酸菌饮料
					</view>
				</view>
				<view class="comm1">
					<view class="comm-img">
						<image src="../../../../static/index/indexnav1/003.png" mode=""></image>
					</view>
					<view class="comm-text">
						乳酸菌饮料
					</view>
				</view>
				<view class="comm1">
					<view class="comm-img">
						<image src="../../../../static/index/indexnav1/003.png" mode=""></image>
					</view>
					<view class="comm-text">
						乳酸菌饮料
					</view>
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

		}
	}
</script>

<style>
	.image-view {
		width: 698upx;
		height: 307upx;
		margin: 10upx auto;
	}

	.image-view>image {
		width: 100%;
		height: 100%;
	}

	.introduction {
		width: 698upx;
		margin: 37upx auto;
	}

	.introduction1 {
		height: 60upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 60upx;
	}

	.introduction2 {
		height: 60upx;
		font-size: 26upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 60upx;
	}

	.introduction3 {
		height: 60upx;
	}

	.introduction3>image {
		width: 23upx;
		height: 28upx;
		margin-top: 16upx;
		float: left;
		margin-right: 11upx;
	}

	.introduction3>view {
		height: 25upx;
		font-size: 26upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 60upx;
	}

	.introduction4 {
		height: 60upx;
	}

	.introduction4>image {
		width: 23upx;
		height: 28upx;
		margin-top: 16upx;
		float: left;
		margin-right: 11upx;
	}

	.introduction4>view {
		height: 25upx;
		font-size: 26upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 60upx;
	}

	.cuisine {
		width: 698upx;
		margin: 10upx auto;
	}

	.cuisine-text {
		height: 100upx;
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 100upx;
	}

	.horizontal {
		width: 698upx;
		height: 20upx;
		background: rgba(204, 210, 216, 1);
		border-radius: 10upx;
		position: relative;
	}

	.dishes {
		width: 682upx;
		height: 481upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 0upx 16upx 0upx rgba(191, 191, 191, 0.26);
		position: absolute;
		top: 10upx;
		left: 8upx;
	}

	.dishes1 {
		width: 100%;
		height: 75upx;
		display: flex;
	}

	.dishes1>view {
		flex: 1;
		text-align: center;
		line-height: 75upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.dishes2 {
		width: 100%;
		height: 75upx;
		display: flex;
		border-bottom: 1upx solid #eee;
	}

	.dishes2>view {
		flex: 1;
		text-align: center;
		line-height: 75upx;
		font-size: 28upx;

	}

	.dishes2>view:nth-child(1) {
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}

	.dishes2>view:nth-child(2) {
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1)
	}

	.dishes2>view:nth-child(3) {
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(201, 0, 9, 1);
	}

	.dishes2>view:nth-child(4) {
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(253, 135, 39, 1);
	}

	.dishes2>view:nth-child(4)>image {
		width: 12upx;
		height: 18upx;
		padding-left: 5upx;
	}

	.dishes-img {
		width: 20upx;
		height: 20upx;
		margin: 20upx auto;
	}

	.dishes-img>image {
		width: 100%;
		height: 100%;
	}
	
	.recommend {
		width: 698upx;
		margin: 0 auto;
		margin-top: 505upx;
	}
	.recommend-text {
		height:100upx;
		font-size:30upx;
		font-family:PingFang-SC-Medium;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:100upx;
	}
	
	.comm {
		width: 100%;
		overflow: hidden;
	}
	.comm1 {
		width: 218upx;
		overflow: hidden;
		float: left;
		margin-bottom: 20upx;
	}
	.comm1:nth-child(3n+2) {
		margin-left: 22upx;
		margin-right: 22upx;
	}
	.comm-img {
		width: 218upx;
		height: 156upx;
	}
	.comm-img > image {
		width: 100%;
		height: 100%;
	}
	.comm-text {
		width: 100%;
		text-align: center;
		height: 60upx;
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:bold;
		color:rgba(102,102,102,1);
		line-height:60upx;
	}
</style>
