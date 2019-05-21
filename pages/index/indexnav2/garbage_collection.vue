<template>
	<view>
		<view class="garbage">
			<view class="garbage_box">
				<view class="garbage_tab" @click="tabs(0)" :class="{'activ':index==0}">
					 <text>综合排序</text>
					  <view class="shom_top_left_img">
						  <image class="acm_ty" src="../../../static/index/xia_snm.png" mode=""></image>
						  <image class="abm_on" src="../../../static/index/xia_snm1.png" mode=""></image>
					 </view>
				</view>
				<view class="garbage_tab" @click="tabs(1)" :class="{'activ':index==1}">
					 <text>最热</text>
					  <view class="shom_top_left_img">
						  <image class="acm_ty" src="../../../static/index/xia_snm.png" mode=""></image>
						  <image class="abm_on" src="../../../static/index/xia_snm1.png" mode=""></image>
					 </view>
				</view>
				<view class="garbage_tab" @click="tabs(2)" :class="{'activ':index==2}">
				  <text>更新</text>
				  <view class="shom_top_left_img">
				 	  <image class="acm_ty" src="../../../static/index/xia_snm.png" mode=""></image>
					  <image class="abm_on" src="../../../static/index/xia_snm1.png" mode=""></image>
				 </view>
			    </view>
		    </view>
		</view>
		<view class="sec2">
			<view class="sec-inner sec2-inner">
				<view class="sec4-content">
					<view class="sec4-content-list" @click="goMsg('articleInner')">
						<view class="img">
							<image src="../../../static/index/sec2_but1.png" mode=""></image>
						</view>
						<view class="flex-right">
							<view class="title">锻造生态环保为打好污染防治攻坚战保驾护航</view>
							<!-- <view class="videoss">视频</view> -->
							<view class="title2">
								<view class="title2_1">热</view>
								<text>服务到家</text>
								<text>1088评论</text>
								<text>1小时前</text>
							</view>
						</view>
					</view>
					<view class="sec4-content-list">
						<view class="img">
							<image src="../../../static/index/sec2_but2.png" mode=""></image>
							<view class="sec4_play">
								<image src="../../../static/index/sec2_plays.png" mode=""></image>
							</view>
						</view>
						<view class="flex-right">
							<view class="title">生态环境部召开部常务会议生态环境部召开部常务会议 <view class="videoss">视频</view></view>
							
							<view class="title2">
								<!-- <view class="title2_1">热</view> -->
								<text>服务到家</text>
								<text>1088评论</text>
								<text>1小时前</text>
							</view>
						</view>
					</view>
					<view class="sec4-content-list">
						<view class="img">
							<image src="../../../static/index/sec2_but2.png" mode=""></image>
						</view>
						<view class="flex-right">
							<view class="title">生态环境部召开部常务会议</view>
							<view class="title2">
								<view class="title2_1">热</view>
								<text>服务到家</text>
								<text>1088评论</text>
								<text>1小时前</text>
							</view>
						</view>
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
				index: 0,
			}
		},
		methods: {
			tabs(o){
				this.index = o;
			},
			goMsg(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
<style scoped>
	.garbage{
		padding: 20upx 26upx;
		border-top: 1upx solid #EEEEEE;
		border-bottom: 1upx  solid #EEEEEE;
	}
	.garbage_box{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.garbage_tab{
		line-height: 40upx;
		font-size:28upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		display: flex;
	}
	.shom_top_left_img{
		width: 14upx;
		height: 8upx;
		margin-top: 16upx;
		margin-left: 12upx;
	}
	.shom_top_left_img image{
		width: 100%;
		height: 100%;
	}
	.activ{
		color: #C90009;
	}
	.abm_on{
		display: none;
	}
	.acm_ty{
		display: block;
	}
	.activ .abm_on{
		display: block!important;
	}
	.activ .acm_ty{
		display: none!important;
	}
	
	
	
	.sec2{
		padding: 0 26upx;
	}
	.sec2-inner .videoss{
		width: 60upx;
		height: 28upx;
		background: #FF0018;
		font-size:24upx;
		display: inline-block;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		white-space: normal;
		line-height: 28upx;
		border-radius: 10upx;
		text-align: center;
	}
	.sec4-content-list{
		padding: 40upx 0upx;
		border-top: 1px solid rgba(234,234,234,1);
		display: flex;
	}
	.sec4-content-list .img{
		position: relative;
	}
	.sec4-content-list .img image{
		width: 261upx;
		height: 172upx;
	}
	.sec4-content-list .title{
		height:75upx;
		font-size:30upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:1.3;
		overflow: hidden;
	}
	.sec4-content-list .title2{
		display: flex;
		align-items: center;
		margin-top: 40upx;

	}
	.sec4-content-list .title2 text{
		font-size:24upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-right: 15upx;
		letter-spacing: 1upx;

	}
	.sec4-content-list .title2 .title2_1{
		font-size: 16upx;
		width: 22upx;
		height: 22upx;
		line-height: 22upx;
		text-align: center;
		border: 1px solid crimson;
		color: #DC143C;
		margin-right: 15upx;
		border-radius: 5upx;
		font-weight: bold;
	}
	.sec4-content-list:first-child{
		border: none;
	}
	.sec4-content-list .flex-right{
		padding-left: 19upx;
	}
	.sec4_play{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		width: 53upx;
		height: 53upx;
	}
	.sec4-content-list .sec4_play image{
		width: 53upx;
		height: 53upx;
	}
</style>
