<template>
	<view class="pages">
		<index v-if="PageCur=='index'" ref="mainindex"></index>	
		<business v-if="PageCur=='business'" ref="mainindex"></business>	
		<user v-if="PageCur=='user'" ref="mainindex"></user>	
		<view class="footer">
			<view class="footer_list" :class="activeIndex==index?'active':''" v-for="(item,index) in footer_nav" @click=NavChange(index,item.PageCur)>
				<image :src="activeIndex==index ? item.select_icon : item.icon"></image>
				<view class="txt">{{item.name}}</view>
			</view>
		</view>
		
	</view>
</template>


<script>
	export default {
		data() {
			return {
				PageCur: 'index', 
				activeIndex:0,
				footer_nav:[
					{
						name:'九华首页',
						icon:'../../static/navbar/navbar1_on.png',
						select_icon:'../../static/navbar/navbar1.png',
						PageCur:'index',
					},
					{
						name:'智慧商业',
						icon:'../../static/navbar/navbar2_on.png',
						select_icon:'../../static/navbar/navbar2.png',
						PageCur:'business',
					},
					{
						name:'我的九华',
						icon:'../../static/navbar/navbar3_on.png',
						select_icon:'../../static/navbar/navbar3.png',
						PageCur:'user',
					},
					
				]
			}
		},
		created(){
			
		},
		mounted(){
			
		},
		methods: {
			NavChange:function(index, PageCur) {
				var _this=this;
				_this.activeIndex=index;
				_this.PageCur=PageCur;
			}
		},
		onShow(e) {
			this.$refs.mainindex.childMethod();
		}
	}
</script>

<style>
	.pages{
		
	}
	.footer{
		width: 100%;
		height: 98upx;
		position: fixed;
		bottom: 0;
		left: 0;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 13px 0px rgba(217, 217, 217, 0.35);
		display: flex;
	}
	.footer_list{
		width: 33.33%;
		text-align: center;
	}
	.footer_list image{
		display: block;
		margin: 0 auto;
		margin-bottom: 9upx;
	}
	.footer_list:nth-child(1) image{
		width: 42upx;
		height: 35upx;
		margin-top: 18upx;
	}
	.footer_list:nth-child(2) image{
		width: 42upx;
		height: 40upx;
		margin-top: 13upx;
	}
	.footer_list:nth-child(3) image{
		width: 44upx;
		height: 40upx;
		margin-top: 13upx;
	}
	.footer_list .txt{
		display: block;
		height:24upx;
		font-size:24upx;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:24upx;
	}
	.footer_list.active .txt{
		color:rgba(201,0,9,1);
	}
	
</style>
