<template>
  <div class="list-all">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="list-content">
      <div class="list-header">
        <el-form :inline="true" :model="searchForm" class="demo-form-inline">
          <el-form-item>
            <el-input v-model.trim="searchForm.userId" placeholder="请输入用户Id" size="medium"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch" size="medium" icon="el-icon-search">查询</el-button>
            <el-button @click="onRefresh" size="medium" icon="el-icon-refresh">清空</el-button>
            <el-button type="success" icon="el-icon-plus" size="medium" @click="addOpenBtn">添加</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="list-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="title" label="标题" width="180" />
          <el-table-column prop="name" label="名字" width="180" />
          <el-table-column label="图标">
            <template slot-scope="scope">
              <el-avatar :size="50" :src="scope.row.icon"></el-avatar>
            </template>
          </el-table-column>
          <el-table-column prop="content" label="内容" width="180" />
          <el-table-column prop="_id" label="ID" />
          <el-table-column label="编辑">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">Edit</el-button>
              <el-button size="mini" @click="handleDelete(scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 添加人员信息 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%" @close="closeDialog">
      <div class="dialog-listForm">
        <el-form ref="listForm" :model="listForm" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="listForm.title" size="medium" />
          </el-form-item>
          <el-form-item label="名字">
            <el-input v-model="listForm.name" size="medium" />
          </el-form-item>
          <el-form-item label="内容">
            <el-input v-model="listForm.content" size="medium" />
          </el-form-item>
          <el-form-item label="图片上传">
           <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="listForm.icon" :src="listForm.icon" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addUserBtn(dialogTitle)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getList, postList, editList, deleteList } from '@/api/listApi'
export default {
  name: 'userManagement',
  data(){
    return{
     tableData:[],
     searchForm:{
       userId:''
     },
     dialogVisible: false,
     dialogTitle: '添加列表数据',
     listForm:{
      title: '',
      name: '',
      content: '',
      icon: ''
     },
     uploadUrl:'http://localhost:3000/admin/upload',
    }
  },
  created(){
    this.ininTableData()
  },
  methods:{
    async ininTableData(){
      const {data: res} = await getList({pageNum: 100})
      this.tableData = res.data
    },
    async onSearch(){
      const {data: res} = await getList({userId: this.listForm.userId})
      this.tableData = res.data
    },
    onRefresh(){
      this.ininTableData()
    },
    addOpenBtn(){
      this.dialogTitle = '添加人员'
      this.dialogVisible = true
    },
    closeDialog(){
       Object.assign(this.$data.listForm, this.$options.data().listForm)
    },
    addUserBtn(){
      if (this.dialogTitle === '添加人员') {
        postList(this.listForm).then(() => {
          this.$message({
              message: '添加成功',
              type: 'success'
            });
          this.dialogVisible = false
          this.ininTableData()
        })
       } else {
          editList(this.listForm).then(()=>{
            this.dialogVisible = false
            this.ininTableData()
          })
       }
    },
    handleEdit(row){
      this.dialogVisible = true
      this.dialogTitle = '编辑人员'
      this.listForm = {...this.listForm, ...row}
    },
   handleDelete(row){
     deleteList(row).then(()=>{
       this.ininTableData()
     })
    },
    // 上传成功
    handleAvatarSuccess(res, file) {
      this.listForm.icon = res.url
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 上传之前
    beforeAvatarUpload(file) {
      console.log(file)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list-all{
  .list-content{
    padding: 20px;
  }
  ::v-deep .el-dialog__footer{
    border-top: 1px solid #f2f2f2;
    text-align: center;
  }
}
.avatar-uploader{
  ::v-deep{
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
}
</style>
