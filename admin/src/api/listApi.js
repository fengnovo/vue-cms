import request from './request'

// 保存用户信息
export const postList = body => {
  return request({
    url: 'admin/rest/listData/postList',
    method: 'post',
    data: body
  })
}

// 获取用户信息
export const getList = (query) => {
  return request({
    url: 'admin/rest/listData/getList',
    method: 'get',
    params: query
  })
}

// 修改用户信息
export const editList = (body) => {
  return request({
    url: "admin/rest/listData/editList",
    method: 'post',
    data: body
  })
}
// 删除用户
export const deleteList = (body) => {
  return request({
    url: "admin/rest/listData/deleteList",
    method: 'post',
    data: body
  })
}

// lowcode
export const lowcode = () => {
  return request({
    url: "admin/rest/listData/lowcode",
    method: 'get',
  })
}