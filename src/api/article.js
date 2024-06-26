import request from '@/utils/request'

export function deletePlan(data) {
  console.log(data._id)
  return request({
    url: `https://www.1wenzone.com/api/v1/delPlan`,
    method: 'post',
    data: {
      id: data._id
    }
  })
}

export function createPlan(data) {
  return request({
    url: 'https://www.1wenzone.com/api/v1/setPlan',
    method: 'post',
    data
  })
}

export function fetchPlanList(query) {
  return request({
    url: 'https://www.1wenzone.com/api/v1/getPlan',
    method: 'GET'
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
