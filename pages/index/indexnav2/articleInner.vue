<template>
	<view>
		<view class="sec1">
			<view class="sec-inner">
				<view class="art-tit">
					大数据让垃圾分类回收更加精细化
				</view>
				<view class="art-tit2">
					<text>服务到家</text>
					<text>1小时前</text>
				</view>
				<view class="art-content">
					<view class="art-content-inner1">
						如果不是CCTV央视新闻的报道关注，想必很多人还不知道自己随意投放的垃圾，已经快要无处可埋了。垃圾产生量的日趋增大，来不及烧、无处可埋的垃圾也正在吞噬我们的生存环境，而做好分类投放与处理，正是应对垃圾围城的关键。
					</view>
					<view class="art-content-inner2">
						<image class="art-content-inner2-img" src="../../../static/index/sec2_art1.png" mode=""></image>
					</view>
					<view class="art-content-inner3">
						<view class="text">
							近日，CCTV财经频道推出系列节目《三问垃圾分类》，第一期介绍了杭州生活垃圾填埋地——天子岭生活垃圾填埋场。天子岭是杭州市目前唯一生活垃圾填埋场，位于杭州市北郊半山镇石塘村。距离杭州市中心约20公里的填埋场，曾经是一个名叫青龙坞的山谷。在地面之下，垃圾填埋的深度达120米，相当于40层楼房的高度。现在，这个巨坑基本被垃圾填平了，已经完全看不出山谷的样子。
						</view>
						<view class="text">
							城市生活垃圾分类管理不仅可以节约资源，促进资源二次利用，更是减少垃圾生产量、保护环境的有效手段不分类，只会产生越来越多的混合垃圾，填埋不完、焚烧不尽。
						</view>
						<view class="text">
							我们或许可以为不去分类找到理由：交给技术去解决嘛。其实不然，垃圾处理技术虽然多种多样，但是没有哪一种处理技术可以高效无害地处理混合垃圾，原因在于混合垃圾的成分非常复杂，单一方式并不能对多品类的生活垃圾完全有效。
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="sec2">
			<view class="sec-inner sec2-inner">
				<view class="ipt">
					<input type="text" value="" placeholder="写评论" />
				</view>
				<view class="img1">
					<image src="../../../static/index/xiaoxi1.png" mode=""></image>
					<view class="img1-abs">
						20
					</view>
				</view>
				<view class="img2">
					<image src="../../../static/index/xiaoxi2.png" mode=""></image>
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

<style scoped>
	.sec-inner{
		width: 699upx;
		margin: 0 auto;
	}
	.art-tit{
		margin-top: 40upx;
		font-size:30upx;
		font-family:PingFang-SC-Bold;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:1;
		letter-spacing: 1upx;
	}
	.art-tit2{
		display: flex;
		margin-top: 40upx;
	}
	.art-tit2 text{
		font-size:24upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-right: 30upx;
	}
	.art-content{
		margin-top: 40upx;
	}
	.art-content-inner1{
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:1.5;
	}
	.art-content-inner2{
		margin-top: 40upx;
	}
	.art-content-inner2 .art-content-inner2-img{
		width: 699upx;
		height: 281upx;
	}
	.art-content-inner3 .text{
		font-size:26upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height: 1.5;
		text-indent: 2em;
		margin-top: 40upx;
	}
	.sec2{
		margin-top: 40upx;
		padding: 40upx 0;
		border-top: 1px solid rgba(241,241,241,1);
	}
	.sec2-inner{
		display: flex;
		align-items: center;
		/* padding-left: 79upx; */
		justify-content: space-between;
	}
	.ipt input{
		width:530upx;
		height:49upx;
		background:rgba(240,240,240,1);
		border-radius:10upx;
		outline: none;
		border: none;
		font-size: 24upx;
		padding-left: 20upx;
		letter-spacing: 2upx;
	}
	.img1{
		position: relative;
	}
	.img1 image{
		width:31upx;
		height:29upx;
	}
	.img2 image{
		width:26upx;
		height:29upx;
	}
	.img1-abs{
		height: 18upx;
		position: absolute;
		left: 50%;
		top:0;
		background:linear-gradient(-86deg,rgba(255,0,24,1),rgba(255,114,0,1));
		border-radius:6upx;
		font-size:18upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height: 18upx;
		text-align: center;
		padding: 0 5upx;
	}
</style>
