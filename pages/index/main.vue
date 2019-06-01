<template name="index">
	<view id="app" class="main">
	<view class="pages">
		
		<topSearch :title="mapName"></topSearch>
		
		<view class="banner">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :circular="banner.circular" :indicator-dots="banner.indicatorDots" :indicator-color="banner.indicatorColorOff" :indicator-active-color="banner.indicatorColorOn" :autoplay="banner.autoplay" :interval="banner.interval" :duration="banner.duration" :display-multiple-items="banner.displayItems" :previous-margin="banner.previousM" :next-margin="banner.nextM">
							<swiper-item v-for="(item , index) in banner_list">
								<view class="swiper-item">
									<image :src="item.ad_code"></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		
		<view class="index_class">
			<view class="index_class_item item1" @click="goClassPages('indexnav1/wisdomIndex')">
				<text>智@九华</text>
				<image src="../../static/index/index_class_1.png"></image>
			</view>
			<view class="index_class_item item2" @click="goClassPages('indexnav2/index')">
				<text>循@九华</text>
				<image src="../../static/index/index_class_2.png"></image>
			</view>
			<view class="index_class_item item3" @click="goClassPages('indexnav3/live_box')">
				<text>住@九华</text>
				<image src="../../static/index/index_class_3.png"></image>
			</view>
			<view class="index_class_item item4" @click="goClassPages('indexnav4/edge_hua')">
				<text>缘@九华</text>
				<image src="../../static/index/index_class_4.png"></image>
			</view>
			<view class="index_class_item item5" @click="goClassPages('indexnav5/food')">
				<text>食@九华</text>
				<image src="../../static/index/index_class_5.png"></image>
			</view>
			<view class="index_class_item item6" @click="goClassPages('indexnav6/index_neighborhood')">
				<text>九华比邻</text>
				<image src="../../static/index/index_class_6.png"></image>
			</view>
		</view>
		
		<view class="index_notice">
			<view class="index_notice_con">
				<image src="../../static/index/index_notice.png"></image>
				<view class="index_notice_swiper">
					<view class="uni-padding-wrap">
						<view class="page-section swiper">
							<view class="page-section-spacing">
								<swiper class="swiper" :circular="notice.circular" :autoplay="notice.autoplay" :interval="notice.interval" :duration="notice.duration" :vertical="notice.vertical">
									<swiper-item>
										<view class="swiper-item">
											<text>为庆祝端午假来临，九华回馈新来客户活动...</text>
										</view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-item">
											<text>为庆祝端午假来临，九华回馈新来客户活动...</text>
										</view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-item">
											<text>为庆祝端午假来临，九华回馈新来客户活动...</text>
										</view>
									</swiper-item>
								</swiper>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="index_hdzx">
			<view class="index_hdzx_h">
				<text class="h">活动资讯</text>
				<text class="p">在这里，会得到你意想不到的！</text>
				<image src="../../static/index/index_more.png"></image>
			</view>
			<view class="index_hdzx_con">
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" :circular="hdzx.circular" :autoplay="hdzx.autoplay" :interval="hdzx.interval" :duration="hdzx.duration" :display-multiple-items="hdzx.displayItems" :previous-margin="hdzx.previousM" :next-margin="hdzx.nextM">
								<swiper-item v-for="(list1,index1) in contentList1" :key="index1" @click="goClassPages('./indexnav2/articleInner',list1.article_id)">
									<view class="swiper-item">
										<view class="index_hdzx_list">
											<image :src="list1.thumb"></image>
											<view class="index_hdzx_txt">
												<text class="h">{{list1.title}}</text>
												<text class="p">{{list1.description}}</text>
											</view>
										</view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="index_hdzx index_syzx">
			<view class="index_hdzx_h">
				<text class="h">商业资讯</text>
				<text class="p">让您随时随地了解业界事件！</text>
				<image src="../../static/index/index_more.png"></image>
			</view>
			<view class="index_hdzx_con">
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" :circular="syzx.circular" :autoplay="syzx.autoplay" :interval="syzx.interval" :duration="syzx.duration" :display-multiple-items="syzx.displayItems" :next-margin="syzx.nextM">
								<swiper-item v-for="(list2,index2) in contentList2" :key="index2" @click="goClassPages('./indexnav2/articleInner',list2.article_id)">
									<view class="swiper-item">
										<view class="index_hdzx_list">
											<image :src="list2.thumb"></image>
											<view class="index_hdzx_txt">
												<text class="h">{{list2.title}}</text>
											</view>
										</view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="index_shop">
			<view class="index_shop_h">
				<text class="h">商铺</text>
				<text class="p">商铺可以有，生活不将就！</text>
			</view>
			<view class="index_shop_con">
				<view class="index_shop_list">
					<view class="index_shop_img">
						<image src="../../static/index/index_shop_1.png"></image>
						<text><image src="../../static/index/index_shop_map.png"></image></text>
					</view>
					<view class="index_shop_txt">
						<view class="index_shop_txt_h">龙湖九华星悦坊公寓......</view>
						<view class="index_shop_txt_p">距离盈丰路地铁站258米<text>43分钟</text></view>
						<view class="index_shop_txt_span">128m²</view>
						<view class="index_shop_txt_font">12万/年</view>
					</view>
				</view>
				<view class="index_shop_list">
					<view class="index_shop_img">
						<image src="../../static/index/index_shop_2.png"></image>
						<text><image src="../../static/index/index_shop_map.png"></image></text>
					</view>
					<view class="index_shop_txt">
						<view class="index_shop_txt_h">龙湖九华星悦坊公寓......</view>
						<view class="index_shop_txt_p">距离盈丰路地铁站258米<text>43分钟</text></view>
						<view class="index_shop_txt_span">128m²</view>
						<view class="index_shop_txt_font">12万/年</view>
					</view>
				</view>
				<view class="index_shop_list">
					<view class="index_shop_img">
						<image src="../../static/index/index_shop_3.png"></image>
						<text><image src="../../static/index/index_shop_map.png"></image></text>
					</view>
					<view class="index_shop_txt">
						<view class="index_shop_txt_h">龙湖九华星悦坊公寓......</view>
						<view class="index_shop_txt_p">距离盈丰路地铁站258米<text>43分钟</text></view>
						<view class="index_shop_txt_span">128m²</view>
						<view class="index_shop_txt_font">12万/年</view>
					</view>
				</view>
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
				windowW:'',
				banner:{    //首页banner轮播
					indicatorDots: true,
					autoplay: true,
					circular:true,
					interval: 6000,
					duration: 500,
					displayItems: 1,
					previousM: '',
					nextM: '',
					indicatorColorOff:"#999999",
					indicatorColorOn:"#C90009"
				},
				notice:{    //活动公告
					autoplay:true,
					interval:5000,
					duration:300,
					circular:true,
					vertical:true
				},
				hdzx:{    //活动资讯
					autoplay:false,
					circular:true,
					interval: 6000,
					duration: 500,
					displayItems: 1,
					previousM:'',
					nextM: '',
				},
				syzx:{    //商业资讯
					autoplay:false,
					circular:true,
					interval: 6000,
					duration: 500,
					displayItems: 2,
					nextM: '',
				},
				banner_list:[],
				contentList1:[],
				contentList2:[],
			}
		},
		created(){
			let _this=this;
		},
		mounted(){
			let _this=this;
			//轮播自适应
			uni.getSystemInfo({
				success: function (res) {
					_this.windowW=res.windowWidth;
					_this.banner.previousM=_this.windowW*13/375;
					_this.banner.nextM=_this.windowW*20/375;
					_this.hdzx.previousM=_this.windowW*0/375;
					_this.hdzx.nextM=_this.windowW*85/375;
					_this.syzx.nextM=_this.windowW*0/375;
				}
			});
			
			//baner
			_this.getBanner();	
			_this.events1();
			_this.events2();
		},
		methods: {
			goClassPages(url,id){
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
					id:2,
				};
				_this.$axios(_this.$baseUrl.banner,data).then(res =>{
					if(res.data.status==1){
						_this.banner_list = res.data.result.banner;
					}
				}).catch(error =>{
					
				})
			},
			// 活动列表
			events1:function(){
				let _this=this;
				let data={
					type:7,
				};
				_this.$axios(_this.$baseUrl.events1,data).then(res =>{
					if(res.data.status==1){
						_this.contentList1 = res.data.result.articles;
					}
				}).catch(error =>{
					
				})
			},
			// 商业列表
			events2:function(){
				let _this=this;
				let data={
					type:8,
				};
				_this.$axios(_this.$baseUrl.events1,data).then(res =>{
					if(res.data.status==1){
						_this.contentList2 = res.data.result.articles;
					}
				}).catch(error =>{
					
				})
			},
			childMethod() {
			},
		},
		
	}
</script>

<style>
	.main .pages{
		padding-top: 45upx;
		padding-bottom: 50upx;
	}
	.main .banner{
		margin-top: 29upx;
		margin-bottom: 50upx;
	}
	.main .banner .swiper-item image{
		width: 652upx;
		height: 330upx;
	}
	.main .banner .swiper{
		height: 383upx;
	}
	
	.main .index_class{
		padding: 0 26upx;
		display: flex;
		flex-wrap:wrap;
	}
	.main .index_class .index_class_item{
		width:220upx;
		height:119upx;
		border-radius:10upx;
		position: relative;
	}
	.main .index_class_item image{
		width: 84upx;
		height: 65upx;
		position: absolute;
		bottom: 0;
		right: 18upx;
	}
	.main .index_class .index_class_item text{
		position: absolute;
		top: 26upx;
		left: 11upx;
		height: 23upx;
		font-size:24upx;
		font-weight:bold;
		line-height:23upx;
	}
	.main .index_class .index_class_item.item1 text{
		color:rgba(255,173,62,1);
	}
	.main .index_class .index_class_item.item2 text{
		color:rgba(235,89,88,1);
	}
	.main .index_class .index_class_item.item3 text{
		color:rgba(112,155,245,1);
	}
	.main .index_class .index_class_item.item4 text{
		color:rgba(234,84,83,1);
	}
	.main .index_class .index_class_item.item5 text{
		color:rgba(112,155,245,1);
	}
	.main .index_class .index_class_item.item6 text{
		color:rgba(255,173,62,1);
	}
	
	.main .index_class .index_class_item.item1{
		background:rgba(255,237,213,1);
		margin-right: 19upx;
		margin-bottom: 19upx;
	}
	.main .index_class .index_class_item.item2{
		background:rgba(255,221,220,1);
		margin-right: 19upx;
		margin-bottom: 19upx;
	}
	.main .index_class .index_class_item.item3{
		background:rgba(207,227,255,1);
		margin-right: 0upx;
		margin-bottom: 19upx;
	}
	.main .index_class .index_class_item.item4{
		background:rgba(255,221,220,1);
		margin-right: 19upx;
	}
	.main .index_class .index_class_item.item5{
		background:rgba(207,227,255,1);
		margin-right: 19upx;
	}
	.main .index_class .index_class_item.item6{
		background:rgba(255,237,213,1);
		margin-right: 0upx;
	}
	.main .index_notice{
		padding: 0 26upx;
		margin: 96upx 0;
	}
	.main .index_notice_con{
		height:88upx;
		background:rgba(255,255,255,1);
		box-shadow:0upx 0upx 7upx 0upx rgba(191, 191, 191, 0.35);
		border-radius:10upx;
		position: relative;
		padding: 0 46upx 0 98upx;
	}
	.main .index_notice_con>image{
		position: absolute;
		width: 50upx;
		height: 41upx;
		top: 24upx;
		left: 15upx;
	}
	.main .index_notice .swiper{
		height: 88upx;
	}
	.main .index_notice .swiper-item text{
		font-size:28upx;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:88upx;
		height: 88upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.main .index_hdzx{
		width: 100%;
	}
	.main .index_hdzx_h{
		padding: 0 26upx;
		position: relative;
		margin-bottom: 18upx;
	}
	.main .index_hdzx_h text.h{
		display: block;
		height:32upx;
		font-size:32upx;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:32upx;
		margin-bottom: 18upx;
	}
	.main .index_hdzx_h text.p{
		display: block;
		height:24upx;
		font-size:22upx;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:24upx;
	}
	.main .index_hdzx_h image{
		position: absolute;
		width: 12upx;
		height: 22upx;
		top: 5upx;
		right: 26upx;
	}
	.main .index_hdzx_con{
		padding: 10upx;
	}
	.main .index_hdzx_con .swiper{
		height: 482upx;
	}
	.main .index_hdzx_list{
		width: 530upx;
		box-shadow:0upx 0upx 7upx 0upx rgba(191, 191, 191, 0.35);
		border-radius:10upx;
	}
	.main .index_hdzx_list image{
		width: 530upx;
		height: 307upx;
	}
	.main .index_hdzx_txt{
		padding: 28upx 15upx;
	}
	.main .index_hdzx_txt text.h{
		height:30upx;
		font-size:28upx;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:30upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin-bottom: 25upx;
	}
	.main .index_hdzx_txt text.p{
		height:24upx;
		font-size:22upx;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:24upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.main .index_hdzx_con .swiper-item{
		padding: 13upx;
	}
	.main .index_syzx{
		margin-top: 70upx;
	}
	.main .index_syzx .index_hdzx_con{
		padding: 0;
		padding-left: 26upx;
	}
	.main .index_syzx .index_hdzx_list{
		width: 342upx;
		box-shadow:none;
		border-radius:0;
	}
	.main .index_syzx .index_hdzx_list image{
		width: 342upx;
		height: 257upx;
	}
	.main .index_syzx .index_hdzx_txt text.h{
		text-align: center;
		margin-bottom: 0;
	}
	.main .index_syzx .index_hdzx_con .swiper-item{
		padding: 0;
	}
	.main .index_syzx .index_hdzx_h{
		margin-bottom: 36upx;
	}
	.main .index_syzx .index_hdzx_txt{
		padding: 28upx 0;
	}
	.main .index_syzx .index_hdzx_con .swiper{
		height: 352upx;
	}
	
	.main .index_shop{
		padding: 0 26upx;
		margin: 70upx 0;
	}
	
	.main .index_shop_h{
		position: relative;
		margin-bottom: 36upx;
	}
	.main .index_shop_h text.h{
		display: block;
		height:32upx;
		font-size:32upx;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:32upx;
		margin-bottom: 18upx;
	}
	.main .index_shop_h text.p{
		display: block;
		height:24upx;
		font-size:22upx;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:24upx;
	}
	
	.main .index_shop_con{
		width: 100%;
	}
	.main .index_shop_list{
		display: flex;
	}
	.main .index_shop_img{
		position: relative;
	}
	.main .index_shop_img image{
		width: 223upx;
		height: 160upx;
	}
	.main .index_shop_txt{
		width: calc(100% - 254upx);
		margin-left: 31upx;
		padding-bottom: 27upx;
		position: relative;
		margin-bottom: 29upx;
	}
	.main .index_shop_txt_h{
		height:28upx;
		font-size:28upx;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:28upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.main .index_shop_txt_p{
		width: 100%;
		height:20upx;
		font-size:20upx;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:20upx;
		position: relative;
		margin-top: 19upx;
		margin-bottom: 22upx;
	}
	.main .index_shop_txt_p text{
		height:20upx;
		font-size:20upx;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:20upx;
		position: absolute;
		top: 0;
		right: 0;
	}
	.main .index_shop_txt_span{
		height:24upx;
		font-size:24upx;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:24upx;
		margin-bottom: 22upx;
	}
	.main .index_shop_txt_font{
		height:24upx;
		font-size:24upx;
		font-weight:500;
		color:rgba(201,0,9,1);
		line-height:24upx;
	}
	.main .index_shop_txt:before{
		content: '';
		width: calc(100% + 31upx);
		height:1upx;
		border:1upx solid rgba(238,238,238,1);
		position: absolute;
		bottom: 0;
		right: 0;
	}
	
	
</style>
