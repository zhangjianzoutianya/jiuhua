<template>
	<view>		 
		<view class="station_list">
			<view class="circula_list">
				 <view class="cila_left">
					<view class="cila_left_top">
						 盈丰路地铁C出口
						 <text>最近</text>
					</view>
					<view class="cila_left_botm">
						距离100m
					</view>
				 </view>
				 <view class="cila_right">
					<view class="cila_right_img">
						<image src="../../../static/index/nav_yu.png" mode=""></image>
					</view>
					<view class="cila_right_con">
						到这去
					</view>
				 </view>
			</view>
			<view class="circula_list">
				 <view class="cila_left">
					<view class="cila_left_top">
						 盈丰路地铁C出口
					</view>
					<view class="cila_left_botm">
						距离100m
					</view>
				 </view>
				 <view class="cila_right">
					<view class="cila_right_img">
						<image src="../../../static/index/nav_yu.png" mode=""></image>
					</view>
					<view class="cila_right_con">
						到这去
					</view>
				 </view>
			</view>
		</view>
	 </view>
</template>

<script>
</script>

<style>
	.station_list{
		width: 100%;
		border-top: 1upx solid #F3F3F3;
	}
	.circula_list{
		display: flex;
		justify-content: space-between;
		width: 94%;
		border-bottom: 1upx solid #EEEEEE;
		padding: 23upx 26upx;
	}
	.cila_left_top{
		display: flex;
		color: #333333;
		font-size: 30upx;
	}
	.cila_left_top text{
		font-size:24upx;
		font-weight:500;
		color:rgba(200,0,10,1);
		border: 1upx solid #C8000A;
		text-align: center;
		padding: 1upx 6upx;
		border-radius: 10upx;
		margin-left: 10upx;
		display: inline-block;
	}
	.cila_left_botm{
		color: #999999;
		font-size: 30upx;
	}
	.cila_right{
		text-align: center;
		width: 20%;
	}
	.cila_right_img{
		width: 24upx;
		height: 28upx;
		margin: auto;
	}
	.cila_right_img image{
		width: 100%;
		height: 100%;
	}
	.cila_right_con{
		margin-top: 15upx;
		color: #666666;
		font-size: 26upx;
	}
</style>
