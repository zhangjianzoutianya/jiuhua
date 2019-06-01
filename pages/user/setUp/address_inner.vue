<template>
	<view id="app">
		<view class="adress_con">

			<view class="address_inner">
				<text>收货人</text>
				<input v-model="consignee">
			</view>
			<view class="address_inner">
				<text>联系电话</text>
				<input v-model="mobile">
			</view>
			<view class="address_inner" @click="shouAddress()">
				<text>所在地区</text>
				<view><text>{{province}}</text><text>{{city}}</text><text>{{district}}</text><image src="../../../static/user/login/more.png"></image></view>
			</view>
			<view class="address_inner address_inner_textarea">
				<textarea v-model="address"></textarea>
			</view>
			
			<view class="address_delete" @click="deleteFun(address_id)">
				删除地址
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
				address:'',
				token:'',
				channel:1,
				is_default:'',
			}
		},
		onLoad: function (option) {
			let _this=this;
			_this.address_id=option.id;
			_this.consignee=option.consignee;
			_this.mobile=option.mobile;
			_this.province=option.province;
			_this.city=option.city;
			_this.district=option.district;
			_this.address=option.address;
			console.log(option.consignee)
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
				_this.province=val.checkArr[0];
				_this.province1=val.defaultVal[0];
				_this.city=val.checkArr[1];
				_this.city1=val.defaultVal[1];
				_this.district=val.checkArr[2];
				_this.district1=val.defaultVal[2];
			},
			save:function(){
				let _this=this;
				let data={
					channel:_this.channel,
					token:_this.token,
					address_id:_this.address_id,
					consignee:_this.consignee,
					province:_this.province,
					city:_this.city,
					district:_this.district,
					address:_this.address,
					mobile:_this.mobile,
					is_default:_this.is_default
				};
				_this.$axios(_this.$baseUrl.editAddress,data).then(res =>{
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
			},
			deleteFun(address_id){
				let _this=this;
				uni.showModal({
					title: '提示',
					content: '确认要删除该地址吗？',
					success: function (res) {
						if (res.confirm) {
							let data={
								channel:1,
								token:_this.token,
								address_id:address_id,
							};
							_this.$axios(_this.$baseUrl.delAddress,data).then(res =>{
								if(res.data.status==1){
									setTimeout(function(){
										uni.navigateBack({
											delta: 1
										});
										//_this.$store.commit('resturantName', true);
									},1000)
								}
							}).catch(error =>{
								
							})
						} else if (res.cancel) {
							
						}
					}
				});
				
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
	.address_inner view text{
		display: inline-block;
		font-size:26upx;
		font-weight:500;
		color:rgba(153,153,153,1);
		vertical-align: top;
		margin-right: 16upx;
	}
	.address_inner view image{
		width: 16upx;
		height: 31upx;
	}
	.address_inner_textarea{
		padding:20upx 26upx;
		background:rgba(241,241,241,1);
		border-bottom: none;
	}
	.address_inner textarea{
		width:100%;
		height:210upx;
		font-size:26upx;
		line-height: 30upx;
		color:rgba(102,102,102,1);
		letter-spacing: 1upx;
	}
	.address_delete{
		padding: 30upx 26upx;
		background: #fff;
		margin-top: 25upx;
		font-size:30upx;
		font-weight:500;
		color:rgba(201,0,9,1);
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
