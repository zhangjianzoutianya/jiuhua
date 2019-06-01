<template>
	<view>
		<view class="sou-su">
			<view class="sou-su-text">
				搜索
			</view>
			<view class="search">
				<image src="../../../static/user/integral/sou_su.png" mode=""></image>
				<view class="search-input">
					<input type="text" value="" placeholder="请输入商品名称" />
				</view>
			</view>
		</view>
		<view class="banner">
			<image :src="banner" mode=""></image>
		</view>
		<view class="integral" @click="exchangeRecords">
			<image src="../../../static/index/gen1.png" mode=""></image>
			<view class="integral1">
				兑换记录
			</view>
			<view class="integral2">
				积
			</view>
			<view class="integral3">
				{{user_points}}积分
			</view>
		</view>
		<view class="index_class">
			<view class="index_class_item item1" @click="goClassPages('../../index/indexnav1/wisdomIndex')">
				<text>智@九华</text>
				<image src="../../../static/index/index_class_1.png"></image>
			</view>
			<view class="index_class_item item2" @click="goClassPages('../../index/indexnav2/index')">
				<text>循@九华</text>
				<image src="../../../static/index/index_class_2.png"></image>
			</view>
			<view class="index_class_item item3" @click="goClassPages('../../index/indexnav3/live_box')">
				<text>住@九华</text>
				<image src="../../../static/index/index_class_3.png"></image>
			</view>
			<view class="index_class_item item4" @click="goClassPages('../../index/indexnav4/edge_hua')">
				<text>缘@九华</text>
				<image src="../../../static/index/index_class_4.png"></image>
			</view>
			<view class="index_class_item item5" @click="goClassPages('../../index/indexnav5/food')">
				<text>食@九华</text>
				<image src="../../../static/index/index_class_5.png"></image>
			</view>
			<view class="index_class_item item6">
				<text>九华比邻</text>
				<image src="../../../static/index/index_class_6.png"></image>
			</view>
		</view>
		<view class="null"></view>
		<view class="comm-title">
			<image class="img1" src="../../../static/user/integral/left.png" mode=""></image>
			<view class="comm-text">
				兑换专区
			</view>
			<image class="img2" src="../../../static/user/integral/right.png" mode=""></image>
		</view>
		<view class="comm">
			<view class="comm-info" @click="integralDetails('integral_details',list.integral_id)" v-for="(list,index) in pointShopList" :key="index">
				<view class="comm-img">
					<image :src="list.original_img" mode=""></image>
				</view>
				<view class="commtitle">
					{{list.integral_name}}
				</view>
				<view class="commtime">
                    {{list.exchange_integral}}积分+{{list.shop_price}}元
				</view>
				<view class="exchange">
					立即兑换
				</view>
			</view>
			
		</view>
		<uniLoadMore v-if="allPages!=1"  :loadingType="loadingType" :contentText="contentText" ></uniLoadMore>
	</view>
</template>

<script>
	import uniLoadMore from '../../../components/uni-load-more.vue';
	export default {
		 components: {//2注册组件
			uniLoadMore
		},
		data() {
			return {
				banner:{},
				token:'',
				page:1,
				user_points:'',
				allPages:'',
				pointShopList:[],
				loadingText: '加载中...',
				loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown:'上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				}
			}
		},
		created:function(){ 
			var _this = this;
			uni.getStorage({
				 key: 'token',
				 success: function (res) {
					 _this.token = res.data
				}
			})
		},
		onReachBottom:function(){
			let _this=this;
			_this.pointShop();
		},
		mounted(){
			let _this=this;
			//baner
			_this.getBanner();	
			_this.pointShop();
		},	
		methods: {
			goClassPages:function(url){
				uni.navigateTo({
					url:url,
				})
			},
			exchangeRecords() {
				uni.navigateTo({
					url:"exchange_records",
				})
			},
			integralDetails(url,id) {
				if(id!=''){
					url = url+'?id='+id
				}
				uni.navigateTo({
					url:url
				})
			},
			
			//banner
			getBanner:function(){
				let _this=this;
				let data={
					id:1,
				};
				_this.$axios(_this.$baseUrl.banner,data).then(res =>{
					if(res.data.status==1){
						_this.banner=res.data.result.banner[0];
					}
				}).catch(error =>{
					
				})
			},
			//列表
			pointShop:function(){
				let _this=this;
				let data={
					channel:1,
					token:_this.token,
					page:_this.page,
					
				};
				if (_this.loadingType !== 0) {//loadingType!=0;直接返回
					return false;
				}
				
				_this.loadingType = 1;
				uni.showNavigationBarLoading()
				_this.$axios(_this.$baseUrl.pointShop,data).then(res =>{
					if(res.data.status==1){
						if (res.data.result.integral == null ||res.data.result.integral==undefined ||res.data.result.integral=='' ) {//没有数据
						    _this.loadingType = 2;
						    uni.hideNavigationBarLoading();//关闭加载动画
						    return;
						}
						_this.page++
						_this.pointShopList = _this.pointShopList.concat(res.data.result.integral)
						_this.user_points = res.data.result.user_points;
						_this.allPages = res.data.result.pages;
						_this.loadingType = 0;//将loadingType归0重置
						uni.hideNavigationBarLoading();//关闭加载动画
					}else{
						_this.loadingType = 2;
						uni.hideNavigationBarLoading();//关闭加载动画
					}
				}).catch(error =>{
					
				})
			}
		}
	}
</script>

<style>
	.sou-su {
		width: 100%;
		height: 94upx;
		overflow: hidden;
	}

	.sou-su-text {
		float: right;
		width: 110upx;
		height: 94upx;
		font-size: 28upx;
		text-align: center;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 94upx;
	}

	.search {
		width: 603upx;
		height: 60upx;
		overflow: hidden;
		margin-top: 17upx;
		margin-left: 25upx;
		background: rgba(243, 243, 243, 1);
		border-radius: 10upx;
	}

	.search>image {
		width: 32upx;
		height: 32upx;
		margin: 14upx;
		float: left;
	}

	.search-input {
		width: 500upx;
		height: 60upx;
		overflow: hidden;
	}

	.search-input>input {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		height: 60upx;
		line-height: 60upx;
		color: rgba(50, 50, 50, 1);
		line-height: 24upx;
	}

	.banner {
		width: 100%;
		height: 237upx;
		overflow: hidden;
	}

	.banner>image {
		width: 100%;
		height: 100%;
	}

	.integral {
		width: 100%;
		height: 97upx;
		border-bottom: 1upx solid rgba(238, 238, 238, 1);
		overflow: hidden;
	}

	.integral>image {
		width: 12upx;
		height: 20upx;
		margin: 38.5upx 29upx;
		float: right;
	}

	.integral1 {
		float: right;
		height: 97upx;
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 97upx;
	}

	.integral2 {
		width: 44upx;
		height: 44upx;
		background: rgba(201, 0, 9, 1);
		border-radius: 50%;
		margin: 26.5upx 26upx;
		float: left;
		font-size: 24upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 44upx;
		box-shadow: 1upx 0upx 5upx rgb(201,0,9);
	}

	.integral3 {
		height: 97upx;
		line-height: 97upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(201, 0, 9, 1);
	}
	
	.index_class{
		padding: 0 26upx;
		display: flex;
		flex-wrap:wrap;
		margin-top: 32upx;
		margin-bottom: 62upx;
	}
	.index_class .index_class_item{
		width:220upx;
		height:119upx;
		border-radius:10upx;
		position: relative;
	}
	.index_class_item image{
		width: 84upx;
		height: 65upx;
		position: absolute;
		bottom: 0;
		right: 18upx;
	}
	.index_class .index_class_item text{
		position: absolute;
		top: 26upx;
		left: 11upx;
		height: 23upx;
		font-size:24upx;
		font-weight:bold;
		line-height:23upx;
	}
	.index_class .index_class_item.item1 text{
		color:rgba(255,173,62,1);
	}
	.index_class .index_class_item.item2 text{
		color:rgba(235,89,88,1);
	}
	.index_class .index_class_item.item3 text{
		color:rgba(112,155,245,1);
	}
	.index_class .index_class_item.item4 text{
		color:rgba(234,84,83,1);
	}
	.index_class .index_class_item.item5 text{
		color:rgba(112,155,245,1);
	}
	.index_class .index_class_item.item6 text{
		color:rgba(255,173,62,1);
	}
	
	.index_class .index_class_item.item1{
		background:rgba(255,237,213,1);
		margin-right: 19upx;
		margin-bottom: 19upx;
	}
	.index_class .index_class_item.item2{
		background:rgba(255,221,220,1);
		margin-right: 19upx;
		margin-bottom: 19upx;
	}
	.index_class .index_class_item.item3{
		background:rgba(207,227,255,1);
		margin-right: 0upx;
		margin-bottom: 19upx;
	}
	.index_class .index_class_item.item4{
		background:rgba(255,221,220,1);
		margin-right: 19upx;
	}
	.index_class .index_class_item.item5{
		background:rgba(207,227,255,1);
		margin-right: 19upx;
	}
	.index_class .index_class_item.item6{
		background:rgba(255,237,213,1);
		margin-right: 0upx;
	}
	.null {
		width:750upx;
height:20upx;
background:rgba(247,247,247,1);
	}
	.comm-title {
		width: 100%;
		height: 125upx;
		overflow: hidden;
	}
	.img1 {
		width: 85upx;
		height: 5upx;
		margin-top: 60upx;
		margin-left: 193upx;
		float: left;
	}
	.comm-text {
		width: 195upx;
		height: 125upx;
		line-height: 125upx;
		text-align: center;
		font-size:32upx;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(51,51,51,1);
float: left;
	}
	.img2 {
		width: 85upx;
		height: 5upx;
		margin-top: 60upx;
		float: left;
	}
	.comm {
		width: 702upx;
		overflow: hidden;
		margin: 0 auto;
		border-bottom: 1upx solid rgba(220,220,220,1);
		margin-bottom: 20upx;
	}
	.comm-info {
		width: 349upx;
		height: 392upx;
		overflow: hidden;
		float: left;
		
	}
	.comm-info:nth-child(odd) {
		border-top:1upx solid rgba(220,220,220,1);
		border-left: 1upx solid rgba(220,220,220,1);
		border-right: 1upx solid rgba(220,220,220,1);
	}
	.comm-info:nth-child(even) {
  border-top:1upx solid rgba(220,220,220,1);
  border-right: 1upx solid rgba(220,220,220,1);
}
	.comm-img {
		width: 176upx;
		height: 176upx;
		margin: 0 auto;
		margin-top: 32upx;
	}
	.comm-img > image {
		width: 100%;
		height: 100%;
	}
	.commtitle {
		width: 100%;
		min-height: 30upx;
		font-size:28upx;
		line-height: 1.5;
		text-align: center;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
margin-top: 31upx;
	}
	.commtime {
		width: 100%;
		height:24upx;
		text-align: center;
font-size:24upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(247,105,54,1);
margin-top: 15upx;
	}
	.exchange {
		width:114upx;
height:30upx;
border:1upx solid rgba(215,17,26,1);
border-radius:15px;
margin: 0 auto;
font-size:20upx;
line-height: 30upx;
text-align: center;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(215,17,26,1);
margin-top: 34upx;
	}
</style>
