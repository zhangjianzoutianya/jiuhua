<template>
	<view id="app" class="business">	
	<view class="pages">
		<topSearch :title="mapName"></topSearch>
		
		<view class="business_list business_list_1">
			<view class="business_h5" @click="goPages('../index/indexnav1/wisdomIndex')">
				智@九华
				<view class="txt">点击进入 <image src="../../static/index/index_more.png"></image></view>
			</view>
			<view class="business_list_banner">
				<image src="../../static/index/indexnav1/banner.png" mode="aspectFill"></image>
			</view>
			
			<view class="unmanned">
				<view class="unmanned-view" @click="supermarket">
					<view class="unmanned-img">
						<image src="../../static/index/indexnav1/supermarket.png" mode="aspectFill"></image>
					</view>
					<view class="unmanned-text">
						无人超市
					</view>
				</view>
				<view class="unmanned-view">
					<view class="unmanned-img">
						<image src="../../static/index/indexnav1/vegetable_shop.png" mode="aspectFill"></image>
					</view>
					<view class="unmanned-text">
						无人菜店
					</view>
				</view>
				<view class="unmanned-view">
					<view class="unmanned-img">
						<image src="../../static/index/indexnav1/receiving_container.png" mode="aspectFill"></image>
					</view>
					<view class="unmanned-text">
						无人收货柜
					</view>
				</view>
				<view class="unmanned-view">
					<view class="unmanned-img">
						<image src="../../static/index/indexnav1/sellingCar.png" mode="aspectFill"></image>
					</view>
					<view class="unmanned-text">
						无人售卖车
					</view>
				</view>
			</view>
			
			<view class="sell-like-hot-cakes">
				<view class="sell-like-hot-cakes-text">
					热销店铺
				</view>
				<view class="sell-like-hot-cakes-i"></view>
				<view class="area">
					<view class="area-view">
						<image src="../../static/index/indexnav1/5.png" mode="aspectFill"></image>
						<view class="mask">
							<view class="ranking">
								TOP.1
							</view>
							<view class="area-text">
								拱墅区
							</view>
							<view class="area-name">
								某某某菜店
							</view>
						</view>
					</view>
					<view class="area-view">
						<image src="../../static/index/indexnav1/6.png" mode="aspectFill"></image>
						<view class="mask">
							<view class="ranking">
								TOP.2
							</view>
							<view class="area-text">
								拱墅区
							</view>
							<view class="area-name">
								某某某菜店
							</view>
						</view>
					</view>
					<view class="area-view">
						<image src="../../static/index/indexnav1/7.png" mode="aspectFill"></image>
						<view class="mask">
							<view class="ranking">
								TOP.3
							</view>
							<view class="area-text">
								拱墅区
							</view>
							<view class="area-name">
								某某某菜店
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="business_list business_list_2">
			<view class="business_h5" @click="goPages('../index/indexnav2/index')">
				循@九华
				<view class="txt">点击进入 <image src="../../static/index/index_more.png"></image></view>
			</view>
			<view class="business_list_banner">
				<image src="../../static/index/sec2_banner.png"></image>
			</view>
			
		</view>	
		
		<view class="business_list business_list_3">
			<view class="business_h5" @click="goPages('../index/indexnav3/live_box')">
				住@九华
				<view class="txt">点击进入 <image src="../../static/index/index_more.png"></image></view>
			</view>
			<view class="business_list_banner">
				<image src="../../static/index/banner_live.png"></image>
			</view>
			
		</view>	
		
		<view class="business_list business_list_4">
			<view class="business_h5" @click="goPages('../index/indexnav4/edge_hua')">
				缘@九华
				<view class="txt">点击进入 <image src="../../static/index/index_more.png"></image></view>
			</view>
			<view class="business_list_banner">
				<image src="../../static/index/banner_edge.png"></image>
			</view>
		</view>	
		
		<view class="business_list business_list_5">
			<view class="business_h5" @click="goPages('../index/indexnav5/food')">
				食@九华
				<view class="txt">点击进入 <image src="../../static/index/index_more.png"></image></view>
			</view>
			<view class="business_list_banner">
				<image src="../../static/index/indexnav5/001.png"></image>
			</view>
		</view>	
		
		<view class="business_list business_list_6">
			<view class="business_h5" @click="goPages('../index/indexnav6/index_neighborhood')">
				九华比邻
				<view class="txt">点击进入 <image src="../../static/index/index_more.png"></image></view>
			</view>
			<view class="business_list_banner">
				<image src="../../static/index/sta_banner.png"></image>
			</view>
		</view>	
		
		
	</view>
	</view>
</template>

<script>
	
	import topSearch from '../../components/topSearch.vue'
	
	export default {
		name: "topSearch",
		components: {
			topSearch
		},
		data() {
			return {
				mapName:"萧山区",
			}
		},
		created(){
			var _this=this;
		},
		mounted(){
			
		},
		methods: {
			goPages:function(url){
				uni.navigateTo({
					url:url,
				})
			},
			childMethod() {
			},
		}
	}
</script>

<style>
	.business .pages{
		padding-top: 45upx;
		padding-bottom: 100upx;
	}
	.business .business_list{
		padding: 60upx 27upx 40upx 27upx;
		border-bottom: 20upx solid rgba(247,247,247,1);
	}
	.business .business_h5{
		position: relative;
		font-size:32upx;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:24upx;
		padding-bottom: 20upx;
		margin-bottom: 35upx;
	}
	.business .business_h5:before{
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width:32upx;
		height:4upx;
		background-color: rgba(201,0,9,1);
	}
	.business .business_h5 .txt{
		height:24upx;
		font-size:24upx;
		color:rgba(201,0,9,1);
		line-height:24upx;
		position: absolute;
		top: 0;
		right: 0;
	}
	.business .business_h5 .txt image{
		display: inline-block;
		width:12upx;
		height:22upx;
		margin-left: 10upx;
	}
	.business .business_list_1 .business_list_banner{
		width: 100%;
	}
	.business .business_list_1 .business_list_banner image{
		width: 695upx;
		height: 345upx;
	}
	
	.business .unmanned {
		width: 100%;
		height: 150upx;
		overflow: hidden;
		display: flex;
		margin-top: 46upx;
	}
	.business .unmanned-view {
		flex: 1;
		height: 100%;
	}
	.business .unmanned-img {
		width: 109upx;
		height: 109upx;
		margin: 0 auto;
		overflow: hidden;
	}
	.business .unmanned-img>image {
		width: 100%;
		height: 100%;
	}
	.business .unmanned-text {
		text-align: center;
		height: 28upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
	.business .sell-like-hot-cakes {
		margin: 0 auto;
		margin-top: 53upx;
	}
	.business .sell-like-hot-cakes-text {
		height: 32upx;
		font-size: 30upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 32upx;
	}
	.business .sell-like-hot-cakes-i {
		width: 35upx;
		height: 4upx;
		margin-top: 8upx;
		background: rgba(201, 201, 201, 1);
	}
	.business .area {
		margin-top: 32upx;
		width: 698upx;
		display: flex;
	}
	.business .area-view {
		width: 226upx;
		height: 292upx;
		border-radius: 14upx;
		position: relative;
	}
	.business .area-view:nth-child(2) {
		margin: 0 10upx;
	}
	.business .area-view>image {
		width: 100%;
		height: 100%;
	}
	.business .mask {
		position: absolute;
		bottom: 15upx;
		left: 0;
		padding:0 19upx;
	}
	.business .ranking {
		width: 99upx;
		height: 32upx;
		background: linear-gradient(0deg, rgba(232, 129, 54, 1) 0%, rgba(232, 70, 53, 1) 100%);
		opacity: 0.8;
		border-radius: 32upx 0 32upx 0;
		font-size: 26upx;
		color: rgba(255, 255, 255, 1);
		line-height: 32upx;
		padding-left: 10upx;
	}
	.business .area-text {
		height: 27upx;
		font-size: 26upx;
		color: rgba(255, 255, 255, 1);
		line-height: 27upx;
		margin-top: 50upx;
	}
	.business .area-name {
		height: 27upx;
		font-size: 24upx;
		color: rgba(255, 255, 255, 1);
		line-height: 27upx;
		margin-top: 19upx;
	}
	.business .business_list_2 .business_list_banner image{
		width: 698upx;
		height: 305upx;
	}
	.business .business_list_3 .business_list_banner image{
		width: 698upx;
		height: 358upx;
	}
	.business .business_list_4 .business_list_banner image{
		width: 698upx;
		height: 357upx;
	}
	.business .business_list_5{
		padding: 60upx 0upx 40upx 0upx;
	}
	.business .business_list_5 .business_list_banner image{
		width: 750upx;
		height: 412upx;
	}
	.business .business_list_5 .business_h5{
		padding-left: 27upx;
		padding-right: 27upx;
	}
	.business .business_list_5 .business_h5:before{
		left: 27upx;
	}
	.business .business_list_5 .business_h5 .txt{
		right: 27upx;
	}
	.business .business_list_6 .business_list_banner image{
		width: 698upx;
		height: 358upx;
	}
	
	
	
</style>
