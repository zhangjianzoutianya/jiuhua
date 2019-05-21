<template>
	<view class="livr_box">
		<view class="shop_lisu">
			<view class="shop_sousu">
				<view class="shop_sousu_img">
					<image src="../../../static/index/sou_su.png" mode=""></image>
				</view>
				<input type="text" value="" placeholder="输入意向位置/业态" />
			</view>
		</view>
		<view class="shom_box">
			<view class="shom_top">
				<view class="sopy_add">
					 <view class="shom_top_left"  @click="tabs(0)" :class="{'activ':indexs==0}">
					 	 <view class="shom_top_left_img">
					 	 	  <image class="acm_ty" src="../../../static/index/xia_snm.png" mode=""></image>
					 		  <image class="abm_on" src="../../../static/index/xia_snm1.png" mode=""></image>
					 	 </view>
						 <view class="uni-list">
						 	<view class="uni-list-cell">
						 		<view class="uni-list-cell-db">
						 			<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						 				<view class="uni-input">{{array[index].name}}</view>
						 			</picker>
						 		</view>
						 	</view>
						 </view>
					 </view>
					 <view class="shom_top_left" @click="tabs(1)" :class="{'activ':indexs==1}">
					 	 <view class="shom_top_left_img">
					 	 	  <image class="acm_ty" src="../../../static/index/xia_snm.png" mode=""></image>
					 		  <image class="abm_on" src="../../../static/index/xia_snm1.png" mode=""></image>
					 	 </view>
						 <view class="uni-list">
						 	<view class="uni-list-cell">
						 		<view class="uni-list-cell-db">
						 			<picker @change="bindPickerChange1" :value="index1" :range="array2" range-key="name">
						 				<view class="uni-input">{{array2[index1].name}}</view>
						 			</picker>
						 		</view>
						 	</view>
						 </view>
					 </view>
				</view>
			<!-- 选择 -->
			<!-- 列表 -->
			<view class="soping_list" >
				<view class="soping_li acm">
					 <view class="soping_list_conent" @click="goMsg('shop_inner')">
					 	<view class="soping_cone_left">
					 		<view class="soping_cone_img">
					 			<view class="ping_co">
					 				<image src="../../../static/index/logo_chanel.png" mode=""></image>
					 			</view>
					 		</view>
					 		<view class="soping_cone">
					 			<view class="sop_top">
					 				香奈儿集团
					 			</view>
					 			<view class="sop_botm">
					 				<text class="sbotm">精品礼盒</text>
					 				<text class="sbotm1">c3-c102</text>
					 			</view>
					 		</view>
					 	</view>
					 	<view class="soping_cone_right">
					 		<view class="acone_right_img">
					 			 <image src="../../../static/index/din_wei.png" mode=""></image>
					 		</view>
					 		<view class="acone_com">
					 			 到这里
					 		</view>
					 	</view>
					 </view>
					  <view class="soping_list_conent">
					 	<view class="soping_cone_left">
					 		<view class="soping_cone_img">
					 			<view class="ping_co">
					 				<image src="../../../static/index/logo_chanel.png" mode=""></image>
					 			</view>
					 		</view>
					 		<view class="soping_cone">
					 			<view class="sop_top">
					 				CK
					 			</view>
					 			<view class="sop_botm">
					 				<text class="sbotm">服装</text>
					 				<text class="sbotm1">B1-B103</text>
					 			</view>
					 		</view>
					 	</view>
					 	<view class="soping_cone_right">
					 		<view class="acone_right_img">
					 			 <image src="../../../static/index/din_wei.png" mode=""></image>
					 		</view>
					 		<view class="acone_com">
					 			 到这里
					 		</view>
					 	</view>
					 </view>
					  <view class="soping_list_conent">
						<view class="soping_cone_left">
							<view class="soping_cone_img">
								<view class="ping_co">
									<image src="../../../static/index/logo_chanel.png" mode=""></image>
								</view>
							</view>
							<view class="soping_cone">
								<view class="sop_top">
									施华洛世奇
								</view>
								<view class="sop_botm">
									<text class="sbotm">配饰</text>
									<text class="sbotm1">B2-B201</text>
								</view>
							</view>
						</view>
						<view class="soping_cone_right">
							<view class="acone_right_img">
								 <image src="../../../static/index/din_wei.png" mode=""></image>
							</view>
							<view class="acone_com">
								 到这里
							</view>
						</view>
					</view>
				</view>
				<view class="soping_li">
					 <view class="soping_list_conent">
					 	<view class="soping_cone_left">
					 		<view class="soping_cone_img">
					 			<view class="ping_co">
					 				<image src="../../../static/index/logo_chanel.png" mode=""></image>
					 			</view>
					 		</view>
					 		<view class="soping_cone">
					 			<view class="sop_top">
					 				香奈儿集团
					 			</view>
					 			<view class="sop_botm">
					 				<text class="sbotm">精品礼盒</text>
					 				<text class="sbotm1">c3-c102</text>
					 			</view>
					 		</view>
					 	</view>
					 	<view class="soping_cone_right">
					 		<view class="acone_right_img">
					 			 <image src="../../../static/index/din_wei.png" mode=""></image>
					 		</view>
					 		<view class="acone_com">
					 			 到这里
					 		</view>
					 	</view>
					 </view>
					  <view class="soping_list_conent">
					 	<view class="soping_cone_left">
					 		<view class="soping_cone_img">
					 			<view class="ping_co">
					 				<image src="../../../static/index/logo_chanel.png" mode=""></image>
					 			</view>
					 		</view>
					 		<view class="soping_cone">
					 			<view class="sop_top">
					 				香奈儿集团
					 			</view>
					 			<view class="sop_botm">
					 				<text class="sbotm">精品礼盒</text>
					 				<text class="sbotm1">c3-c102</text>
					 			</view>
					 		</view>
					 	</view>
					 	<view class="soping_cone_right">
					 		<view class="acone_right_img">
					 			 <image src="../../../static/index/din_wei.png" mode=""></image>
					 		</view>
					 		<view class="acone_com">
					 			 到这里
					 		</view>
					 	</view>
					 </view>  <view class="soping_list_conent">
					 	<view class="soping_cone_left">
					 		<view class="soping_cone_img">
					 			<view class="ping_co">
					 				<image src="../../../static/index/logo_chanel.png" mode=""></image>
					 			</view>
					 		</view>
					 		<view class="soping_cone">
					 			<view class="sop_top">
					 				香奈儿集团
					 			</view>
					 			<view class="sop_botm">
					 				<text class="sbotm">精品礼盒</text>
					 				<text class="sbotm1">c3-c102</text>
					 			</view>
					 		</view>
					 	</view>
					 	<view class="soping_cone_right">
					 		<view class="acone_right_img">
					 			 <image src="../../../static/index/din_wei.png" mode=""></image>
					 		</view>
					 		<view class="acone_com">
					 			 到这里
					 		</view>
					 	</view>
					 </view>
				</view>
			</view>
			
		</view>
			
		</view>
	</view>
	
</template>

<script>
	
	export default{
		data(){
			return{
				indexs:0,
				array: [{name:'基本展示'},{name:'中国'},{name: '美国'}, {name:'巴西'}, {name:'日本'}],
				array2: [{name:'楼层导视'},{name:'C3'},{name: 'C1'}, {name:'C4'}, {name:'C5'}],
				index: 0,
				index1: 0,
			}
		},
		methods:{
			tabs(o){
				this.indexs = o;
			},
			goMsg(url){
				uni.navigateTo({
					url:url
				})
			},
			bindPickerChange: function(e) {
				// console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index = e.target.value
			},
			bindPickerChange1: function(e) {
				// console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index1 = e.target.value
			},
			
		},
	}
</script>

<style scoped>
	.livr_box{
		width: 100%;
	}
	.shop_lisu{
		 padding: 0 26upx;
	}
	.shop_sousu{
		 position: relative;
		 width: 100%;
		 height: 60upx;
		 background: #F3F3F3;
		 border-radius: 10upx;
		 margin-top: 14upx;
	}
	.shop_sousu_img{
		width: 32upx;
		height: 32upx;
		position: absolute;
		top: 40%;
		left: 30%;
		transform: translate(-50%,-50%);
	}
	.shop_sousu_img image{
		width: 100%;
		height: 100%;
	}
	.shop_sousu input{
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 24upx;
		color: #999999;
		border-radius: 10upx;
	}
	.shom_top{
		width: 100%;
		
	}
	.sopy_add{
		width: 100%;
		display: flex;
		padding: 40upx 0 27upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.shom_top_left{
		width: 50%;
		display: flex;
		justify-content: center;
		font-size: 30upx;
		color: #333333;
		position: relative;
	}
	.shom_top_left_img{
		width: 14upx;
		height: 8upx;
		position: absolute;
		top: 50%;
		right: 25%;
		transform: translate(-50%,-50%);
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
	.soping_list{
		width: 100%;
	}
	.soping_list_conent{
		width: 93%;
		padding: 36upx 26upx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #EEEEEE;
	}
	.activ .abm_on{
		display: block!important;
	}
	.activ .acm_ty{
		display: none!important;
	}
	.soping_cone_left{
		display: flex;
	}
	.soping_cone_img{
		width: 156upx;
		height: 156upx;
		border: 1upx solid #EEEEEE;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 6upx;
	}
	.ping_co{
		width: 108upx;
		height: 17upx;
		margin-top: -50upx;
	}
	.ping_co image{
		width: 100%;
		height: 100%;
		
	}
	.soping_cone{
		margin-left: 44upx;
	}
	.sop_top{
		color: #333333;
		font-size: 28upx;
		padding: 30upx 0 23upx;
	}
	.sop_botm{
		display: flex;
	}
	.sbotm{
		position: relative;
		color: #C90009;
		font-size: 24upx;
		margin-right: 20upx;
	}
	.sbotm::after{
		width: 2upx;
		height: 80%;
		content: "";
		position: absolute;
		top: 20%;
		right: -10upx;
		background: #999999;
	}
	.sbotm1{
		color: #999999;
		font-size: 24upx;
	}
	.acone_right_img{
		width: 60upx;
		height: 60upx;
	}
	.acone_right_img image{
		width: 100%;
		height: 100%;
	}
	.acone_com{
		color: #999999;
		font-size: 20upx;
		margin-top: 11upx;
	}
	.soping_cone_right{
		padding-top: 30upx;
	}
	.soping_li{
		display: none;
	}
	.acm{
		display: block;
	}
</style>
