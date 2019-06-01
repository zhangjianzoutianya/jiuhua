<template>
	<view id="app">
		<view class="adress_con">

			<view class="address_inner">
				<text>收货人</text>
				<input v-model="consignee" placeholder="姓名">
			</view>
			<view class="address_inner">
				<text>联系电话</text>
				<input v-model="mobile" placeholder="请输入手机号">
			</view>
			<view class="address_inner">
				<text>所在地区</text>
				<input v-model="pcd" placeholder="请选择所在地区" @click="shouAddress()">
				<image src="../../../static/user/login/more.png" @click="shouAddress()"></image>
			</view>
			<view class="address_inner">
				<text>详细地址</text>
				<textarea v-model="address" placeholder="如道路、门牌号、小区、楼栋号、单元 室等"></textarea>
			</view>
			
			
			<view class="address_delete">
				设为默认地址
				<text :class="{'active':is_default}" @click="isDefault()"></text>
			</view>
				
			<view class="adress_add" @click="save()">
				保存
			</view>
			
			<w-picker mode="region" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker" themeColor="#c90009"></w-picker>
			
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				defaultVal:[10,0,5],
				address_id:'',
				consignee:'',
				mobile:'',
				province:'',
				province1:'',
				city:'',
				city1:'',
				district:'',
				district1:'',
				pcd:'',
				address:'',
				token:'',
				channel:1,
				is_default:false,
			}
		},
		created(){
			let _this=this;
			uni.getStorage({
				key: 'token',
				success: function (res) {
					_this.token=res.data;
				}
			});
		},
		mounted(){
			let _this=this;
		},	
		methods: {
			shouAddress:function(){
				let _this=this;
				_this.$refs.picker.show();
			},
			onConfirm:function(val){
				let _this=this;
				console.log(JSON.stringify(val))
				_this.pcd=val.result;
				_this.province=val.checkArr[0];
				_this.province1=val.defaultVal[0];
				_this.city=val.checkArr[1];
				_this.city1=val.defaultVal[1];
				_this.district=val.checkArr[2];
				_this.district1=val.defaultVal[2];
			},
			isDefault:function(){
				let _this=this;
				if(_this.is_default){
					_this.is_default=false;
					return
				}else{
					_this.is_default=true;
					return
				}
			},
			save:function(){
				let _this=this;
				let data={
					channel:_this.channel,
					token:_this.token,
					consignee:_this.consignee,
					province:_this.province,
					city:_this.city,
					district:_this.district,
					address:_this.address,
					mobile:_this.mobile,
					is_default:_this.is_default
				};
				_this.$axios(_this.$baseUrl.addAddress,data).then(res =>{
					if(res.data.status==1){
						uni.showToast({
							title: res.data.msg,
							icon:'success',
							duration: 1000
						});
						setTimeout(function(){
							uni.navigateBack({
								delta: 1
							});
							//_this.$store.commit('resturantName', true);
						},1000)
					}
				}).catch(error =>{
					
				})
			}
		}
	}
</script>

<style>
	#app {
		background-color: rgba(247, 247, 247, 1);
		width: 100%;
		min-height: 100%;
		overflow: hidden;
	}
	.adress_con{
		width: 100%;
		border-top: 1upx solid rgba(238,238,238,1);
		padding-bottom: 96upx;
	}
	.address_inner{
		padding: 0upx 26upx;
		display: flex;
		border-bottom: 1upx solid rgba(238,238,238,1);
		justify-content: space-between;
		background: #fff;
		position: relative;
	}
	.address_inner>text{
		width: 24%;
		height:90upx;
		font-size:30upx;
		color:rgba(51,51,51,1);
		line-height: 90upx;
	}
	.address_inner input{
		width: 76%;
		height:90upx;
		font-size:30upx;
		color:rgba(51,51,51,1);
		line-height: 90upx;
		border: none;
	}
	.address_inner view{
		width: 76%;
		height:90upx;
		line-height: 90upx;
		text-align: right;
	}
	.address_inner image{
		width: 16upx;
		height: 31upx;
		position: absolute;
		top: 29upx;
		right: 28upx;
	}
	.address_inner textarea{
		width: 76%;
		padding: 25upx 0;
		height:90upx;
		font-size:30upx;
		color:rgba(153,153,153,1);
		line-height:45upx;
	}
	
	
	.address_delete{
		padding: 30upx 26upx;
		background: #fff;
		margin-top: 25upx;
		font-size:30upx;
		font-weight:500;
		color:rgba(201,0,9,1);
		position: relative;
	}
	.address_delete text{
		width: 31upx;
		height: 31upx;
		border:2upx solid rgba(102,102,102,1);
		margin-right: 10upx;
		border-radius: 100%;
		position: absolute;
		top: 33upx;
		right: 30upx;
		-webkit-transition:background-image 0.3s ease;	
		transition:background-image 0.3s ease;
	}
	.address_delete text.active{
		border:2upx solid #c90009;
		width: 31upx;
		height: 31upx;
		background-image: url(../../../static/user/adress_on.png);
		background-position: center;
		background-size: 105% 105%;
	}
	
	.adress_add{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		line-height: 96upx;
		height: 96upx;
		font-size:32upx;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
		background:rgba(201,0,9,1);
	}
	.adress_add image{
		width: 49upx;
		height: 49upx;
		margin-right: 16upx;
		vertical-align: -12upx;
	}
	
	
</style>
